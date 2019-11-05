import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextareaAutosize from 'react-autosize-textarea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {editKronikle, fetchSingleKronikle } from '../actions/kronikle_actions';

class EditKronikle extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      body: '',
      _id: ''
    }
  }

  componentDidMount(){
    let id = this.props.match.params.id
    return fetch(`http://localhost:3000/kronikles/${id}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        title: data[0].title,
        body: data[0].body,
        _id: id
      }))
  }

  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editKronikle(this.state)
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
        <div className="formBody">
          <TextareaAutosize id="editKBodyTextArea" style={{ minHeight: 20, maxHeight: 280 }} name="body" value={body} onChange={this.handleChange}/>
        </div>
        <button type="submit">Submit edited Kronikle</button>

        <br />
        <Link to={`/`}>
          <div id="backBtn"><FontAwesomeIcon icon="chevron-left"/></div>
        </Link>
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
