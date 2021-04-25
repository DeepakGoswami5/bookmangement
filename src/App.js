import './App.css';

function App() {
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

export default App;
