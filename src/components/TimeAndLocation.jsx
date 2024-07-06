// import React from 'react'

// const TimeAndLocation = ({ weather: { formattedLocalTime, name, country },
// }) => {
//     return (
//         <div className="p-4 md:p-6 lg:p-8">
//             <div className="flex items-center justify-center my-4 md:my-6 lg:my-8">
//                 <p className="text-lg md:text-xl lg:text-2xl font-extralight">
//                     {formattedLocalTime}</p>
//             </div>

//             <div className="flex items-center justify-center my-2 md:my-3 lg:my-4">
//                 <p className="text-2xl font-medium md:text-3xl lg:text-4xl">{`${name}, ${country}`}</p>
//             </div>
//         </div>
//     )
// }

// export default TimeAndLocation

import React from 'react';

const TimeAndLocation = ({ weather: { formattedLocalTime, name, country } }) => {
    return (
        <div className="p-4 md:p-6 lg:p-8">
            {/* Display only local time on small screens */}
            <div className="flex items-center justify-center my-4 md:my-6 lg:my-8">
                <p className="text-base md:text-lg lg:text-xl font-extralight">
                    {formattedLocalTime}
                </p>
            </div>

            {/* Display city and country on medium and larger screens */}
            <div className="flex items-center justify-center my-2 md:my-3 lg:my-4">
                <p className="text-lg font-medium md:text-xl lg:text-2xl">
                    {`${name}, ${country}`}
                </p>
            </div>
        </div>
    );
}

export default TimeAndLocation;
