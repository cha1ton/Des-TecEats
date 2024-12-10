// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AuthHandler from './components/AuthHandler';
import Dashboard from './components/Dashboard';
import LoginFailed from './components/LoginFailed';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/auth/callback" element={<AuthHandler />} />
                <Route path="/login-failed" element={<LoginFailed />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                {/* Otras rutas */}
            </Routes>
        </Router>
    );
}

export default App;
