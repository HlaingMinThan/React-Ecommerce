import './App.css';
import React from "react";
import {auth} from "./firebase/config"
import Header from "./components/Header/Header.component"
import Home from "./pages/Home/Home.component";
import Shop from "./pages/Shop/Shop.component";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage.component";
import {Route,Switch} from "react-router-dom"

class App extends React.Component{
  state={
    currentUser:null
  }
  unsubscribeAuthState=null
  componentDidMount(){
    this.unsubscribeAuthState=auth.onAuthStateChanged(user=>{
      this.setState({
        currentUser:user
      });
      console.log(this.state.currentUser);
    })
  }
  componentWillUnmount(){
    this.unsubscribeAuthState();
  }
  render(){
    return(
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" exact component={Home}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    )
  }
}


export default App;