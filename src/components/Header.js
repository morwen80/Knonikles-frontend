import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
// import ReactModal from 'react-modal';

// ReactModal.setAppElement('.KronikleSpace');

class Header extends Component{

  render(){
    return(
      <nav>
      <ul className="navLeft">
        <NavLink activeClassName="is-active" to='/all'><i className="fas fa-copy" alt="All Kronikles"></i></NavLink>
        <NavLink to='/new'><i className="fas fa-plus" alt="Add Kronikle"></i></NavLink>

        <li><i className="fas fa-share-alt" alt="Share"></i></li>
        <li><i className="fas fa-question" alt="About"></i></li>
        <div id="navLogo">Kronikles</div>
    </ul>

      </nav>
    )
  }
}


export default Header
