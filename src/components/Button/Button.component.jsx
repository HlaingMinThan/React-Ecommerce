import "./Button.style.css";
const Button=({children,isGoogleLogin,...otherProps})=>(
    <button className={`custom-button ${isGoogleLogin?'google-signin':''}`} {...otherProps} >{children}</button>
)

export default Button;