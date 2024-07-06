import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function capitalizerFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const App = () => {
  const [query, setQuery] = useState({ q: 'Seoni' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);


  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizerFirstLetter(cityName)}`);


    await getFormattedWeatherData({ ...query, units }).then(data => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      setWeather(data);
    });
    // console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);


  const formatBackground = () => {

    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold = units === "metric" ? 25 : 60;
    if (weather.temp <= threshold) return "from-slate-900 to-slate-700";
    return "from-yellow-400 to-orange-700";

  }


  return (
    <div className={`max-w-screen-lg px-32 py-5 mx-auto mt-4 text-white shadow-xl bg-gradient-to-br shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />
          <Forecast title="3 hour step forecast" data={weather.hourly} />
          <Forecast title="daily forecast" data={weather.daily} />
        </>
      )}

      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  );
};

export default App


