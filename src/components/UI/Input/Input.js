import React, {Component} from "react";
import "./Input.css"

const Input = props => {
    const inputType = props.type || 'text'
    const cls = ["input"]
    const htmlFor = `${inputType}-${Math.random()}`
    
    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}

            />
        </div>
    )
}

export default Input