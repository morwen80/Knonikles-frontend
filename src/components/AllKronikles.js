import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

// import SingleKronikle from './SingleKronikle'
import  { fetchAllKronikles, fetchSingleKronikle } from '../actions/kronikle_actions';


class AllKronikles extends Component {

  componentDidMount = () => {
    this.props.fetchAllKronikles()
  }


  render(){
    const kList = this.props.kronikles.map( k =>
      <li key={k._id}>
      <Link to={`/kronikles/${k._id}`}>{k.title}</Link>
      </li>
    )
    return(
      <React.Fragment>
      <ul>
        {kList}
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
