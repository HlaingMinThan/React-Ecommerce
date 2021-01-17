import './App.css';
import Home from "./pages/Home/Home.component";
import {Route,Link} from "react-router-dom"

function hats(params) {
  return (
    <h1>Hats page</h1>
  )
}
function jackets(params) {
  return (
    <h1>jackets page</h1>
  )
}

function App(){
  return(
    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/shop/hats" exact component={hats}/>
      <Route path="/shop/jackets" exact component={jackets}/>
    </div>
  )
}

export default App;