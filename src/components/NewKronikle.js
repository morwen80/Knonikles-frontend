import React, {Component} from 'react';
import { connect } from 'react-redux';
import  { addNewNote, fetchAllNotes } from '../actions/note_actions';

class NewKronikle extends Component {
  constructor(){
    super()
    this.state = {
      title: "",
      body: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewNote(this.state)
    this.setState({ title: "", body: "" })
    this.props.fetchAllNotes()
  }


  render(){
    return(
      <div className="newKronikleForm">
        <h2>Create a new Kronikle</h2>
        <form className="newKForm" onSubmit={this.handleSubmit}>
          <input
            placeholder="title"
            value={this.state.title}
            name="title"
            onChange={this.handleChange}
            />

          <input
            placeholder="kronikle"
            value={this.state.body}
            name="body"
            onChange={this.handleChange}
            />
          <button type="submit">Create!</button>
        </form>
        {this.state.title} {this.state.body}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewNote: (newKronikle) => dispatch(addNewNote(newKronikle)),
    fetchAllNotes: () => dispatch(fetchAllNotes())
  }
}

export default connect(null, mapDispatchToProps)(NewKronikle)
