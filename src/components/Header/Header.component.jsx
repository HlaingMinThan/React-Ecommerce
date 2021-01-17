import "./Header.style.css"
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {Link} from "react-router-dom"
const Header=()=>{
    return (
        <div className="header">
           <Link className="logo-container" to="/">
                <Logo/>
           </Link>
           <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option">Contact</Link>
           </div>
        </div>
    )
}
export default Header;