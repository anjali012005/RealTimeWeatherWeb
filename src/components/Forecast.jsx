import React from 'react'

const Forecast = ({ title, data }) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-start">
                <p className="mt-6 text-lg font-medium uppercase sm:text-xl">{title}</p>
            </div>
            <hr className="my-1" />

            {/* //flex items-center justify-between */}
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">{data.map((d, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                    <p className="text-lg font-light sm:text-xl">{d.title} </p>
                    <img src={d.icon} alt="weather icon" className="w-12 my-1" />
                    <p className="text-base font-medium sm:text-lg">{`${d.temp.toFixed()}°`}</p>
                </div>
            ))}

            </div>
        </div>
    )
}

export default Forecast