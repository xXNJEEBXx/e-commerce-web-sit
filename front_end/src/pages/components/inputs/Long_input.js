import React, { useEffect } from 'react';
import Masster_input from './Masster_input';
import $ from "jquery";

export default function Long_input(props) {


    const onChange = (e) => {
        props.setState({
            ...props.state,
            [e.target.name]: e.target.value,
        })

    };

    function error() {
        if (props.state.errors_list[props.name]) {
            return "is-invalid"
        }
    }
    var required = "yes"
    if (props.required == "no") {
        required = null
    }


    if (props.type == "checkbox") {
        return (
            <div className="form-group" style={{ textAlign: 'left' }}>
                <label htmlFor={props.name} style={{ width: '100%', fontSize: '23px', marginBottom: '7px' }} className="inline-block">
                    <input id={props.name} required={required} type={props.type} style={{ marginRight: '5px' }} />{props.text}
                </label>
            </div>
        )
    }
    if (props.type == "select") {
        return (
            <div className="form-group" style={{ textAlign: 'left' }}>
                <label htmlFor={props.name} style={{ width: '500px', fontSize: '40px' }} className="inline-block text-align-left">{props.text}</label>
                <select value={props.state[props.name]} id={props.name} onChange={onChange} required={required} style={{ height: '40px', marginBottom: '20px', fontSize: '20px', padding: '5px' }}
                    className={"background-gray2 border-none form-control " + error()} name={props.name}>
                    <option value=""> Please select</option>
                    {props.options.map((option) => (
                        <option value={option} >{option}</option>
                    ))}
                </select>
                <span style={{ fontSize: '20px' }} className="text-danger">{props.state.errors_list[props.name]}</span>
            </div>
        )
    }
    else {
        return (
            <div className="form-group" style={{ textAlign: 'left' }}>
                <label htmlFor={props.name} style={{ width: '500px', fontSize: '40px' }} className="inline-block text-align-left">{props.text}</label>
                <Masster_input name={props.name} text={props.text} type={props.type} state={props.state} setState={props.setState} required={props.required} formControl={true} style={{ fontSize: "20px", height: "40px" }} />
                <span style={{ fontSize: '20px' }} className="text-danger">{props.state.errors_list[props.name]}</span>
            </div>
        )

    }

}




