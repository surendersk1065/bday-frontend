import React from "react"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {

    const isLoggedIn = sessionStorage.getItem("isLoggedIn")

    return isLoggedIn === "true" ? children : <Navigate to="/" />

}

export default ProtectedRoute