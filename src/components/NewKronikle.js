import React, {Component} from 'react';
import { connect } from 'react-redux';
import  { addNewNote } from '../actions/note_actions';

class NewKronikle extends Component {
  constructor(){
    super()
    this.state = {
      title: "",
      note: ""
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
    this.setState({ title: "", note: "" })
  }


  render(){
    return(
      <div className="newKronikle">
        <form className="newKForm" onSubmit={this.handleSubmit}>
          <input
            placeholder="title"
            value={this.state.title}
            name="title"
            onChange={this.handleChange}
            />

          <input
            placeholder="kronikle"
            value={this.state.note}
            name="body"
            onChange={this.handleChange}
            />
          <button type="submit">Create!</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewNote: (newNote) => dispatch(addNewNote())
  }
}

export default connect(null, mapDispatchToProps)(NewKronikle)
