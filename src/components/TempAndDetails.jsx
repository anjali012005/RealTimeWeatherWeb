import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const TempAndDetails = ({ weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
}, units, }) => {
    const verticalDetails = [
        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Real Feel",
            value: `${feels_like.toFixed()}°`,
        },
        {
            id: 2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: `${humidity.toFixed()}%`,
        },
        {
            id: 3,
            Icon: FiWind,
            title: "Wind",
            value: `${speed.toFixed()} ${units === "metric" ? "km / h" : "m / s"}`,
        }
    ]

    const horizontalDetails = [
        {
            id: 1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: sunrise,
        },
        {
            id: 2,
            Icon: GiSunset,
            title: "Sunset",
            value: sunset,
        },
        {
            id: 3,
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: `${temp_max.toFixed()}°`
        },
        {
            id: 4,
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: `${temp_min.toFixed()}°`
        }
    ];
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>{details}</p>
            </div>

            <div className="flex flex-col items-center justify-between py-3 space-y-6 md:flex-row md:space-y-0">
                <img src={icon} alt="weather icon" className="w-20 md:w-24"></img>

                <p className="text-5xl">{`${temp.toFixed()}°`}</p>

                <div className="flex flex-col items-start space-y-3">

                    {
                        verticalDetails.map(({ id, Icon, title, value }) => (
                            <div key={id} className="flex items-center justify-center text-sm font-light">
                                <Icon size={18} className="mr-1" /> {`${title}:`}
                                <span className="ml-1 font-medium">{value}</span>
                            </div>
                        ))
                    }
                </div>
            </div>



            <div className="flex flex-col items-center justify-center py-3 space-y-6 text-sm md:flex-row md:space-y-0 md:space-x-10">
                {
                    horizontalDetails.map(({ id, Icon, title, value }) => (
                        <div key={id} className="flex flex-row items-center">
                            <Icon size={30}></Icon>
                            <p className="ml-1 font-light">
                                {`${title}:`}
                                <span className="ml-1 font-medium">{value}</span>
                            </p>
                        </div>
                    ))
                }
            </div>


        </div>
    )
};
export default TempAndDetails;