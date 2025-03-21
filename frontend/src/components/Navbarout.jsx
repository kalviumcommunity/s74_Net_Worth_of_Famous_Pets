import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbarout = () => {
  const navigate = useNavigate()
  return (
    <nav className='bg-gray-800 text-white p-4' >
      <div className='max-w-7xl mx-auto  flex justify-between items-center'>
        <div className='text-2xl font-bold text-yellow-400 ' >RichyPets</div>
        <ul className='flex space-x-4' >
            <li><a href="#" className='hover:bg-yellow-700 px-3 py-2 rounded-xl ' >Home</a></li>
            <li><a href="" className='hover:bg-yellow-700 px-3 py-2 rounded-xl' >Explore</a></li>
            <li><a href="" className='hover:bg-yellow-700 px-3 py-2 rounded-xl' >Pets</a></li>
            <li><a href="#contact" className='hover:bg-yellow-700 px-3 py-2 rounded-xl' >Contact</a></li>
            <li><button 
          onClick={() => navigate('/login')} 
          className="mr-4 px-6 py-2 bg-blue-600 hover:bg-blue-800 rounded-lg">
          Login
        </button></li>
        <li>
        <button 
          onClick={() => navigate('/signup')} 
          className="px-6 py-2 bg-green-600 hover:bg-green-800 rounded-lg">
          Signup
        </button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbarout
