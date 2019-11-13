import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {deleteKronikle, fetchSingleKronikle } from '../actions/kronikle_actions';

class SingleKronikle extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    kronikle: []
  }
}

onDelete = () => {
  this.props.deleteKronikle(this.state.kronikle._id)
  this.props.history.push('/');
}

componentDidMount(){
  let id = this.props.match.params.id
  return fetch(`https://kronikles-server.herokuapp.com/kronikles/${id}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      kronikle: data[0]
    }))
}

render(){
  const { _id, title, body } = this.state.kronikle

  return(
    <div className="singleKronikle">
      <div className="kTitle">{title}</div>
      <div className="kBody">{body}</div>

      <Link to={`/kronikles/${_id}/edit`}>
        <button id="editBtn">Edit</button>
      </Link>

      <button id="deleteBtn" onClick={this.onDelete}>Delete</button>
      <br />
      <Link to={`/`}>
          <div id="backBtn"><FontAwesomeIcon icon="chevron-left"/></div>
      </Link>
    </div>
  )
}
}


const mapDispatchToProps = dispatch => {
  return {
    fetchSingleKronikle: (id) => dispatch(fetchSingleKronikle(id)),
    deleteKronikle: (id) => dispatch(deleteKronikle(id))
  }
}

export default connect(null, mapDispatchToProps)(SingleKronikle)
