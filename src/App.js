import './App.css';

function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route path='/shop' component={ShopPage}></Route>
            <Route path='/sign-in-up' component={SignInUp}></Route>
        </Switch>
      </div>
  );
}

export default App;
