import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login= ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
          const res = await fetch( `${BACKEND_URL}/api/login`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password })
          });
  
          const data = await res.json();
          console.log("Login response:", data); // Debugging response
  
          if (data.success && data.user) {
              console.log("User data received:", data.user);
              localStorage.setItem("user", JSON.stringify(data.user)); 
              alert("Login Successful");
              navigate('/');
          } else {
              alert("Invalid credentials");
          }
      } catch (error) {
          console.error("Error during login:", error);
      }
  };
  
  
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
          <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <input className="w-full p-2 mb-4 bg-gray-700 rounded" 
              type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input className="w-full p-2 mb-4 bg-gray-700 rounded" 
              type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button className="w-full p-2 bg-blue-600 rounded">Login</button>
          </form>
        </div>
      );
}

export default Login;