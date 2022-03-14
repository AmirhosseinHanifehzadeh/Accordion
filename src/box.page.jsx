import React from "react";

import Boxes from "./box.component";
import Contents from "./data";

import "./box.page.styles.scss";
function BoxContent() {
    return (
        <div className="container">
            <div className="title">
                <h1>Questions And Answers About Login</h1>
            </div>
            <div className="boxes">
                {
                    Contents.map(({id, text , title}) => {
                        return <Boxes key={id} text={text} title={title}/>
                    })
                }
            </div>    
        </div>
    )
}

export default BoxContent;