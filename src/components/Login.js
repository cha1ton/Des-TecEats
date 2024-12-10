import React from 'react';

const Login = () => {
    // URL base del backend fija en el código
    const backendUrl = 'https://d6c4-3-82-22-185.ngrok-free.app';

    const handleLogin = (role) => {
        const loginUrl = role === 'usuario' 
            ? `${backendUrl}/user/duenos/login/` 
            : `${backendUrl}/user/usuarios/login/`;
        window.location.href = loginUrl;  // Redirige al backend para iniciar OAuth2
    };

    return (
        <div>
            <h2>Iniciar Sesión con Google</h2>
            <button onClick={() => handleLogin('usuario')}>Login como Usuario</button>
            <button onClick={() => handleLogin('dueno')}>Login como Dueño Restaurante</button>
        </div>
    );
};

export default Login;