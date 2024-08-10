import React, { useState } from 'react';
import $ from "jquery";
import { Link, Navigate } from 'react-router-dom';

export default function Select_navigation_menu(props) {
    var height = "50px"
    if (props.height) {
        height = props.height
    }


    const onClick = async (e) => {
        $(e.target).css({ "background-color": "blue", "color": "white" })
        $(e.target).siblings().css({ "background-color": "white", "color": "blue" })
        if (props.type != "same content") {
            $(e.target.closest('#navigat_slider').querySelector("#navigat_" + e.target.id)).fadeIn(600);
            $(e.target.closest('#navigat_slider').querySelector("#navigat_" + e.target.id)).siblings().hide();
        }
        await props.setState({
            ...props.state,
            ["select_" + props.name]: e.target.id,
        })
    };

    function content() {
        if (props.type != "same content") {
            return props.data.map(array => <div id={"navigat_" + array.name} style={{ display: props.select == array.name ? null : "none" }}>{array.navigat_data}</div>)
        } else {
            return props.content
        }
    }

    return (
        <div id="navigat_slider" style={{ marginTop: "40px" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {props.data.map(array =>
                    <button id={array.name} onClick={onClick} type="button" style={{ height: height, width: '250px', fontSize: '30px', cursor: 'pointer', transition: '0.5s', background: props.select == array.name ? 'blue' : 'white', color: props.select == array.name ? 'white' : 'blue' }} className="sigin-in-button">{array.menu_name}</button>
                )}
            </div>
            <div>
                {content()}
            </div>
        </div>

    )
}