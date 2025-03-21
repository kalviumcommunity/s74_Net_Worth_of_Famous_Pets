import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbarout from '../components/Navbarout';
import { data } from '../assets/data';
import Contact from "../components/Contacts";

const Home = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-gray-900 text-white min-h-screen">
      <Navbarout />
      
    

      <main className="flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Where Luxury Meets Loyalty – Explore the World of Richy Pets!
          </h1>
          <p className="text-lg md:text-xl text-yellow-200 mb-6">
            Discover the world’s wealthiest and most famous pets! 🐾💰 Explore their net worth, fascinating stories, and even adopt your own furry companion through our Petfinder integration.
          </p>
        </div>
        <button className="mt-4 px-6 py-3 bg-yellow-500 text-black font-semibold text-lg rounded-xl hover:bg-gray-600 border-2 hover:text-white transition duration-300">
          Explore Here
        </button>


        <button onClick={()=> navigate('/my-page')} className="mt-4 px-6 py-3 bg-green-500 text-black font-semibold text-lg rounded-xl hover:bg-gray-600 border-2 hover:text-white transition duration-300  ">
          My Pets
        </button>

        
      </main>

      <div className='mt-40 flex  justify-center w-full'>
        <input type="text" 
          className='w-200 px-4 py-3 text-white bg-gray-800 border border-yellow-400 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300'  
          onChange={(e) => setSearch(e.target.value)}   
          placeholder='Search Pet' />
      </div>

      {/* Pet Cards Section */}
      <div className="container py-10 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.filter((item) => search.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(search))
          .slice(0,10)
          .map((item, index) => (
          <div key={index} className="bg-[#1E293B] text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700">
            <img src="https://marltons.co.za/cdn/shop/articles/Marltons_Pets_and_stress_OpEd.jpg?v=1652343854" alt="Pet"
              className="w-full h-40 object-cover rounded-lg" />
            <h1 className="text-2xl font-bold text-yellow-400"> Pet - {item.first_name}</h1>
            <h2 className="text-lg text-gray-300"> Gender - {item.gender}</h2>
            <h2 className="text-lg text-gray-300"> Price - {item.price}</h2>
            <h3 className="text-md font-semibold mb-3 mt-2"> Owner - {item.pet_owner_name}</h3>
            <p className="text-sm text-gray-400"> Mail - {item.owner_email}</p>
            <p className="text-sm text-gray-400"> Phone - {item.owner_phone}</p>
          </div>
        ))}
      </div>

      <Contact />
    </div>
  );
};

export default Home;
