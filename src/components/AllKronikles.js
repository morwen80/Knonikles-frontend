import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import SingleKronikle from './SingleKronikle'
import  { fetchAllKronikles, fetchSingleKronikle } from '../actions/kronikle_actions';


class AllKronikles extends Component {

  componentDidMount = () => {
    this.props.fetchAllKronikles()
  }

  render(){
    return(
      <React.Fragment>
      <ul>
      {this.props.kronikles.map(( { title, _id }) => (
        <li key={_id} id={_id}>
          <Link to={`/${_id}`}>{title}</Link>
        </li>
      ))}
      </ul>

      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    kronikles: state.kronikles.kronikles
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchSingleKronikle: (id) => dispatch(fetchSingleKronikle(id)),
    fetchAllKronikles: () => dispatch(fetchAllKronikles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AllKronikles)
