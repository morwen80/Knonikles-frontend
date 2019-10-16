import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

render(){
  return (
    <nav>
      <ul>
        <NavLink id="navLogo" activeClassName="is-active" to='/'>Kronikles</NavLink>
        <NavLink id="navShowAll" activeClassName="is-active" to='/'><i className="fas fa-copy" alt="All Kronikles"></i></NavLink>
        <NavLink id="navAddNew" to='/new'><i className="fas fa-plus" alt="Add Kronikle"></i></NavLink>
        <NavLink id="navAbout" to='/about'><i className="fas fa-question" alt="About"></i></NavLink>
      </ul>
    </nav>
    )
  }
}

export default Header
