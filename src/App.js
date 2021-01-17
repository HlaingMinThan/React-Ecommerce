import './App.css';
import Home from "./pages/Home/Home.component";
import Shop from "./pages/Shop/Shop.component";
import {Route} from "react-router-dom"



function App(){
  return(
    <div>
      <Route path="/" exact component={Home}/>
      <Route paht="/shop" component={Shop}/>
    </div>
  )
}

export default App;