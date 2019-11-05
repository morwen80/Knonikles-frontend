import React from 'react';
import { Link } from 'react-router-dom';

const EmptyKronikle = () => (
  <div className="emptyList">
    <h2>Your Kronikle List is Empty</h2>
    <Link to="/new"> Click to add one</Link>
  </div>
)

export default EmptyKronikle
