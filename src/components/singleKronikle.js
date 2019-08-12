
import React from 'react';
import {connect} from 'react-redux';
import {editKronikle, deleteKronikle, fetchSingleKronikle } from '../actions/kronikle_actions';

const SingleKronikle = ({ kronikle }) => {

console.log(kronikle)


return(
        <div className="singleKronikle">
          <div className="kTitle">{kronikle.title}</div>

          <h3>{kronikle.body}</h3>
          <button >Edit</button>
          <button >Delete</button>
        </div>
)
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
