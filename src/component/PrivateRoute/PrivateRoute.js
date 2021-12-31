import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const location = useLocation();
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;