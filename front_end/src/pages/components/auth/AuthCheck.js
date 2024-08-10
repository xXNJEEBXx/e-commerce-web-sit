import React, { useContext, Component } from 'react';
import { Context } from '../global_state';
import Custom_axios from '../custom_axios';
import DeleteCookise from './DeleteCookise';

export default function AuthCheck() {
    const both = useContext(Context);
    authCheck()
    async function authCheck() {
        if (both.state.login_states) {
            const res = await Custom_axios({ url: "http://localhost:8000/api/authCheck", type: "post" })
            if (res.response) {
                if (res.response.status == "401") {
                    DeleteCookise()
                    both.setState({
                        ...both.state,
                        login_states: localStorage.getItem('auth_token')
                    })
                }
            }
        }
        return ("")
    }
}


