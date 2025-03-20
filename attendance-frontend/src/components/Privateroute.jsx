import React from 'react'

const Privateroute = ({children}) => {
    return localStorage.getItem("valid") ? children : <Navigate to="/adminlogin" />
}

export default Privateroute