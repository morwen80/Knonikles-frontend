import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import SingleKronikle from './components/SingleKronikle'
import NewKronikle from './components/NewKronikle'
import PageNotFound from './components/PageNotFound'

const App = () => (
  <BrowserRouter>
    <div>
    <div id="navLogo">Kronikles</div>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/new' component={NewKronikle} />
        <Route path='/notes/:id' component={SingleKronikle} />
        <Route path='/about' component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
