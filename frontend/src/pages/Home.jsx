import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { data } from '../assets/data';
import Navbarout from '../components/Navbarout';
import Contact from "../components/Contacts";

const Home = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]); 
  const [selectedUser, setSelectedUser] = useState(""); 
  const [userPets, setUserPets] = useState([]); 
  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.BACKEND_UR;


  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/users`)
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  const fetchUserPets = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:9090/pets-by-user/${userId}`);
      setUserPets(response.data);
    } catch (error) {
      console.error("Error fetching user's pets:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-gray-900 text-white min-h-screen">
      <Navbarout />

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600">
          Where Luxury Meets Loyalty 
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Explore the World of Richy Pets – Your Companion's Comfort Matters!
        </p>
        
        <div className="flex justify-center space-x-4">
          <button 
            className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600 transition transform hover:scale-105 duration-300 ease-in-out"
          >
            Explore Here
          </button>
          
          <button 
            onClick={() => navigate('/my-page')}
            className="px-8 py-3 border-2 border-green-500 text-green-500 font-bold rounded-full hover:bg-green-500 hover:text-white transition transform hover:scale-105 duration-300 ease-in-out"
          >
            My Pets
          </button>
        </div>
      </main>

      {/* User Selection Dropdown */}
      <section className="container mx-auto px-4 mb-10">
        <div className="flex justify-center">
          <select 
            className="w-full max-w-md px-4 py-3 bg-gray-800 text-white border-2 border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
            onChange={(e) => {
              setSelectedUser(e.target.value);
              fetchUserPets(e.target.value);
            }}
            value={selectedUser}
          >
            <option value="">Select a User to see his pets</option>
            {users.map((user) => (
              <option key={user._id} value={user._id} className="bg-gray-700">
                {user.name}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* User Pets Display */}
      {selectedUser && (
        <section className="container mx-auto px-4 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">
            {selectedUser ? "User's Pets" : ""}
          </h2>
          
          {userPets.length === 0 ? (
            <p className="text-center text-gray-400">No pets found for this user.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {userPets.map((pet) => (
                <div key={pet._id} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform transition hover:scale-105 duration-300">
                  <img 
                    src={pet.petimage} 
                    alt={pet.petname} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{pet.petname}</h3>
                    <p className="text-gray-300 mb-1">Age: {pet.petage}</p>
                    <p className="text-sm text-gray-400">{pet.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Search Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex justify-center">
          <input 
            type="text" 
            className="w-full max-w-md px-4 py-3 bg-gray-800 text-white border-2 border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
            onChange={(e) => setSearch(e.target.value)}   
            placeholder='Search Pet' 
          />
        </div>
      </section>

      {/* Pet Cards Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data
            .filter((item) => 
              search.toLowerCase() === '' 
              ? item 
              : item.first_name.toLowerCase().includes(search)
            )
            .slice(0,10)
            .map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform transition hover:scale-105 duration-300 border border-gray-700"
              >
                <img 
                  src="https://images.pexels.com/photos/2220336/pexels-photo-2220336.jpeg?cs=srgb&dl=pexels-alexasfotos-2220336.jpg&fm=jpg" 
                  alt="Pet"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">
                    Pet - {item.first_name}
                  </h3>
                  <div className="space-y-1 text-gray-300">
                    <p>Gender - {item.gender}</p>
                    <p>Price - {item.price}</p>
                    <p className="font-semibold">Owner - {item.pet_owner_name}</p>
                    <div className="text-sm text-gray-400">
                      <p>Mail - {item.owner_email}</p>
                      <p>Phone - {item.owner_phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Home;