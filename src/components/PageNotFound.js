import React from 'react';
import { Link } from 'react-router-dom'

const PageNotFound = () => (
  <div className="lost">
    <h2>Oops!</h2>
    <p>
    Seems like you are lost.
    <br/>
    Find your way <Link to="/">home</Link>.
    </p>
  </div>
)

export default PageNotFound
