import React, {Component} from 'react';
import {connect} from 'react-redux';

const SingleK = ({ match, kronikle }) => {

  console.log(kronikle.title)
  console.log(match)

  const {params: { kronikleId }} = match;


// const singleEl = kronikle.map(k => <h1>k.title)

  return(

    <div>
    {kronikle.title}
     {kronikleId}

    </div>
  )
}

// const mapStateToProps = (state, ownProps) => {
//    const kronikle = state.kronikles.kronikles.find(k => k._id === ownProps.match.params.kronikleId)
//    if (kronikle) {
//      return { kronikle }
//    } else {
//      return { kronikle: {} }
//    }
//  }

const mapStateToProps = state => {
  return {
    kronikles: state.kronikles.kronikles
  }
}

export default connect(mapStateToProps)(SingleK)
