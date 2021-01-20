import "./Header.style.css"
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {Link} from "react-router-dom"
import { auth } from "../../firebase/config";
const Header=({currentUser,isGoogleLogin})=>{
    return (
        <div className="header">
           <Link className="logo-container" to="/">
                <Logo/>
           </Link>
           <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contact">Contact</Link>
                {
                    currentUser?
                    <div className="option" onClick={()=>{auth.signOut()}}>SignOut</div>
                    :
                    <Link className="option" to="/signIn">SignIn</Link>
                }
           </div>
        </div>
    )
}
export default Header;