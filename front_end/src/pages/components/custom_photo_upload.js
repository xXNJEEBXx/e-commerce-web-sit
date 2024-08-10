import React, { useEffect, useState } from 'react';
import Custom_axios from './custom_axios';
import swal from 'sweetalert';


export default function custom_photo_upload(props) {

    const [state, setState] = useState({
        file: "",
        error: "",
        imagePreviewUrl: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", state.file)
        const res = await Custom_axios({ url: "http://localhost:8000/api/update_user_profile", type: "post", data: formData, ContentType: 'multipart/form-data' })
        if (res.data.status === 200) {
            props.image_url({
                ...state,
                imagePreviewUrl: `data:image/jpeg;base64,${res.data.base64}`,
            })
            setState({
                ...state,
                file: "",
                imagePreviewUrl: "",
            })
            document.getElementById('div-profile-file').querySelector('input').value = ""
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                button: "OK!"
            })
        } else {
            if (res.data.validate_err.file == "The file field is required.") {
                res.data.validate_err.file = "Please select your imge"
            }
            setState({
                ...state,
                error: res.data.validate_err.file
            })

        }
    };
    const onDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.target.closest('#div-profile-file').querySelector('#DropBox').style.borderStyle = "solid"
        console.log("onDragOver")
    }

    const onDragStart = (e) => {
        e.preventDefault();
        e.target.closest('#div-profile-file').querySelector('#DropBox').style.borderStyle = "dashed"
        console.log("onDragStart")
        // e.preventDefault();
    }

    const onFileDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            e.target.closest('#div-profile-file').querySelector('input').files = e.dataTransfer.files;
            setState({
                ...state,
                file: e.dataTransfer.files[0],
                imagePreviewUrl: URL.createObjectURL(e.dataTransfer.files[0]),
            })
        } else {
            e.target.closest('#div-profile-file').querySelector('#DropBox').style.borderStyle = "dashed"
        }
    }

    const onChange = async (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files.length > 0) {
            state.error = ""
            console.log(e.target.files[0])
            setState({
                ...state,
                file: e.target.files[0],
                imagePreviewUrl: URL.createObjectURL(e.target.files[0]),
            })
        } else {
            e.target.closest('#div-profile-file').querySelector('#DropBox').style.borderStyle = "dashed"
        }
    };

    const onClick = (e) => {
        if (e.target.tagName != "LABEL") {
            e.preventDefault();
            e.target.closest('#div-profile-file').querySelector('input').click()
        } else {
            setState({
                ...state,
                file: "",
                imagePreviewUrl: "",
            })
            e.target.closest('#div-profile-file').querySelector('input').value = ""
        }
    };
    var DropBox_borderStyle
    function dropbox() {
        if (state.file == "") {
            return (
                <h1 id="no-file-alert" style={{ fontSize: '30px', transition: 300, padding: "20px" }} className="color-gray2 flex justify-content-center align-items-center hover-color-red ">Drop your<br />file here<br />or click in<br />this area</h1>
            )

        } else {
            return (
                <>
                    <img src={state.imagePreviewUrl} style={{ height: '100%', width: '100%', borderRadius: "23px" }}></img>
                    <label id="photo_label" style={{ display: 'none', fontSize: "25px", background: "red", width: '100%', color: "white", borderBottomLeftRadius: "23px", borderBottomRightRadius: "23px", position: 'absolute', bottom: 0, left: 0, display: 'none', cursor: 'pointer', margin: "0" }} className=" text-align-center  show-lable">remove</label>
                </>
            )
        }
    }

    return (
        <form onSubmit={onSubmit} >
            <h4 style={{ color: 'red', }}>{state.error}</h4>
            <div id="div-profile-file" style={{ marginTop: '40px', marginLeft: '150px', transition: 300 }} className="  flex justify-content-center align-items-center ">
                <div style={{ display: 'block' }} >
                    <div id="DropBox" onDrop={onFileDrop} onClick={onClick} onDragLeave={onDragStart} onDragOver={onDragOver} className="display-block-on-hover hover-border-red" style={{ width: '210px', height: '210px', padding: '0px', position: 'relative', cursor: 'pointer', borderRadius: "30px", border: "4px #333", borderStyle: state.file == "" ? "dashed" : "solid" }}>
                        {dropbox()}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <input onChange={onChange} style={{ display: 'none' }} accept="image/*" name="input_profile_file" id="input-profile-file" type="file" />
                        <button style={{ fontSize: '20px', background: 'blue', color: 'white', cursor: 'pointer', height: '40px', width: '100px', marginTop: '5px' }} className="hover-background-blue2  transition500 focus-box-shadow-blue2">UPLOAD</button>
                    </div>
                </div>
            </div>
        </form >
    )
}