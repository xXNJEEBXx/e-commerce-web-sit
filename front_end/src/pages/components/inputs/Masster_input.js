import React, { useEffect } from 'react';

export default function Masster_input(props) {

    const onChange = (e) => {
        if (props.type == "number") {
            const filteredValue = e.target.value.replace(/[^0-9.]/g, ''); // regular expression to remove non-numeric characters
            e.target.value = filteredValue
        }
        props.state.errors_list[props.name] = null
        props.setState({
            ...props.state,
            [e.target.name]: e.target.value,
        })
        if (props.onChange) {
            props.onChange(e);
        }
    };
    var error
    if (!props.error) {
        if (props.state) {
            error = props.state.errors_list[props.name]
        }
    } else {
        error = props.error
    }

    function show_error() {
        if (error && error != 0) {
            return "is-invalid"
        }
    }

    var formControl
    if (props.formControl) {
        formControl = "form-control "
    }
    var value = ""
    if (props.value) {
        value = props.value
    } else {
        if (props.state) {
            value = props.state[props.name]
        }
    }




    var required = "yes"
    if (props.required == "no") {
        required = null
    }

    var style = []
    if (props.style) {
        style = props.style
    }

    if (!style.padding) {
        style.padding = "5px"
    }


    if (props.icon) {
        style.paddingRight = "40px"
    }



    var position = null
    if (props.icon) {
        style.position = 'relative'
    }


    var div_width = null
    if (props.width) {
        div_width = props.width
    }

    // style={{ position: position, display: 'inline-flex' }}
    return <div style={{ display: "flex", width: div_width, position: position, alignItems: "center" }} ><input value={value} onChange={onChange} id={props.name} required={required} placeholder={props.text} name={props.name} style={props.style} className={"background-gray2 border-none " + formControl + show_error()} type={props.type == "password" ? props.type : null} />{props.icon}{props.after}</div>


}




