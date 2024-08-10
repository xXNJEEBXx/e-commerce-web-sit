import React, { useContext, useState, Component } from 'react';
import Custom_axios from './components/custom_axios';
import Long_input from './components/inputs/Long_input';
import StoreCookise from './components/auth/StoreCookise';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { Context } from './components/global_state';
import { useNavigate } from 'react-router-dom';



// import React, { useContext, useState, Component } from 'react';
// import Long_input from './components/Long_input';
// import axios from 'axios';
// import swal from 'sweetalert';
// import { Context } from './components/global_state';
// import { Link, useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [state, setState] = useState({
        errors_list: []
    });

    const bothe = useContext(Context);
    const history = useNavigate();


    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await Custom_axios({ url: "http://localhost:8000/api/login", type: "post", data: state })
        // console.log(res)
        if (res.data.status === 200) {
            StoreCookise(res.data)
            history('/')
            bothe.setState({
                ...bothe.state,
                login_states: localStorage.getItem('auth_token')
            })
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                button: "OK!"
            })
        }
        else {
            setState({
                ...state,
                errors_list: res.data.validate_err
            })
        }
    };


    return (
        <div>
            <div style={{ width: '100%' }} className="page-warapper inline-block flex justify-content-center">
                <div style={{ width: '600px', marginBlock: '80px', padding: '40px' }} className="align-items-center box-shadow3  ">
                    <div style={{ marginTop: '20px' }} className="flex justify-content-center ">
                        <Link to="/Sigin_in">
                            <button style={{ height: '50px', width: '250px', fontSize: '30px', background: 'white', color: 'blue', cursor: 'pointer', transition: '0.5s' }} className="sigin-in-button  tab tab-active ">Sign in</button>
                        </Link>
                        <button style={{ height: '50px', width: '250px', fontSize: '30px', background: 'blue', color: 'white', cursor: 'pointer', transition: '0.5s' }} className="login-button">Login</button>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div style={{ background: 'white' }} className="login text-align-center ">
                            <h1 style={{ fontSize: '50px', marginTop: '25px' }}>Welcome Back</h1><br />
                            <Long_input name="username_or_email" text="Email/Username" state={state} setState={setState} error={state.errors_list.username_or_email} />
                            <Long_input name="password" text="Password" type="password" state={state} setState={setState} error={state.errors_list.password} />
                            <a style={{ width: '500px', marginBottom: '7px', cursor: 'pointer', transition: '0.5s' }} className="inline-block text-align-right hover-color-blue ">Forgot Password?</a>
                            <button style={{ marginBottom: '20px', fontSize: '30px', padding: '5px' }} className="button-blue form-control">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

