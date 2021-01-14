import React from 'react';
import { Input, Col } from 'reactstrap'
import classes from "./Filters.module.css";
import FilterBar from './FilterBar/FilterBar'

const searchBar = (props) => {
  return (
    <Col  className={classes.Filter}>
   <Input 
   className={classes.Search} 
   type='text' 
   value={props.search} 
   onChange={props.changed} 
   placeholder="Search Name" />
<div className={classes.Select}>
    <FilterBar filter={props.filter} /></div>
 </Col>
    );
};

export default searchBar;