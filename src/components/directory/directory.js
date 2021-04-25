import React, {Component} from 'react';

import MenuItem from "../menuItems/menuItems";

import './directory.scss';


class Directory extends Component{
    constructor(){
        super();
        this.state = {
            sections:[
                {
                    id:1,
                    title: "Action and Adventure",
                    linkUrl:"category/action_adventure",
                    imageUrl:"https://m.media-amazon.com/images/I/61nkEgnbf2L.jpg",
                },
                {
                    id:2,
                    title: "Classics",
                    linkUrl:"category/classics",
                    imageUrl:"https://www.economist.com/img/b/1280/720/90/sites/default/files/20200829_BRP504.jpg",
                },
                {
                    id:3,
                    title:"Comic Book",
                    linkUrl:"category/comic",
                    imageUrl:"https://www.verdict.co.uk/wp-content/uploads/2017/09/get-into-comic-books.jpg",
                },
                {
                    id:4,
                    title:"Fantasy",
                    linkUrl:"category/fantasy",
                    imageUrl:"https://cdn.pastemagazine.com/www/articles/2018/04/11/best-fantasy-novels-21st.jpg",
                },
                {
                    id:5,
                    title:"Historical",
                    linkUrl:"category/historical",
                    imageUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-historical-books-alexander-hamilton-1600137689.jpg",
                },
                {
                    id:6,
                    title:"Horror",
                    linkUrl:"category/horror",
                    imageUrl:"https://m.media-amazon.com/images/I/51IzeRM6KkL.jpg",
                }
            ]
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {this.state.sections.map(({id,...sectionProps}) => (
                    <MenuItem key={id}{...sectionProps}/>
                ))}
            </div>
        )
    }
}

export default Directory;