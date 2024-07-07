// import React from 'react'

// const TopButtons = ({ setQuery }) => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const cities = [
//         {
//             id: 1,
//             name: 'London'
//         },
//         {
//             id: 2,
//             name: 'Sydney'
//         },
//         {
//             id: 3,
//             name: 'Tokyo'
//         },
//         {
//             id: 4,
//             name: 'Paris'
//         },
//         {
//             id: 5,
//             name: 'Toronto'
//         },
//     ]

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <div className="flex flex-wrap items-center justify-around my-6 space-y-2 md:space-y-0 md:justify-between">
//             {
//                 cities.map((city) => (
//                     <button
//                         key={city.id} className="px-3 py-2 text-sm font-medium transition ease-in rounded-md md:text-lg hover:bg-gray-700/20" onClick={() => setQuery({ q: city.name })}>{city.name}</button>
//                 ))
//             }
//         </div>
//     )
// }

// export default TopButtons

import React from 'react';

const TopButtons = ({ setQuery }) => {
    const cities = [
        { id: 1, name: 'London' },
        { id: 2, name: 'Sydney' },
        { id: 3, name: 'Tokyo' },
        { id: 4, name: 'Paris' },
        { id: 5, name: 'Toronto' },
    ];

    return (
        <div className="flex flex-row items-center justify-center my-6 ">
            {cities.map((city) => (
                <button
                    key={city.id}
                    className="px-2 py-1 text-sm font-medium transition ease-in rounded-md hover:bg-gray-700/20 md:px-3 md:py-2 md:text-lg"
                    onClick={() => setQuery({ q: city.name })}
                >
                    {city.name}
                </button>
            ))}
        </div>
    );
};

export default TopButtons;
