import React, {Component} from 'react'
import { connect } from 'react-redux';
import  { fetchAllKronikles } from '../actions/kronikle_actions';
class AllKronikles extends Component {

  componentDidMount = () => {
    this.props.fetchAllKronikles()
  }

  render(){

    const kronikles = this.props.kronikles.map(k =>
    <li key={k._id} id={k._id}>
      {k.title}
      <i className="fas fa-chevron-right"></i>
    </li>)

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
    fetchAllKronikles: () => dispatch(fetchAllKronikles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AllKronikles)
