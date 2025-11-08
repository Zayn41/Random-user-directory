import React, { useState, useEffect } from 'react';
import { fetchData } from '../api/randomUsers';
import UserCard from '../components/UserCard';
import UserModel from '../components/UserModel';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUser , setSelectedUser] = useState(null);
    const [loader, setLoader] = useState(false);

    const getUser = async () => {
        try {
            setLoader(true);

            const data = await fetchData(12);
            if(data && data.results) {
                setUsers(data.results || []);
                setFilteredUsers(data.results || []);
            }

            setLoader(false);
        } catch(err) {
            console.error("Error in fetching data", err);
            setLoader(false);
        }
    }

    useEffect(() => {
        getUser()
    }, []);

    const handleSearch = (evt) => {
        const value = evt.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = users.filter((user) => {
            const fullname = `${user.name.first} ${user.name.last}`.toLowerCase();
            const country = user.location.country.toLowerCase();
            return fullname.includes(value) || country.includes(value);
        });

        setFilteredUsers(filtered);

    };

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleCloseModel = () => {
        setSelectedUser(null);
    };

    return (
        <main className="flex-grow pt-[90px] px-12 mt-12">
            <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-lg 
                shadow-2xl border-b border-gray-800">
                <div className="header-box flex flex-col gap-5 sm:gap-0 sm:flex-row sm:justify-between items-center px-6 py-5 lg:px-12">
                    <div className="flex flex-col justify-center gap-1">
                        <h2 className="font-bold text-2xl bg-gradient-to-r from-white to-gray-300
                            bg-clip-text text-transparent">
                            Random User directory
                        </h2>
                        <p className="font-bold text-sm">
                            Discover random people from around the world 🌍
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-3 sm:gap-4">
                        <div className="search-input relative flex-1">
                            <input onChange={handleSearch}  type="text" className="bg-gray-900 px-4 py-2.5 text-gray-200 rounded-2xl 
                            border-2 border-gray-800 font-semibold focus:outline-none focus:border-gray-700 
                            transition-all duration-300"
                            placeholder="Search name or country" value={searchTerm} />
                        </div>

                        <button onClick={getUser} className="flex justify-center items-center gap-2 text-white text-sm font-bold
                            cursor-pointer bg-gray-800 px-5 py-2.5 rounded-full border border-gray-700 transition-transform
                            hover:bg-gray-900 hover:scale-105 active:scale-95 duration-300">
                            Refresh
                        </button>
                    </div>
                </div>
            </header>

            <section className="relative pt-18 sm:pt-0">
                {loader && (
                    <div className="flex flex-col justify-center items-center min-h-[50vh] sm:min-h-[70vh] space-y-3">
                        <div className="w-8 h-8 border-4 border-gray-800 border-t-gray-300 rounded-full animate-spin"></div>
                        <p className="text-gray-300 text-sm sm:text-lg font-semibold">
                            Finding awesome people around the world 🌍
                        </p>
                    </div>
                )}

                {!loader && filteredUsers.length > 0 && (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-10">
                        {filteredUsers.map((user) => {
                            return <UserCard key={user.login.uuid} user={user} handleUserClick={handleUserClick} />
                        })}
                    </div>
                )}

                {!loader && users.length > 0 && filteredUsers.length === 0 && (
                    <p className="text-center font-bold text-gray-400 mt-24 text-lg">
                        No matching users found 😕
                    </p>
                )}

                {!loader && users.length === 0 && (
                    <p className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r 
                        from-gray-300 to-gray-500 mt-24">
                        No users found.
                    </p>
                )}

                {selectedUser && (
                    <UserModel user={selectedUser} handleCloseModel={handleCloseModel} />
                )}
            </section>
        </main>
    );
}

export default Home
// min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white w-full