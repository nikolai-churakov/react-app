import React from "react";
import "./Button.css";

const Button = props => {
    const cls = [
        'button',
        [props.type]
    ]

    return (
    <button
        onClick={props.onClick}
        className={cls.join(' ')}
        disabled={props.disable}
    >
        {props.children}
    </button>
    )
}

export default Button