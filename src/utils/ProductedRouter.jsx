import React from 'react'
import { Navigate } from 'react-router-dom'

const ProductedRouter = ({isAuthenticated, children}) => {
  if(!isAuthenticated) {
    return <Navigate to={'/login'} />
  }
  return children;
}

export default ProductedRouter
