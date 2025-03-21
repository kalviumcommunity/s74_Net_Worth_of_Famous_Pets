import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    alert("Signup Successful!");
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleSignup} className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <input className="w-full p-2 mb-4 bg-gray-700 rounded" 
          type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="w-full p-2 mb-4 bg-gray-700 rounded" 
          type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="w-full p-2 mb-4 bg-gray-700 rounded" 
          type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="w-full p-2 bg-green-600 rounded">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
