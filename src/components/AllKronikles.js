import React, {Component} from 'react'
import { connect } from 'react-redux';
import  { fetchAllNotes } from '../actions/note_actions';
class AllKronikles extends Component {

  componentDidMount = () => {
    this.props.fetchAllNotes()
  }

  render(){

    const notes = this.props.notes.map(note => <div className="notePreview">{note.title}</div>)

    return(
      <div className="KronikleSpace">

        {notes}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchAllNotes: () => dispatch(fetchAllNotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AllKronikles)
