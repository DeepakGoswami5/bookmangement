import React, {Component} from 'react';
import './App.css';
import HomePage from './pages/homepages/homepages';
import {Switch,Route} from 'react-router-dom';
import ShopPage from "./pages/ShopPage/shopPages";
import Header from './components/header/header';
import SignInUp from "./pages/SignInUp/SignInUp";

class App extends Component{
  constructor(){
    super();
  }
  render() {
    return (
      <div>
          <Header/>
          <Switch>
              <Route exact path='/' component={HomePage}></Route>
              <Route path='/category' component={ShopPage}></Route>
              <Route path='/sign-in-up' component={SignInUp}></Route>
          </Switch>
      </div>
    );
  }
}

export default App;
