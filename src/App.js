import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { Home, Login, Benchmark, Account } from './pages';
import { Header } from './containers';
import './App.scss';

function App() {
  return (
      <>
        <Header isLogin={true} />
        <main>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Login}/>
                <Route path="/account" component={Account}/>
                <Route path="/benchmark" component={Benchmark}/>
            </Switch>
        </main>
      </>
    
  );
}

export default App;
