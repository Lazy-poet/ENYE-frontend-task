import React, { Component } from 'react'
import {ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu, Button } from 'reactstrap'
import classes from './FilterBar.module.css'
class FilterBar extends Component {
  constructor(props){
    super(props);
this.state={
    filtered: false,
    dropdownOpen: false
  }
  }
  
  handleClick=(e)=>{
    this.props.filter(e.target.value);
    this.setState({filtered: true})
  }
handleFilterClick =()=>{
this.props.filter('');
this.setState({
  filtered: false
})
}
  toggle=()=>{
    this.setState(state=> ({dropdownOpen: !state.dropdownOpen}))
  }
  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className={classes.FilterBar}>
      <DropdownToggle caret className={classes.Dropdown}>
        Filters
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>By Gender</DropdownItem>
        <DropdownItem value="male" onClick={this.handleClick}>Male</DropdownItem>
        <DropdownItem  value="female" onClick={this.handleClick}>Female</DropdownItem>
        <DropdownItem value="others" onClick={this.handleClick}>Others</DropdownItem>
        <DropdownItem divider/>
        <DropdownItem header>By Payment Method</DropdownItem>
        <DropdownItem value="check" onClick={this.handleClick}>Check</DropdownItem>
        <DropdownItem value="paypal" onClick={this.handleClick}>Paypal</DropdownItem>
        <DropdownItem value="money" onClick={this.handleClick}>Money Order</DropdownItem>
        <DropdownItem value="cc" onClick={this.handleClick}>CC</DropdownItem>
      </DropdownMenu>
      {this.state.filtered ? 
      <Button className={classes.Button} color="danger" onClick={this.handleFilterClick}>Clear</Button>
      : null}
    </ButtonDropdown>
    )
  }
}

export default FilterBar
