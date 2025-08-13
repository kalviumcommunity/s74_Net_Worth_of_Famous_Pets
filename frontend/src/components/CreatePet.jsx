import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePet = () => {
    const [petname, setPetName] = useState('');
    const [petdescription, setPetDescription] = useState('');
    const [petage, setPetAge] = useState('');
    const [petimage, setPetImage] = useState('');

    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        
        const user = JSON.parse(localStorage.getItem("user")); // Retrieve user info
        if (!user) {
            alert("Please log in first!");
            navigate("/login");
            return;
        }
    
        axios.post("http://localhost:9090/createmypet/", { 
            petname, 
            description: petdescription, 
            petage, 
            petimage, 
            created_by: user._id // Use _id instead of email
        })        
        .then(result => {
            console.log(result);
            navigate('/my-page');
        })
        .catch(err => console.log(err));
    };
    

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-700 via-blue-800 to-green-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-white text-center mb-6">Add Pet</h1>
                <form onSubmit={Submit} className="space-y-4">
                    <div>
                        <label className="block text-white mb-1">Pet Name</label>
                        <input
                            type='text'
                            placeholder='Enter Pet Name'
                            className='w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400'
                            onChange={(e) => setPetName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-white mb-1">Description</label>
                        <textarea
                            placeholder='Tell about Pet'
                            className='w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400'
                            onChange={(e) => setPetDescription(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label className="block text-white mb-1">Pet Age</label>
                        <input
                            type='number'
                            placeholder='Enter Pet Age'
                            className='w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400'
                            onChange={(e) => setPetAge(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-white mb-1">Pet Image</label>
                        <input
                            type='text'
                            placeholder='Provide Pet image URL'
                            className='w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400'
                            onChange={(e) => setPetImage(e.target.value)}
                        />
                    </div>
                    
                    <button 
                        className='w-full bg-yellow-500 text-gray-900 font-bold py-2 rounded-md shadow-md transition duration-300 hover:bg-yellow-400 hover:shadow-lg'
                    >
                        Submit
                    </button>   
                </form>
            </div>
        </div>
    );
};

export default CreatePet;
