import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import AllKronikles from './components/AllKronikles'
import NewKronikle from './components/NewKronikle'
import PageNotFound from './components/PageNotFound'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/all' component={AllKronikles} />
        <Route path='/new' component={NewKronikle} />
        <Route path='/about' component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
