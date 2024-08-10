import React, { useContext, Component } from 'react';
import { Context } from '../global_state';
import { Navigate } from 'react-router-dom';


const PrivateRoute = (props) => {
    const both = useContext(Context);
    var auth
    var RedirectPath
    if (props.type == "need to login") {
        auth = both.state.login_states
        RedirectPath = "/Login"
    } else {
        auth = !both.state.login_states
        RedirectPath = "/"
    }
    return auth ? <props.Component /> : <Navigate to={RedirectPath} />
}
export default PrivateRoute




