require('dotenv').config();
const key = process.env.REACT_APP_WEATHER_API_KEY;


export const WEATHER_API_URL = (city) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
};

export const WEATHER_API_URL_CURRENT = ({ latitude, longitude }) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
}

export const WEATHER_API_ICON_URL = (iconID) => {
    return `http://openweathermap.org/img/wn/${iconID}@2x.png`;
};

