import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {editKronikle, deleteKronikle, fetchSingleKronikle } from '../actions/kronikle_actions';

class SingleKronikle extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    kronikle: []
  }
}

componentDidMount(){
  let id = this.props.match.params.id

  return fetch(`http://localhost:3000/kronikles/${id}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      kronikle: data[0]
    }))
}


editK = () => {

}

render(){
  const { _id, title, body } = this.state.kronikle

  return(
    <div className="singleKronikle">
      <div className="kTitle">{title}</div>

      <h3>{body}</h3>


      <Link to={`/kronikles/${_id}/edit`}>
        <button>Edit</button>
      </Link>

      <button >Delete</button>
    </div>
  )
}
}


const mapDispatchToProps = dispatch => {
  return {
    fetchSingleKronikle: (id) => dispatch(fetchSingleKronikle(id)),
    editKronikle: (kronikle) => dispatch(editKronikle(kronikle)),
    deleteKronikle: (id) => dispatch(deleteKronikle(id))
  }
}

export default connect(null, mapDispatchToProps)(SingleKronikle)
