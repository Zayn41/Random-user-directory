import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const UserCard = ({ user, handleUserClick }) => {
    const getFlagEmoji = (countryCode) => {
        return countryCode.toUpperCase()
            .replace(/./g, char =>
                String.fromCodePoint(127397 + char.charCodeAt())
            );
    };

    return (
        <div className="user-card group relative bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-3xl
            shadow-lg hover:shadow-2xl transform transition-all duration-500 border border-gray-700 
            flex flex-col text-center items-center hover:-translate-y-2">
            <div className="img-box w-28 h-28 rounded-full overflow-hidden border-4 border-gray-700">
                <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} 
                className=" w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-gray-700/5 to-gray-600/5 rounded-3xl
                opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
            </div>

            <div className="user-info mt-2 space-y-1">
                <h2 className="text-lg font-bold text-white">
                    {user.name.first} {user.name.last}
                </h2>
                
                <p className="text-gray-400 text-sm font-semibold">
                    {getFlagEmoji(user.nat)} {user.location.country}
                </p>
            </div>

            <button onClick={() => handleUserClick(user)} className="flex justify-center items-center gap-2 text-sm font-bold mt-2 transform 
                transition-transform duration-300 hover:scale-105 cursor-pointer">
                View Profile
            </button>
        </div>
    );
}

export default UserCard;


