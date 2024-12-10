// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPerfil = async () => {
            try {
                const response = await api.get('/api/usuarios/perfil/');  // Ajusta según tu backend
                setUser(response.data);
            } catch (error) {
                console.error('Error al obtener el perfil del usuario:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPerfil();
    }, []);

    if (loading) {
        return <div>Cargando perfil...</div>;
    }

    if (!user) {
        return <div>No estás autenticado.</div>;
    }

    return (
        <div>
            <h2>Bienvenido, {user.nombre}</h2>
            {/* Muestra más información del usuario según sea necesario */}
        </div>
    );
};

export default Dashboard;
