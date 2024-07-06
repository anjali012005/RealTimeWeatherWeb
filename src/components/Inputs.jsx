// import { BiSearch, BiCurrentLocation } from "react-icons/bi"
// import { useState } from "react";

// const Inputs = ({ setQuery, setUnits }) => {
//     const [city, setCity] = useState("");


//     const handleSearchClick = () => {
//         if (city !== "") setQuery({ q: city });
//     };

//     const handleLocationClick = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 const { latitude, longitude } = position.coords
//                 setQuery({ lat: latitude, lon: longitude })
//             })
//         }
//     }

//     // flex flex-row justify-center my-6
//     // flex flex-row w-3/4
//     return (
//         <div className="flex flex-col justify-center my-6 md:flex-row">
//             <div className="flex flex-row w-full mb-4 md:w-3/4 md:mb-0">
//                 <input
//                     value={city}
//                     onChange={(e) => setCity(e.currentTarget.value)}
//                     type="text" placeholder="Search by city..." className="w-full p-2 text-xl font-light text-gray-500 capitalize shadow-xl focus:outline-none placeholder:lowercase" />

//                 <BiSearch size={30} className="mx-2 mt-2 transition ease-out cursor-pointer hover:scale-125" onClick={handleSearchClick} />


//                 <BiCurrentLocation size={30} className="mt-2 transition ease-out cursor-pointer m hover:scale-125 "
//                     onClick={handleLocationClick} />
//             </div>

//             <div className="flex flex-row items-center justify-center w-full md:w-1/4">
//                 <button className="text-lg font-medium transition ease-out md:text-2xl hover:scale-125" onClick={() => setUnits("metric")}>°C</button>
//                 <p className="mx-1 text-lg font-medium md:text-xl">|</p>
//                 <button className="text-lg font-medium transition ease-out md:text-2xl hover:scale-125"
//                     onClick={() => setUnits("imperial")}>°F</button>
//             </div>
//         </div>
//     );
// };

// export default Inputs

import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";

const Inputs = ({ setQuery, setUnits }) => {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (city !== "") {
            setQuery({ q: city });
            setCity(""); // Clear input after search
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setQuery({ lat: latitude, lon: longitude });
            });
        }
    };

    return (
        <div className="flex flex-col justify-center my-6 md:flex-row md:space-x-4">
            <div className="flex flex-row items-center w-full mb-4 md:w-3/4 md:mb-0">
                {/* Container for input and icons */}
                <div className="flex items-center w-full space-x-2">
                    {/* Input field */}
                    <input
                        value={city}
                        onChange={(e) => setCity(e.currentTarget.value)}
                        onKeyDown={handleKeyDown}
                        type="text"
                        placeholder="Search by city..."
                        className="flex-grow p-3 text-xl font-light text-gray-700 capitalize transition duration-300 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:lowercase md:text-base md:p-2 "
                    />
                    {/* Search icon */}
                    <BiSearch
                        size={24} // Adjust size for better fit
                        className="text-blue-500 transition-transform duration-300 ease-out cursor-pointer hover:scale-125 md:hidden"
                        onClick={handleSearch}
                    />
                    {/* Location icon */}
                    <BiCurrentLocation
                        size={24} // Adjust size for better fit
                        className="text-blue-500 transition-transform duration-300 ease-out cursor-pointer md:hidden"
                        onClick={handleLocationClick}
                    />
                </div>
            </div>

            <div className="flex flex-row items-center justify-center w-full space-x-2 md:w-1/4">
                <button
                    className="text-lg font-medium transition-transform duration-300 ease-out md:text-2xl hover:scale-125"
                    onClick={() => setUnits("metric")}
                >
                    °C
                </button>
                <p className="text-lg font-medium md:text-xl">|</p>
                <button
                    className="text-lg font-medium transition-transform duration-300 ease-out md:text-2xl hover:scale-125"
                    onClick={() => setUnits("imperial")}
                >
                    °F
                </button>
            </div>
        </div>
    );
};

export default Inputs;
