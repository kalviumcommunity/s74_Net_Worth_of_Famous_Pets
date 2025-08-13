import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiEdit } from 'react-icons/fi';

const UpdatePet = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [petname, setPetName] = useState('');
  const [petdescription, setPetDescription] = useState('');
  const [petage, setPetAge] = useState('');
  const [petimage, setPetImage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:9090/getpet/${id}`)
      .then(result => {
        setPetName(result.data.petname);
        setPetDescription(result.data.description);
        setPetAge(result.data.petage);
        setPetImage(result.data.petimage);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:9090/updatepet/${id}`, {
      petname,
      description : petdescription,
      petage,
      petimage,
    })
      .then(res => {
        console.log(res);
        navigate('/my-page');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <FiEdit className="text-yellow-400" /> Update Pet Details
        </h2>
        <form onSubmit={Update} className="mt-4 space-y-4">
          <div>
            <label className="text-white block">Pet Name</label>
            <input type="text" value={petname} onChange={(e) => setPetName(e.target.value)}
              className="w-full p-2 rounded-lg bg-white/80 focus:ring-2 focus:ring-yellow-400 outline-none" placeholder='Enter Name' />
          </div>
          <div>
            <label className="text-white block">Description</label>
            <input type="text" value={petdescription} onChange={(e) => setPetDescription(e.target.value)}
              className="w-full p-2 rounded-lg bg-white/80 focus:ring-2 focus:ring-yellow-400 outline-none" placeholder='Enter Description' />
          </div>
          <div>
            <label className="text-white block">Age</label>
            <input type="text" value={petage} onChange={(e) => setPetAge(e.target.value)}
              className="w-full p-2 rounded-lg bg-white/80 focus:ring-2 focus:ring-yellow-400 outline-none" placeholder='Enter Age' />
          </div>
          <div>
            <label className="text-white block">Pet Image URL</label>
            <input type="text" value={petimage} onChange={(e) => setPetImage(e.target.value)}
              className="w-full p-2 rounded-lg bg-white/80 focus:ring-2 focus:ring-yellow-400 outline-none" placeholder='Enter Image URL' />
          </div>
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            Update Pet
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdatePet;
