import React from "react";
import SHOP_DATA from "./Shop-data";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.component"                                                                                                               
class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections:SHOP_DATA
        }
    }
    render(){
        let {collections}=this.state; 
        return (
            <div className="shop-page">
                <h1>Title</h1>
                {collections.map(({id,...otherCollectionData})=>(
                        <CollectionPreview key={id} {...otherCollectionData} />
                ))}
            </div>
        )
    }
}
export default Shop;
