
import React from 'react';
import {connect} from 'react-redux';
import {editKronikle, deleteKronikle, fetchSingleKronikle } from '../actions/kronikle_actions';

class SingleKronikle extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    title: '',
    body: ''
  }
}

componentDidMount(){
  let id = this.props.match.params.id
  // this.props.fetchSingleKronikle(id);

  return fetch(`http://localhost:3000/kronikles/${id}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      title: data[0].title,
      body: data[0].body
    }))

}

render(){

  console.log(this.props.params)
  return(
    <div className="singleKronikle">
      <div className="kTitle">{this.state.title}</div>

      <h3>{this.state.body}</h3>
      <button >Edit</button>
      <button >Delete</button>
    </div>
  )
}
}

const mapStateToProps = (state, ownProps) => {
   const kronikle = state.kronikles.kronikles.find(k => k._id === ownProps.match.params.kronikleId)
   if (kronikle) {
     return { kronikle }
   } else {
     return { kronikle: {} }

   }
 }


const mapDispatchToProps = dispatch => {
  return {
    fetchSingleKronikle: (id) => dispatch(fetchSingleKronikle(id)),
    editKronikle: (kronikle) => dispatch(editKronikle(kronikle)),
    deleteKronikle: (id) => dispatch(deleteKronikle(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleKronikle)
