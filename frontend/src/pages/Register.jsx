import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [user_id, setUserId] = useState('');
    const [fname, setFname] = useState('');
    const [sname, setSname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [role, setRole] = useState('');
    //const [profileImage, setProfileImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/register', { user_id, fname, sname, lname, email, pass, role/*, profileImage*/ });
            alert('User registered');
        } catch (error) {
            alert('Error registering user');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-1/3">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <input
                    type="text"
                    value={user_id}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="User ID"
                    className="border p-2 w-full mb-4"
                    required
                />
                <input
                    type="text"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="First Name"
                    className="border p-2 w-full mb-4"
                    required
                />
                <input
                    type="text"
                    value={sname}
                    onChange={(e) => setSname(e.target.value)}
                    placeholder="Second Name"
                    className="border p-2 w-full mb-4"
                />
                <input
                    type="text"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    placeholder="Last Name"
                    className="border p-2 w-full mb-4"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border p-2 w-full mb-4"
                    required
                />
                <input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Password"
                    className="border p-2 w-full mb-4"
                    required
                />
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="border p-2 w-full mb-4"
                    required
                >
                    <option value="">Select Role</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                </select>
                {/* <input
                    type="text"
                    value={profileImage}
                    onChange={(e) => setProfileImage(e.target.value)}
                    placeholder="Profile Image URL"
                    className="border p-2 w-full mb-4"
                /> */}
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;

