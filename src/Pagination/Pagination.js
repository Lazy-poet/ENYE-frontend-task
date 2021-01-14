import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const pagination = (props) => {
 const pageNumbers = [];

 for (let i = 1; i<= Math.ceil(props.totalProfiles / props.profilesPerPage); i++){
   pageNumbers.push(i)
 }
 return (
  <Pagination aria-label='Page '>

    {pageNumbers.map(number => (
      <PaginationItem active={number === props.currentPage}>
      <PaginationLink  key={number} onClick={()=> props.pageLink(number)}>{number}</PaginationLink>
      </PaginationItem>
    ))}
  </Pagination>
 )
};

export default pagination;