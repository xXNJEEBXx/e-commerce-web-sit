import React, { useContext, Component } from 'react';
import { Context } from '../global_state';

export default function Check_login(props) {
    const both = useContext(Context);
    if (both.state.login_states) {
        return (props.login)
    }
    else {
        return (props.not_login)
    }
}
