import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { 
  Home, 
  MapPin, 
  MessageCircle, 
  LogOut, 
  LogIn, 
  UserPlus, 
  Menu, 
  X 
} from 'lucide-react'

const Navbarout = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged in by checking localStorage
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link 
              to="/" 
              className='text-2xl font-bold text-yellow-400 flex items-center space-x-2 hover:text-yellow-300 transition duration-300'
            >
              RichyPets
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-4 items-center'>
            <Link 
              to="/" 
              className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition duration-300'
            >
              <Home className='w-5 h-5 mr-1' /> Home
            </Link>
            <Link 
              to="/explore" 
              className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition duration-300'
            >
              <MapPin className='w-5 h-5 mr-1' /> Explore
            </Link>
            <a 
              href="#contact" 
              className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition duration-300'
            >
              <MessageCircle className='w-5 h-5 mr-1' /> Contact
            </a>

            {/* Conditional Rendering of Auth Buttons */}
            {!isLoggedIn ? (
              <div className='flex space-x-2'>
                <button 
                  onClick={() => navigate('/login')} 
                  className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition duration-300"
                >
                  <LogIn className='w-5 h-5 mr-1' /> Login
                </button>
                <button 
                  onClick={() => navigate('/signup')} 
                  className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium transition duration-300"
                >
                  <UserPlus className='w-5 h-5 mr-1' /> Signup
                </button>
              </div>
            ) : (
              <button 
                onClick={handleLogout} 
                className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition duration-300"
              >
                <LogOut className='w-5 h-5 mr-1' /> Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <button 
              onClick={toggleMobileMenu} 
              className='text-gray-300 hover:text-white focus:outline-none'
            >
              {isMobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800'>
            <Link 
              to="/" 
              className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center'
              onClick={toggleMobileMenu}
            >
              <Home className='w-5 h-5 mr-2' /> Home
            </Link>
            <Link 
              to="/explore" 
              className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center'
              onClick={toggleMobileMenu}
            >
              <MapPin className='w-5 h-5 mr-2' /> Explore
            </Link>
            <a 
              href="#contact" 
              className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center'
              onClick={toggleMobileMenu}
            >
              <MessageCircle className='w-5 h-5 mr-2' /> Contact
            </a>

            {/* Mobile Auth Buttons */}
            {!isLoggedIn ? (
              <div className='space-y-2 pt-2'>
                <button 
                  onClick={() => {
                    navigate('/login');
                    toggleMobileMenu();
                  }} 
                  className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition duration-300"
                >
                  <LogIn className='w-5 h-5 mr-1' /> Login
                </button>
                <button 
                  onClick={() => {
                    navigate('/signup');
                    toggleMobileMenu();
                  }} 
                  className="w-full flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium transition duration-300"
                >
                  <UserPlus className='w-5 h-5 mr-1' /> Signup
                </button>
              </div>
            ) : (
              <button 
                onClick={handleLogout} 
                className="w-full flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium mt-2 transition duration-300"
              >
                <LogOut className='w-5 h-5 mr-1' /> Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbarout