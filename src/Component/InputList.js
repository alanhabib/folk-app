import React from "react";

const inputList = (props) => (

    <ul>
        {
            props.textCollection
                .map((message, index) => <li key={index}>{message}</li>)
        }
    </ul>
)


export default inputList;
