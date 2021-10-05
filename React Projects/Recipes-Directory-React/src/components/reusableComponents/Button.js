import React from "react";

const Button = (props) => {

    const {
        btnText,
        handleClick
    } = props;

    return (
        <button 
            className="btn"
            onClick={handleClick}
        >
            {btnText}
        </button>
    );
};

export default Button;