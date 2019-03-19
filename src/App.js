import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>
  );
}

export default App;
