import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { Home, Login, Register } from './pages';
import { Header } from './containers';

function App() {
  return (
      <>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Switch>
      </>
    
  );
}

export default App;
