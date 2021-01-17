import './App.css';
import Header from "./components/Header/Header.component"
import Home from "./pages/Home/Home.component";
import Shop from "./pages/Shop/Shop.component";
import {Route,Switch} from "react-router-dom"



function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route paht="/shop" component={Shop}/>
      </Switch>
    </div>
  )
}

export default App;