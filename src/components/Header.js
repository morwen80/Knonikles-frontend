import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {

render(){
  return (
    <nav>
      <ul>
        <NavLink id="navLogo" activeClassName="is-active" to='/'>Kronikles</NavLink>
        <NavLink id="navShowAll" activeClassName="is-active" to='/'><FontAwesomeIcon icon="copy" /></NavLink>
        <NavLink id="navAddNew" to='/new'><FontAwesomeIcon icon="plus" /></NavLink>
        <NavLink id="navAbout" to='/about'><FontAwesomeIcon icon="question" /></NavLink>
      </ul>
    </nav>
    )
  }
}

export default Header
