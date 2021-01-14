import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post/Post';
import classes from './Posts.module.css';
import { Container } from 'reactstrap';
import Filters from '../Filters/Filters';
import Pagination from '../Pagination/Pagination'

class Posts extends Component {
  state={
    posts: [],
    loading: false,
    currentPage: 1,
    profilesPerPage: 20,
   search: '',
   filteredProfiles: [],
   active: false
}
componentDidMount(){
  const fetchingProfiles = async ()=>{
    this.setState({loading: true});
  const resp = await axios.get('http://api.enye.tech/v1/challenge/records');
  const posts = resp.data.records.profiles;
  // const lastProfileIndex = this.state.currentPage * this.state.profilesPerPage;
  //   const firstProfileIndex = lastProfileIndex - this.state.profilesPerPage;
      
  //       const displayedProfiles = posts.slice(firstProfileIndex, lastProfileIndex);
  
        this.setState({
            posts: posts,
            loading: false,
            filteredProfiles: posts
        })
        console.log(resp)
      }
      fetchingProfiles();
    
}
showProfiles = post =>{
  // const { search } = this.state;
  // if(search !=='' && `${post.FirstName} ${post.LastName}`.toLowerCase().indexOf(search.toLowerCase()) === -1){
  //   return null
  // }
return <Post 
key={post.PhoneNumber}
name={`${post.FirstName} ${post.LastName}`}
gender={post.Gender}
coordinates={`${post.Latitude} ${post.Longitude}`}
cardNo={post.CreditCardNumber}
cardType={post.CreditCardType}
email={post.Email}
domain={post.DomainName}
phone={post.PhoneNumber}
macAdd={post.MacAddress}
url={post.URL}
username={post.UserName}
login={post.LastLogin}
payment={post.PaymentMethod}
loading={this.state.loading}
/>
}
handlePageClick=(pageNumber) =>{
this.setState({currentPage: pageNumber})
if (this.state.currentPage === pageNumber){
  this.setState({active: true})
}

}
handleSearch =(e) =>{
  let target= e.target.value;
  let filteredProfiles = this.state.posts;
  if (target === ''){
    filteredProfiles= this.state.posts
  }
  else{
  filteredProfiles = filteredProfiles.filter(post=>{
    return `${post.FirstName} ${post.LastName}`.toLowerCase().indexOf(target.toLowerCase()) !== -1
  })
}
  this.setState({
    search: target,
    filteredProfiles: filteredProfiles
  })
if(filteredProfiles.length===0){

}
}
handleFilter=(value)=>{
  let filteredProfile= null;
  switch(value){
    case('male'):
    filteredProfile = this.state.filteredProfiles.filter(post=>{
      return post.Gender === 'Male'
    })
    this.setState({
      filteredProfiles: filteredProfile
    });
    break;
    case('female'):
    filteredProfile = this.state.filteredProfiles.filter(post=>{
      return post.Gender === 'Female'
    })
    this.setState({
      filteredProfiles: filteredProfile
    });
    break;
    case('others'):
    filteredProfile = this.state.posts.filter(post=>{
      return post.Gender !== 'Male' && post.Gender !== 'Female'
    })
    this.setState({
      filteredProfiles: filteredProfile
    });
    break;
    case('paypal'):
    filteredProfile = this.state.filteredProfiles.filter(post=>{
      return post.PaymentMethod === 'paypal'
    })
    this.setState({
      filteredProfiles: filteredProfile
    });
    break;
    case('cc'):
    filteredProfile = this.state.filteredProfiles.filter(post=>{
      return post.PaymentMethod === 'cc'
    })
    this.setState({
      filteredProfiles: filteredProfile
    });
    break;
    case('money'):
    filteredProfile = this.state.filteredProfiles.filter(post=>{
      return post.PaymentMethod === 'money order'
    })
    this.setState({
      filteredProfiles: filteredProfile
    });
    break;
    case('check'):
    filteredProfile = this.state.filteredProfiles.filter(post=>{
      return post.PaymentMethod === 'check'
    })
    this.setState({
      filteredProfiles: filteredProfile
    });
    break;
    default:
      filteredProfile= this.state.posts.filter(post=>{
        return post
      });
      this.setState({
        filteredProfiles: filteredProfile
      });
  }
}
  render() {
    
    const lastProfileIndex = this.state.currentPage * this.state.profilesPerPage;
    const firstProfileIndex = lastProfileIndex - this.state.profilesPerPage;
      
  const displayedProfiles = this.state.filteredProfiles.slice(firstProfileIndex, lastProfileIndex);
  //  const {search} = this.state;
  //  const filteredProfiles = this.state.posts.filter(post=>{
  //    return `${post.FirstName} ${post.LastName}`.toLowerCase().indexOf(search.toLowerCase()) !== -1
  //  })
  
    return(
     
      
      <Container>
            { this.state.loading ? <h2>Loading Profiles...</h2> : null}
       <Filters 
       search={this.state.search} 
       changed={this.handleSearch}
       filter={this.handleFilter}
      //  filterMale={this.handleMaleFilter}
      //  femaleFilter ={this.handleFemaleFilter}
      //  othersFilter={this.handleOthersFilter}
      //  checkFilter={this.handleCheckFilter}
      //  moneyFilter={this.handleMoneyFilter}
      //  ccFilter={this.handleCreditFilter}
       />
          <div className={classes.Posts} >
            {displayedProfiles.map(post=>{
            return this.showProfiles(post) })
          }
          </div>
          {this.state.search !== '' && this.state.filteredProfiles.length=== 0 ? <p>No Records Found</p> : null} 
          <Pagination 
          className={classes.Pagination} 
          pageLink={this.handlePageClick} 
          profilesPerPage={this.state.profilesPerPage} 
          totalProfiles={this.state.filteredProfiles.length}
          currentPage={this.state.currentPage} 
          />
          </Container>
       
    )
  }
}

export default Posts
