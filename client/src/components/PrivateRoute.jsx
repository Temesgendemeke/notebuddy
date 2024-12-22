import React from 'react'
import useAuth from '../context/useAuth'
import { Navigate, Outlet } from 'react-router'

const PrivateRoute = () => {

  const token = localStorage.getItem('authtoken')


  return ( token ? <Outlet/>: <Navigate to="/login"/>)
  
}

export default PrivateRoute