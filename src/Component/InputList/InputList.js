import React from "react";
import "./InputList.css";

const inputList = (props) => (

    <div className="inputListStyle">
        {
            props.textCollection
                .map((message, index) => <p
                    className="inputListParagraph"
                    key={index}>{message}</p>)
        }
    </div>
)


export default inputList;
