import React from 'react'
import './App.css';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductListPage from './containers/ProductListPage';

function App() {
  return (
    <Router>
      <Switch>
         <Route path='/' exact component={ HomePage }/>
         <Route path='/:slug' component={ProductListPage} />
       </Switch>
    </Router>
  );
}

export default App;
