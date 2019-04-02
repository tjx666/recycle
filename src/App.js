import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { Home, Login, CountPrice, Account } from './pages';
import { Header } from './containers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
      <>
        <ToastContainer
            className="toast"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
        />
        <Header isLogin={false} />
        <main>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Login}/>
                <Route path="/account" component={Account}/>
                <Route path="/count_price" component={CountPrice}/>
            </Switch>
        </main>
      </>
    
  );
}

export default App;
