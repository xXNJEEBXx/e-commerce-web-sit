import React, { useState } from 'react';

const initalState = {
    login_states: localStorage.getItem('auth_token')
}

export const Context = React.createContext()

const Store = ({ children }) => {
    const [state, setState] = useState(initalState)
    const both = { state, setState }
    return (
        <Context.Provider value={both}>{children}</Context.Provider>
    )
}

export default Store