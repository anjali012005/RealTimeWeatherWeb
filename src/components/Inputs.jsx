import { BiSearch, BiCurrentLocation } from "react-icons/bi"
import { useState, useEffect } from "react";

const Inputs = ({ setQuery, setUnits }) => {
    const [city, setCity] = useState("");


    const handleSearchClick = () => {
        if (city !== "") setQuery({ q: city });
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords
                setQuery({ lat: latitude, lon: longitude })
            })
        }
    }


    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-3/4">
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type="text" placeholder="Search by city..." className="w-full p-2 text-xl font-light text-gray-500 capitalize shadow-xl focus:outline-none placeholder:lowercase" />

                <BiSearch size={30} className="mx-2 mt-2 transition ease-out cursor-pointer hover:scale-125" onClick={handleSearchClick} />


                <BiCurrentLocation size={30} className="mt-2 transition ease-out cursor-pointer m hover:scale-125 "
                    onClick={handleLocationClick} />
            </div>

            <div className="flex flex-row items-center justify-center w-1/4">
                <button className="text-2xl font-medium transition ease-out hover:scale-125" onClick={() => setUnits("metric")}>°C</button>
                <p className="mx-1 text-xl font-medium">|</p>
                <button className="text-2xl font-medium transition ease-out hover:scale-125"
                    onClick={() => setUnits("imperial")}>°F</button>
            </div>
        </div>
    );
};

export default Inputs