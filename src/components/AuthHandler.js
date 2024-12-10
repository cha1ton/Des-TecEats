// src/components/AuthHandler.js

import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthHandler = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const error = query.get('error');

        if (error) {
            // Si hay un error en la URL, redirigir a la página de error
            navigate('/login-failed', { replace: true });
        } else {
            // Redirigir al dashboard si no hay error
            navigate('/dashboard', { replace: true });
        }
    }, [navigate, location]);

    return (
        <div>
            <h2>Procesando autenticación...</h2>
        </div>
    );
};

export default AuthHandler;
