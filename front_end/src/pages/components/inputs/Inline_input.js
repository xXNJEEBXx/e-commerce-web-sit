import React, { useEffect } from 'react';
import Masster_input from './Masster_input';

export default function Inline_input(props) {


    return (
        <div style={{ marginLeft: props.marginLeft }}>
            <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }} >
                <label style={{ display: "flex", fontSize: "40px", whiteSpace: "nowrap", marginRight: "5px", height: "60px", width: props.width }} htmlFor={props.name} >{props.text}</label>
                <Masster_input after={props.after} onChange={props.onChange} name={props.name} text={props.text} formControl={true} type={props.type} style={{ fontSize: "30px", height: "50px" }} state={props.state} setState={props.setState} icon={props.icon} required={props.required} />
            </div>
            <span style={{ fontSize: '30px' }} className="text-danger">{props.state.errors_list[props.name]}</span>
        </div>
    )


}




