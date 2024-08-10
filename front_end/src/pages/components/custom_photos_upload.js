import React, { useEffect, useState } from 'react';



export default function custom_photo_upload(props) {

    const onDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.target.closest('#div-profile-file').querySelector('#DropBox').style.borderStyle = "solid"
    }

    const onDragStart = (e) => {
        e.preventDefault();
        e.target.closest('#div-profile-file').querySelector('#DropBox').style.borderStyle = "dashed"
    }

    const onFileDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            update_files(e.dataTransfer.files)
        }
    }

    const onChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files.length > 0) {
            update_files(e.target.files)
            e.target.closest('#div-profile-file').querySelector('input').value = ""
        } else {
            if (props.state[props.name]) {
                document.querySelector('#' + props.name).file = Array.from(props.state[props.name])
            }
        }
    }

    function update_files(files) {
        props.state.errors_list.file = ""
        console.log(props)
        if (props.state[props.name]) {
            Array.from(files).forEach(element => {
                props.state[props.name].push(element)
            });
        } else {
            props.state[props.name] = Array.from(files)
        }
        props.setState({
            ...props.state,
        })
        console.log(props.state[props.name])
    }


    const onClick = (e) => {
        if (e.target.tagName != "LABEL") {
            e.target.closest('#div-profile-file').querySelector('input').click()
        } else {
            props.state[props.name] = Array.from(props.state[props.name]).filter((element) => element.name != e.target.closest('div').id)
            props.setState({
                ...props.state,
            })
            console.log(props.state[props.name])
        }
    };

    function file_templer(name, url) {
        return (
            <div id={name} className='display-block-on-hover' style={{ position: 'relative', margin: '10px', width: '150px' }}>
                <img src={url} style={{ height: '150px', width: '100%', borderRadius: "23px" }}></img>
                <label id="photo_label" style={{ display: 'none', fontSize: "25px", background: "red", width: '100%', color: "white", borderBottomLeftRadius: "23px", borderBottomRightRadius: "23px", position: 'absolute', bottom: 0, left: 0, display: 'none', cursor: 'pointer', margin: "0" }} className=" text-align-center  show-lable">remove</label>
            </div>
        )
    }

    function dropbox() {
        if (!props.state[props.name] || Array.from(props.state[props.name]).length == 0) {
            return (
                <h1 id="no-file-alert" style={{ fontSize: '30px', transition: 300, padding: "20px" }} className="color-gray2 flex justify-content-center align-items-center hover-color-red ">Drop your files here or click in this area</h1>)
        } else {
            return (
                <div id="files" style={{ display: "grid", gridTemplateColumns: " 1fr 1fr 1fr 1fr 1fr" }}>
                    {Array.from(props.state[props.name]).map((file) => (
                        file_templer(file.name, URL.createObjectURL(file))
                    ))}
                </div>
            )
        }
    }


    return (
        <div style={{ marginTop: "40px" }}>
            <label style={{ fontSize: "40px" }} className="inline-block" >{props.title}</label>
            <h4 style={{ color: 'red', }}>{props.state.errors_list[props.name]}</h4>
            <div id="div-profile-file" style={{ marginTop: '10px', width: '100%', transition: 300 }} className="  flex justify-content-center align-items-center ">
                <div style={{ width: '100%', display: 'block' }} >
                    <div id="DropBox" onDrop={onFileDrop} onClick={onClick} onDragLeave={onDragStart} onDragOver={onDragOver} className=" hover-border-red flex-center" style={{ width: '100%', minHeight: '210px', padding: '0px', cursor: 'pointer', borderRadius: "30px", border: "4px #333", borderStyle: (!props.state[props.name] || props.state[props.name].length == 0) ? "dashed" : "solid" }}>
                        {dropbox()}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <input id={props.name} onChange={onChange} style={{ display: "none" }} accept="image/*" type="file" multiple />
                    </div>
                </div>
            </div>
        </div>
    )
}