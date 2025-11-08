import React from 'react';
import { IoClose } from "react-icons/io5";
import { makeSocialLinks } from '../utils/social';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const UserModel = ({ user, handleCloseModel }) => {
    const links = makeSocialLinks(user.login?.username);

    return (
        <div onClick={() => handleCloseModel()} className="fixed inset-0 bg-black/80 backdrop-blur-xs flex justify-center items-center 
            z-50 transition-all duration-300 animate-fadeIn">
            <div onClick={(e) => e.stopPropagation()} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 w-[80%] sm:w-[90%] 
                max-w-md text-center relative shadow-lg hover:shadow-2xl border border-gray-700 transition-transform 
                duration-300 transform animate-scaleIn">
                <button onClick={() => handleCloseModel()} className="absolute top-3 right-3 
                    text-white text-2xl cursor-pointer hover:text-gray-300 transition-colors duration-300">
                    <IoClose/>
                </button>

                <div className="relative mt-3">
                    <div className="w-24 h-24 rounded-full border-4 border-gray-700 overflow-hidden mx-auto">
                        <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} 
                        className=" w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
                    </div>

                    <div className="flex flex-col items-center space-y-3 mt-2">
                        <h2 className="text-xl font-semibold text-white">
                            {user.name.title} {user.name.first} {user.name.last}
                        </h2>

                        <div className="bg-gray-800/50 w-full mt-4 p-4 rounded-xl text-left space-y-3 border border-gray-700">
                            <p className="text-gray-400">
                                <span className="font-semibold text-gray-300">Gender:</span> {user.gender}
                            </p>
                            <p className="text-gray-400">
                                <span className="font-semibold text-gray-300">Age:</span> {user.dob.age}
                            </p>
                            <p className="text-gray-400">
                                <span className="font-semibold text-gray-300">Email:</span> {user.email}
                            </p>
                            <p className="text-gray-400">
                                <span className="font-semibold text-gray-300">Phone:</span> {user.phone}
                            </p>
                            <p className="text-gray-400">
                                <span className="font-semibold text-gray-300">Location:</span>{" "}
                                {user.location.city}, {user.location.country}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="social-box mt-5">
                    <p className="text-left text-lg font-bold text-white ml-2.5">Social Links</p>
                    <div className="mt-1 flex justify-between items-center">
                        <a href={links.twitter} target="_blank" rel="noopener noreferrer" className="text-xl hover:bg-gray-700 p-3 rounded-full
                            hover:text-black transition-all transform duration-300 hover:-translate-y-0.5" 
                            aria-label={`Open ${user.login.username} on Twitter`}>
                            <FaXTwitter />
                        </a>

                        <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="text-xl hover:bg-gray-700 p-3 rounded-full
                            hover:text-pink-600 transition-all transform duration-300 hover:-translate-y-0.5"
                            aria-label={`Open ${user.login.username} on Instagram`}>
                            <FaInstagram/>
                        </a>

                        <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="text-xl hover:bg-gray-700 p-3
                            rounded-full hover:text-blue-600 transition-all transform duration-300 hover:-translate-y-0.5"
                            aria-label={`Open ${user.login.username} on Facebook`}>
                            <FaFacebook />
                        </a>

                        <a href={links.snapchat} target="_blank" rel="noopener noreferrer" className="text-xl hover:bg-gray-700 p-3
                            rounded-full hover:text-yellow-500 transition-all transform duration-300 hover:-translate-y-0.5"
                            aria-label={`Open ${user.login.username} on Snapchat`}>
                            <FaSnapchat />
                        </a>

                        <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-xl hover:bg-gray-700 p-3
                            rounded-full hover:text-white transition-all transform duration-300 hover:-translate-y-0.5"
                            aria-label={`Open ${user.login.username} on Github`}>
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserModel
