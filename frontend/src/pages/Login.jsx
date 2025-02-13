import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            localStorage.setItem('token', response.data.token);
            alert('User logged in');
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-1/3">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="border p-2 w-full mb-4"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border p-2 w-full mb-4"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                    Login
                </button>
                <button type="button" onClick={handleRegisterClick} className="bg-gray-500 text-white p-2 rounded w-full mt-4">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Login;
