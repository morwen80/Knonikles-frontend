import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  { fetchAllKronikles, fetchSingleKronikle } from '../actions/kronikle_actions';

class AllKronikles extends Component {
  
  componentDidMount = () => {
    this.props.fetchAllKronikles()
  }

  render(){
    const kList = this.props.kronikles.map( k => {
      return (
        <li key={k._id} className="kCard">
        <Link to={`/kronikles/${k._id}`}>{k.title}</Link>
        <p className="preview">{k.body.slice(0, 100)}</p>
        </li>
      )
    }
  )
    return (
      <div id="kronikleSpace">
      <ul>
        {kList}
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
