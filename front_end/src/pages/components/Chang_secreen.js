import React, { Component, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function Chang_secreen(props) {
    if (props.navigate_states) {
        return (<Navigate to={props.to} />)
    }
}

// <Chang_secreen to="/" navigate_states={this.state.navigate_states} />
