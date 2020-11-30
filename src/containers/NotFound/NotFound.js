import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="NotFound">
      <h1>Something Went Wrong T_T</h1>
      <NavLink
        to="/recipes"
        className="link" >Take Me Home</NavLink>
    </div>
  )
}

