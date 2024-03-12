import React from 'react'
import { Navigate } from 'react-router-dom';

const AdminProductedRouter = ({isAuthenticated, role, children}) => {
  if(!isAuthenticated || role !== 'admin') {
    return <Navigate to={'/Login'} />;
}
return children;
}

export default AdminProductedRouter
