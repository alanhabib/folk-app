import React from 'react';
import "./Footer.css"

const footer = (props) => {
    return (
        <footer className="footer">
            <span> My folke-app &#169; {new Date().getFullYear()}</span>
        </footer>
    );
}

export default footer;
