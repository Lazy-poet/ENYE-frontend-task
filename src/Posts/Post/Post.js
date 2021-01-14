import React from 'react';
import classes from './Post.module.css';
import { List } from 'reactstrap';
import avatar from '../../assets/images/undraw_profile_pic_ic5t.svg'
import maleAvi from '../../assets/images/undraw_male_avatar_323b (1).svg';
import femaleAvi from '../../assets/images/undraw_female_avatar_w3jk (1).svg';
const post = (props) => {
  
    
    return ( <List type="unstyled" className={classes.List}>
      <div className={classes.Header}>
<img src={props.gender === 'Male' ? maleAvi : props.gender === 'Female' ? femaleAvi : avatar} alt="" />
        <h3 className={classes.Name}>{props.name}</h3>
        </div>
        <ul>
        <li><span className={classes.Key}>Coordinates</span> <span classsName={classes.Value}>{props.coordinates}</span></li>
        <li><span className={classes.Key}>Gender</span> <span classsName={classes.Value}>{props.gender}</span></li>
        <li><span className={classes.Key}>CC Number</span> <span classsName={classes.Value}>{props.cardNo}</span></li>
        <li><span className={classes.Key}>CC type</span> <span classsName={classes.Value}>{props.cardType}</span></li>
        <li><span className={classes.Key}>Email</span> <span classsName={classes.Value}>{props.email}</span></li>
        <li><span className={classes.Key}>Domain name</span> <span classsName={classes.Value}>{props.domain}</span></li>
        <li><span className={classes.Key}>Phone</span> <span classsName={classes.Value}>{props.phone}</span></li>
        <li><span className={classes.Key}>Mac Address</span> <span classsName={classes.Value}>{props.macAdd}</span></li>
        <li><span className={classes.Key}>URL</span> <span classsName={classes.Value}>{props.url}</span></li>
        <li><span className={classes.Key}>Username</span> <span classsName={classes.Value}>{props.username}</span></li>
        <li><span className={classes.Key}>Last login</span> <span classsName={classes.Value}>{props.login}</span></li>
        <li><span className={classes.Key}>Payment Method</span> <span classsName={classes.Value}>{props.payment}</span></li>
        </ul>
        </List>
  );
};

export default post;