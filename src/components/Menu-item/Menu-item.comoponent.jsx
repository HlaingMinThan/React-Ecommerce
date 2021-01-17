import {withRouter} from "react-router-dom"
import "./Menu-item.style.css";
const MenuItem=({title,imageUrl,size,linkUrl,history,match})=>(
    <div className={`menu-item ${size}`} onClick={()=>{history.push(linkUrl)}}>
        {console.log(match)}
        {/* background image */}
        <div 
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
            className="background-image"
        />
        {/*end background image */}
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);