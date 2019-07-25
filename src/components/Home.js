import React, {Component} from 'react';
import { connect } from 'react-redux';
import  { fetchAllNotes } from '../actions/note_actions';
import AllKronikles from './AllKronikles';
import EmptyKronikle from './EmptyKronikle'

class Home extends Component {

  componentDidMount = () => {
    this.props.fetchAllNotes()
  }

  render(){
    return(
      <div className="notesHome">
      {this.props.notes.length > 0 ? <AllKronikles/> : <EmptyKronikle />}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    loading: state.loading,
    notes: state.notes.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllNotes: () => dispatch(fetchAllNotes())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
