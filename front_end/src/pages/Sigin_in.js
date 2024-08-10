import React, { useContext, useState } from 'react';
import Long_input from './components/inputs/Long_input';
import StoreCookise from './components/auth/StoreCookise';
import Custom_axios from './components/custom_axios';
import swal from 'sweetalert';
import { Context } from './components/global_state';
import { Link, useNavigate } from 'react-router-dom';

export default function Sigin_in(props) {
    const [state, setState] = useState({
        errors_list: []
    });

    const both = useContext(Context);
    const history = useNavigate();


    const onSubmit = async (e) => {
        e.preventDefault();

        const res = await Custom_axios({ url: "http://localhost:8000/api/register", type: "post", data: state })
        if (res.data.status === 200) {
            StoreCookise(res.data)
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
            history('/')
        }
        else {
            console.log(state.errors_list)
            setState({
                ...state,
                errors_list: res.data.validate_err
            })
        }
    };


    return (
        <div style={{ width: '100%' }} className="page-warapper inline-block flex justify-content-center">
            <div style={{ width: '600px', marginBlock: '80px', padding: '40px' }} className="align-items-center box-shadow3  ">
                <div style={{ marginTop: '20px' }} className="flex justify-content-center ">
                    <button style={{ height: '50px', width: '250px', fontSize: '30px', background: 'blue', color: 'white', cursor: 'pointer', transition: '0.5s' }} className="sigin-in-button">Sign in</button>
                    <Link to="/Login">
                        <button style={{ height: '50px', width: '250px', fontSize: '30px', background: 'white', color: 'blue', cursor: 'pointer', transition: '0.5s' }} className="login-button">Login
                        </button>
                    </Link>
                </div>
                <form onSubmit={onSubmit}>
                    <div style={{ background: 'white', textAlign: 'center' }} className="sigin-in ">
                        <h1 style={{ fontSize: '50px', padding: '15px', paddingTop: '25px' }}>Welcome</h1>
                        <Long_input name="username" text="Username" state={state} setState={setState} />
                        <Long_input name="email" text="Email" type="email" state={state} setState={setState} />
                        <Long_input name="password" text="Password" type="password" state={state} setState={setState} />
                        <Long_input name="password_confirmation" text="Re-enter password" type="password" state={state} setState={setState} />
                        <Long_input name="checkbox" text="by prees this" type="checkbox" state={state} setState={setState} />
                        <button style={{ marginBottom: '20px', fontSize: '30px' }} className="button-blue form-control">Sign up</button>
                    </div>
                </form>
            </div>
        </div >
    )
}