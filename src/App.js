import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { Home, Login, Benchmark } from './pages';
import { Header } from './containers';
import './App.scss';

function App() {
  return (
      <>
        <Header isLogin={true} />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Login}/>
            <Route path="/benchmark" component={Benchmark}/>
        </Switch>
      </>
    
  );
}

export default App;
