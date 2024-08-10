import React, { useEffect } from 'react';

export default function Inline_label(props) {
    var value = ""
    if (props.state[props.name]) {
        value = props.state[props.name]
    }
    if (props.value) {
        value = props.value
    }
    return (
        <div style={{ display: "flex", alignItems: "center", marginTop: "10px", position: props.position }} >
            <label style={{ display: "flex", fontSize: "40px", whiteSpace: "nowrap", marginRight: "15px", height: "60px", width: props.width }} htmlFor={props.text}>{props.text}</label>
            <label id={props.name} className='background-gray2 ' style={{ display: "flex", fontSize: "30px", whiteSpace: "nowrap", height: "50px", padding: "5px", width: "100%", width: "100%", borderRadius: "0.375rem" }}>{value}</label>
            {props.icon}
        </div>
    )
}




