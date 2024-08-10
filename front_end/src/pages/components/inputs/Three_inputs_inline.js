import React, { useEffect } from 'react';
import Masster_input from './Masster_input';
import Inline_input from './Inline_input';



export default function Three_inputs_inline(props) {


    function print_error(error) {
        if (error == 0) {
            return ""
        }
        else {
            return error
        }
    }

    var required = "yes"
    if (props.required == "no") {
        required = null
    }

    function output_part(name, text, error, type) {
        return (
            <div>
                <label style={{ fontSize: "30px", width: "120px" }} className="inline-block" htmlFor={text}>{text}</label>
                <Masster_input name={name} text={text} type={type} state={props.state} setState={props.setState} required={props.required} style={{ height: "40px", width: "150px", display: "inline-block", fontSize: "25px", padding: "3px" }} error={error} />
                <label style={{ fontSize: "30px" }} className="inline-block">cm</label><br />
                <span style={{ fontSize: '20px' }} className="text-danger">{print_error(error)}</span>
            </div>
        )
    }

    return (
        <div style={{ marginTop: "10px" }}>
            <label style={{ fontSize: "40px" }}>{props.title}</label>
            <div className="flex justify-content-space-between">
                <Inline_input after={props.after} name={props.input1.name} text={props.input1.text} type={props.input1.type} state={props.state} setState={props.setState} />
                <Inline_input after={props.after} name={props.input2.name} text={props.input2.text} type={props.input1.type} marginLeft="15px" state={props.state} setState={props.setState} />
                <Inline_input after={props.after} name={props.input3.name} text={props.input3.text} type={props.input1.type} marginLeft="15px" state={props.state} setState={props.setState} />
                {/* {output_part(props.input1.name, props.input1.text, props.state.errors_list[props.input1.name], props.input1.type)}
                {output_part(props.input2.name, props.input2.text, props.state.errors_list[props.input2.name], props.input2.type)}
                {output_part(props.input3.name, props.input3.text, props.state.errors_list[props.input3.name], props.input3.type)} */}
            </div>
        </div>
    )


}




