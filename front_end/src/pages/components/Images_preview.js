import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function Images_preview(props) {

    const onClick = (e) => {

        props.state[props.name + "_remove_list"].push(e.target.id)
        if (props.state[props.name + "_remove_list"].length == props.images.length) {
            e.target.closest("#images_preview_div").style = "height:240px;width240px"
            e.target.closest("#images_preview_div").classList.add("flex-center")
            e.target.closest("#images_preview_div").innerHTML = "<h1>No images*</h1>"
        } else {
            e.target.closest("div").remove()
        }
        props.setState({
            ...props.state,
        })

    };



    return (
        <div style={{ marginTop: "40px" }}>
            <label htmlFor={props.name} style={{ width: '500px', fontSize: '40px' }} className="inline-block text-align-left">{props.text}</label>
            <div className='flex-center'>
                <div id='images_preview_div' style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr " }}>
                    {
                        props.images.map(image =>
                            <div className='display-block-on-hover' style={{ position: 'relative', height: "170px", width: '170px', margin: "10px" }}>
                                <img style={{ margin: "10px;", width: "100%", height: "100%", borderRadius: "25px" }} src={`data:image/jpeg;base64,${image.base64}`} />
                                <label onClick={onClick} id={image.id} style={{ display: 'none', fontSize: "25px", background: "red", width: '100%', color: "white", borderBottomLeftRadius: "23px", borderBottomRightRadius: "23px", position: 'absolute', bottom: 0, left: 0, display: 'none', cursor: 'pointer', margin: "0" }} className={" text-align-center " + (image.id != "no image" ? "show-lable" : "")}>remove</label>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>

    )
}