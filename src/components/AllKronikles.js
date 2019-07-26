
import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import  { fetchAllKronikles, fetchSingleKronikle } from '../actions/kronikle_actions';


class AllKronikles extends Component {

  componentDidMount = () => {
    this.props.fetchAllKronikles()
  }

  // openSingleKronicle = (k) => {
  //   // e.stopPropagation();
  //   this.props.fetchSingleKronikle(k._id)
  // }

  render(){

    // const kronikles = this.props.kronikles.map(k =>
    // <li key={k._id} id={k._id} onClick={() => this.openSingleKronicle(k)}>
    // <Link to={`/notes/${k._id}`}>{k.title}</Link>
    //   <i className="fas fa-chevron-right"></i>
    // </li>
    // )

    const kronikles = this.props.kronikles.map( k =>
      <li key={k._id} id={k._id}>
        <Link to={`notes/${k._id}`}>
          {k.title}
        </Link>
      </li>
    )

    return(
      <div className="KronikleSpace">
      <ul>
        {kronikles}
        </ul>
      </div>
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
