import "./Button.style.css";
const Button=({children,...otherProps})=>(
    <button className="custom-button" {...otherProps}>{children}</button>
)

export default Button;