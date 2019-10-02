import React from 'react';
import { connect } from 'react-redux';
import {editKronikle, fetchSingleKronikle } from '../actions/kronikle_actions';

class EditKronikle extends React.Component {
  constructor(){
    super()
    this.state = {
      title: "",
      body: ""
    }
  }

  componentDidMount(){
    let id = this.props.match.params.id
    return fetch(`http://localhost:3000/kronikles/${id}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        title: data[0].title,
        body: data[0].body
      }))
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editKronikle([this.state.title, this.state.body])
    // this.setState({ title: "", body: "" })
    this.props.history.push('/');
  }


render(){
  const { title, body } = this.state

  return (
    <div className="editKronikle">
      <h2>Edit your Kronikle</h2>
      <form className="editKForm" onSubmit={this.handleSubmit} >
        <input type="text" name="title" value={title} onChange={this.handleChange}/>
        <br/>
        <textarea name="body" value={body} onChange={this.handleChange}/>
        <button type="submit">Submit edited Kronikle</button>
      </form>

    </div>
  )
}}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleKronikle: (id) => dispatch(fetchSingleKronikle(id)),
    editKronikle: (kronikle) => dispatch(editKronikle(kronikle)),
  }
}

export default connect(null, mapDispatchToProps)(EditKronikle)
