import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "./Button"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="text-white py-20 bg_gradient ">
            <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
                <div className="flex">
                    <p className="font-bold text-center">
                        Dish<span className="text-green-500 text-xl">Diary</span>
                    </p>
                </div>

                <div className="">
                    <p>QUICK LINKS</p>

                    <div className="flex flex-col text-start mb-4 md:mb-0">
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Home
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            About
                        </a>
                       
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Contact Us
                        </a>
                        
                    </div>
                </div>

                  

                <div className="flex flex-col">
                    <p>SOCIAL MEDIA</p>
                    <div className="flex mt-4 gap-3">
                        <a
                             href='https://www.facebook.com' target="_blank" rel="noopener noreferrer" className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaFacebook size={18} />
                        </a>

                        <a
                            href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                            className='bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                             href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaTwitter size={18} />
                        </a>
                        <a
                            href="https://www.youtube.com"target="_blank" rel="noopener noreferrer"
                            className='bg-red-600 p-1.5 rounded-sm text-white hover:scale-110'
                        >
                            <FaYoutube size={18} />
                        </a>
                    </div>

                    
                </div>
            </div>
        </footer>
    )
}

export default Footer