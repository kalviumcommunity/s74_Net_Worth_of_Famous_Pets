import React from 'react'

const Navbarout = () => {
  return (
    <nav className='bg-gray-800 text-white p-4' >
      <div className='max-w-7xl mx-auto  flex justify-between items-center'>
        <div className='text-2xl font-bold text-yellow-400 ' >RichyPets</div>
        <ul className='flex space-x-4' >
            <li><a href="#" className='hover:bg-yellow-700 px-3 py-2 rounded-xl ' >Home</a></li>
            <li><a href="" className='hover:bg-yellow-700 px-3 py-2 rounded-xl' >Explore</a></li>
            <li><a href="" className='hover:bg-yellow-700 px-3 py-2 rounded-xl' >Pets</a></li>
            <li><a href="#contact" className='hover:bg-yellow-700 px-3 py-2 rounded-xl' >Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbarout
