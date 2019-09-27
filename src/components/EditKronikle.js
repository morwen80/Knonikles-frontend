import React from 'react';
import { connect } from 'react-redux';
import {editKronikle, fetchSingleKronikle } from '../actions/kronikle_actions';

class EditKronikle extends React.Component {
  constructor(){
    super()
    this.state = {
      kronikle: []
    }
  }

  componentDidMount(){
    let id = this.props.match.params.id
    return fetch(`http://localhost:3000/kronikles/${id}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        kronikle: data[0]
      }))
  }


render(){
  const { title, body } = this.state.kronikle

  return (
    <div className="editKronikle">
      <form>
        <input type="text" placeholder={title} />
        <br/>
        <textarea type="text" placeholder={body} />
      </form>
      <button>Submit edited Kronikle</button>
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
