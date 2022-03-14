import React, { useState } from "react";

import { IoChevronDown } from "react-icons/io5";

import "./box.styles.scss";

const Boxes = ({ title, text }) => {
    const [show, setShow] = useState(false);

    return (
            <div className="box-container">
                <div className="box">
                    <div className="first-line">                                            
                        <h1>{title}</h1>
                        <button onClick={() => setShow(!show)}><IoChevronDown className={show ? 'ArrowDown open' : 'ArrowDown'}/></button>
                    </div>
                    <p style={{display:`${show ? 'block': 'none'}`}}>{text}</p>
                </div>
            </div>
    )
}


export default Boxes;