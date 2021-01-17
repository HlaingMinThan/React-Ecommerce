import "./CollectionPreview.style.css"
import CollectionItem from "../../components/CollectionItem/CollectionItem.component"
let CollectionPreview=({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item,index)=>index<4).map(({id,...otherItemProps})=>(
                    <CollectionItem key={id} {...otherItemProps}></CollectionItem>
                ))
            }
        </div>
    </div>
)
export default CollectionPreview;