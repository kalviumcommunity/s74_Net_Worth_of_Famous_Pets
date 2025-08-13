  import React, { useEffect, useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import axios from 'axios';
  import { Link } from "react-router-dom";

  const MyPage = () => {
      const navigate = useNavigate();
      const [myPets, setMyPets] = useState([]);

      const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:9090/api";


      useEffect(() => {
        const userData = localStorage.getItem("user");
    
        if (!userData) {
            console.warn("No user found in localStorage! Redirecting to login...");
            navigate("/login");
            return;
        }
    
        try {
            const user = JSON.parse(userData);
            console.log("Fetched user:", user); // Debugging
    
            if (!user || !user.email) {
                console.error("Invalid user data:", user);
                navigate("/login");
                return;
            }
    
            const userId = user._id; // Use the user ID, not email

          axios.get(`${BACKEND_URL}/pets-by-user/${userId}`)
              .then(result => {
                  console.log("Pets fetched:", result.data);
                  setMyPets(result.data);
              })
              .catch(err => console.log("Error fetching pets:", err));

        } catch (error) {
            console.error("Error parsing user data:", error);
            navigate("/login");
        }
    }, []);
    
    

   
    

    const handleDelete = async (id) => {
      const user = JSON.parse(localStorage.getItem("user"));
      const petToDelete = myPets.find(pet => pet._id === id);

      if (petToDelete.created_by !== user.email) {
          alert("You can only delete your own pets!");
          return;
      }

      try {
          const res = await axios.delete(`http://localhost:9090/deletePet/${id}`);
          console.log(res.data);

          setMyPets(myPets.filter(pet => pet._id !== id)); // Remove deleted pet from state
      } catch (err) {
          console.error("Error deleting pet:", err);
      }
  };

    

    return (
      <div className="bg-gradient-to-r from-green-700 via-blue-800 to-green-900 text-white min-h-screen p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in drop-shadow-lg">
          Add Your Favorite Pets Now!
        </h1>
        
        <button
          className="px-8 py-3 bg-gray-900 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 mb-8"
          onClick={() => navigate('create-pet')}
        >
          Add Pet
        </button> 
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {myPets.map(pet => (
            <div
              key={pet._id}
              className="bg-gray-800 rounded-lg shadow-xl p-6 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group flex flex-col items-center"
            >
              <img
                src={pet.petimage}
                alt={pet.petname}
                className="w-full h-56 object-cover rounded-md mb-4 group-hover:brightness-75 transition duration-500"
              />
              <h2 className="text-2xl font-semibold text-center mb-2 group-hover:text-yellow-400 transition duration-300">
                {pet.petname}
              </h2>
              <p className="text-gray-300 text-sm text-center group-hover:text-gray-100 transition duration-300">
                {pet.description}
              </p>
              <p className="text-green-400 font-medium text-center mt-2 group-hover:text-green-300 transition duration-300">
                Age: {pet.petage}
              </p>
              
              <div className="flex justify-center gap-4 mt-4 w-full">
                <Link
                  to={`/my-page/update/${pet._id}`}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Update
                </Link> 
                <button
                  onClick={() => handleDelete(pet._id)}
                  className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default MyPage;
