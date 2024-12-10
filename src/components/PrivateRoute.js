// src/components/PrivateRoute.js

import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../utils/api';

const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await api.get('/api/usuarios/perfil/');  // Ajusta según tu backend
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <div>Cargando...</div>;  // O un spinner
    }

    return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
