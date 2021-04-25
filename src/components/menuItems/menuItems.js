import React from "react";
import "./menuItems.scss";
import {withRouter} from "react-router-dom";


const menuItems = ({title,imageUrl,size,history,linkUrl,match}) => {
    return(
        <div className={`${size} menu-item` } onClick = {() =>history.push(`${match.url}${linkUrl}`)} >
            <div className="background-image" style={{
                backgroundImage:`url(${imageUrl})`
            }}>
            </div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="sub-title">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(menuItems);