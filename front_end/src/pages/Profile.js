import React, { useEffect, useContext, useState, Component } from 'react';
import { Context } from './components/global_state';
import { useNavigate } from 'react-router-dom';
import Custom_axios from './components/custom_axios';
import Custom_photo_upload from './components/custom_photo_upload';
import DeleteCookise from './components/auth/DeleteCookise';
import swal from 'sweetalert';

export default function Profile(props) {

    const [state, setState] = useState({
        imagePreviewUrl: "",
    });

    const both = useContext(Context);
    const history = useNavigate();


    useEffect(() => {
        async()
        async function async() {
            var res = await Custom_axios({ url: "http://127.0.0.1:8000/api/get_user_profile_photo", type: "get" })
            setState({
                ...state,
                imagePreviewUrl: `data:image/jpeg;base64,${res.data.base64}`
            })
        }

    }, [])


    const logout = async (e) => {
        e.preventDefault();
        var res = await Custom_axios({ url: "http://localhost:8000/api/logout", type: "post" })
        if (res.data.status === 200) {
            DeleteCookise()
            history('/')
            both.setState({
                ...both.state,
                login_states: localStorage.getItem('auth_token')
            })
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                button: "OK!"
            })
        }
    }


    return (
        <div>
            <div style={{ height: '950px' }} className="page-warapper flex justify-content-center align-items-center  background-gray3">
                <div style={{ width: '1200px', background: 'white', padding: '40px' }} className="profile  box-shadow1 ">
                    <div className="inline-flex">
                        <img style={{ height: '200px', width: '200px', marginLeft: '100px', margin: '40px' }} className="circle2 border-gray2 " src={state.imagePreviewUrl} />

                        <div style={{ marginLeft: '50px' }} className="photo_info">
                            <h1 style={{ fontSize: '60px' }}>{localStorage.getItem('username')}</h1>
                            <br />
                            <p style={{ fontSize: '25px', color: 'gray' }}>Avatar by <b>njeebxalmusawi.com</b>. Or upload your own...</p>
                            <Custom_photo_upload image_url={setState} />
                        </div>
                    </div>
                    <hr />
                    <div style={{ marginLeft: '100px' }}>
                        <h1 style={{ fontSize: '40px' }} className="font-weight-bold ">Account info</h1>
                        <div style={{ margin: 'top40px' }}>
                            <li className="inline-flex">
                                <label style={{ fontSize: '40px', width: '300px' }}>Email</label><input style={{ height: '50px', width: '700px', font: 'size30px' }} type="text" defaultValue={localStorage.getItem('email')} />
                            </li>
                        </div>
                        <div style={{ margin: 'top20px' }}>
                            <li className="inline-flex">
                                <label style={{ fontSize: '40px', width: '300px' }}>Password</label><input style={{ height: '50px', width: '700px', fontSize: '30px' }} type="text" defaultValue=" " />
                            </li>
                        </div>
                        <div style={{ width: '100%' }} className=" text-align-right">
                            <button style={{ fontSize: '25px', marginTop: '40px', padding: '5px', paddingInline: '10px' }} onClick={logout} className=" button-red ">Log out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



