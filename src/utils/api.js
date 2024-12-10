import axios from 'axios';

// Configura la URL base directamente en el código
const api = axios.create({
    baseURL: 'https://d6c4-3-82-22-185.ngrok-free.app', // URL base del backend
    withCredentials: true, // Importante para enviar cookies
});

// Agregar un interceptor para manejar CSRF si es necesario
api.interceptors.request.use(
    async (config) => {
        // Obtener el token CSRF si es necesario
        if (['post', 'put', 'delete', 'patch'].includes(config.method)) {
            await api.get('/api/get-csrf-token/'); // Asegura que la cookie CSRF esté presente
            const csrfToken = getCookie('csrftoken');
            config.headers['X-CSRFToken'] = csrfToken;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Función para obtener cookies
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export default api;