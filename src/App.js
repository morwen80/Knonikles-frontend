import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import NewKronikle from './components/NewKronikle'
import SingleKronikle from './components/SingleKronikle'
import AllKronikles from './components/AllKronikles'
import PageNotFound from './components/PageNotFound'

const App = () =>
  <BrowserRouter>
    <div>

    <div id="navLogo">Kronikles</div>
      <Header />
      <Switch>

        <Route path='/' component={Home} exact={true} />
        <Route path='/kronikles' component={AllKronikles} exact={true} />
        <Route path='/:id' component={SingleKronikle} exact={true} />

        <Route path='/new' component={NewKronikle} />
        <Route path='/about' component={About} />
        <Route component={PageNotFound} />

      </Switch>
    </div>
  </BrowserRouter>


const mapStateToProps = (state) => {
  return {
    kronikles: state.kronikles.kronikles
  };
}

export default connect(mapStateToProps)(App);
