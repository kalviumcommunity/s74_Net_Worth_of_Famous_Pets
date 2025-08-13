// import {FaInstagram, FaEnvelope, FaPhone} from "react-icons/fa"
import React from "react";
import { FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";
const Contact = ()  =>{ 
    return (
        <div id="contact" className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24 text-center rounded-2xl shadow-lg" >
            <h1 className="text-3xl font-bold mb-6 text-yellow-400" >Contact Us</h1>
            <p className="text-lg mb-4">Have any question? React out to us!</p>
            <div className="flex flex-col items-center gap-4 text-lg">
                <div className="flex items-center gap-3">
                    <FaEnvelope className="text-yellow-400" />
                    <span>contact@richypets.com</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaPhone className="text-yellow-400" />
                        <span>+91 9121314151</span>
                    
                </div>
                <div className="flex items-center gap-3">
          <FaInstagram className="text-yellow-400" />
          <a href="https://instagram.com/richypets" target="_blank" rel="noopener noreferrer" className="hover:underline">
            @richypets
          </a>
        </div>
            </div>
        </div>
    )
}

export default Contact