import React from 'react';
import { Input, Col } from 'reactstrap'
import classes from "./Filters.module.css";
import FilterBar from './FilterBar/FilterBar'

const searchBar = (props) => {
  return (
    <Col className={classes.Filter}>
      <div className={classes.Select}>
        <FilterBar filter={props.filter} />
      </div>
      <Input
        className={classes.Search}
        type='text'
        value={props.search}
        onChange={props.changed}
        placeholder="Search Name" />
      
    </Col>
  );
};

export default searchBar;