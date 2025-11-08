import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800 py-8 w-full">
            <div className="flex flex-col sm:flex-row justify-between gap-3 px-8 text-center sm:text-left">
                <div className="text-gray-400 text-sm font-bold">
                    © {new Date().getFullYear()} {" "} Random User Directory. All rights reserved.
                </div>

                <div className="text-sm font-bold text-gray-400">
                    Data provided by {" "}
                    <a href="https://randomuser.me" target="_blank" rel="noopener noreferrer" 
                        className="text-gray-300 hover:text-white transition-colors duration-300">
                        RandomUser API
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer



