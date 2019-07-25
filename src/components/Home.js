import React, {Component} from 'react';
import { connect } from 'react-redux';
import  { fetchAllKronikles } from '../actions/kronikle_actions';
import AllKronikles from './AllKronikles';
import EmptyKronikle from './EmptyKronikle'

class Home extends Component {

  componentDidMount = () => {
    this.props.fetchAllKronikles()
  }

  render(){
    return(
      <div className="notesHome">
      {this.props.kronikles.length > 0 ? <AllKronikles/> : <EmptyKronikle />}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    loading: state.loading,
    kronikles: state.kronikles.kronikles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllKronikles: () => dispatch(fetchAllKronikles())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
