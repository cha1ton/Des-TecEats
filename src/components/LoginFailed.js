// src/components/LoginFailed.js

import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const LoginFailed = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const error = query.get('error');

    return (
        <div>
            <h2>Login Fallido</h2>
            <p>{error}</p>
            <Link to="/">Volver a intentar</Link>
        </div>
    );
};

export default LoginFailed;
