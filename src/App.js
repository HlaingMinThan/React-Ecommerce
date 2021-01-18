import './App.css';
import Header from "./components/Header/Header.component"
import Home from "./pages/Home/Home.component";
import Shop from "./pages/Shop/Shop.component";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage.component";
import {Route,Switch} from "react-router-dom"



function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" exact component={Home}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/signin" component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  )
}

export default App;