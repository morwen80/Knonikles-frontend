import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
// import ReactModal from 'react-modal';
// import { connect } from 'react-redux';
// import  { addNewNote } from '../actions/note_actions';
import NewKronikle from './NewKronikle'
// ReactModal.setAppElement('.KronikleSpace');

class Header extends Component{

  render(){
    return(
      <nav>
      <ul className="navLeft">
        <li>K</li>
        <li><i className="fas fa-copy" alt="All Kronikles"></i></li>
        <NavLink activeClassName="is-active" to='/new'><i className="fas fa-plus" alt="Add Kronikle"></i></NavLink>
      </ul>
      <span id="navLogo">Kronikles</span>
      <ul className="navRight">
        <li><i className="fas fa-share-alt" alt="Share"></i></li>
        <li><i className="fas fa-question" alt="About"></i></li>
    </ul>
      </nav>
    )
  }
}


export default Header
