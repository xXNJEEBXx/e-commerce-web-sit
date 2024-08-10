import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Masster_input from './inputs/Masster_input';


export default function Counter_by_arrow(props) {
    const onClick = (e, type) => {
        // e.target.closest("#number-increase-by-arrow").querySelector("#add_to_cart_quantity").value
        console.log(props.max)
        if (type == "increase") {
            if (e.target.closest("#number-increase-by-arrow").querySelector("#add_to_cart_quantity").value < props.max) {
                e.target.closest("#number-increase-by-arrow").querySelector("#add_to_cart_quantity").value++
            }
        } else {
            if (e.target.closest("#number-increase-by-arrow").querySelector("#add_to_cart_quantity").value != 0) {
                e.target.closest("#number-increase-by-arrow").querySelector("#add_to_cart_quantity").value--
            }
        }
    };

    return (
        <div id="number-increase-by-arrow" className="flex">
            <button id="decrease" onClick={(e) => onClick(e, "decrease")} type="button" style={{ background: "white", width: "50px" }} >
                <i style={{ color: "blue", fontSize: "30px" }} className="fas fa-minus"></i>
            </button>
            <Masster_input name="add_to_cart_quantity" value={"0"} state={props.state} setState={props.setState} formControl={null} type="number" style={{ height: "50px", width: "50px", outline: "0px", border: "solid 2px black", textAlign: "center", fontSize: "25px", background: "white" }} />
            <button id="increase" onClick={(e) => onClick(e, "increase")} type="button" style={{ background: "white", width: "50px" }} >
                <i style={{ color: "blue", fontSize: "30px" }} className="fas fa-plus"></i>
            </button>
        </div>
    )
}

