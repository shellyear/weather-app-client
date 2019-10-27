import React, { useState } from 'react';
import { WEATHER_API_ICON_URL } from '../constants/api';
import { WeatherDataUI, H3, SpanUI, RowUI, RowBit, WeatherIcon } from '../ui/styled';
import moment from 'moment';


const WeatherData = ({ data: { weather, main, sys, name, dt }, }) => {
    const { icon, description } = weather[0];
    const [iconURL] = useState(() => WEATHER_API_ICON_URL(icon));


    return (
        <WeatherDataUI>
            <H3>{name}, {sys.country}</H3>
            <SpanUI>{moment().calendar(dt)}</SpanUI>
            <RowUI>
                <RowBit><WeatherIcon src={iconURL} alt="weather-icon" title={description}/></RowBit>
                <RowBit>{Math.floor(main.temp)}°C </RowBit>
            </RowUI>
            <RowUI>
                <RowBit> <WeatherIcon src='/pressure-gauge.svg' alt='pressure' title='pressure'/> </RowBit>
                <RowBit>{main.pressure} hPa</RowBit>
            </RowUI>
            <RowUI>
                <RowBit><WeatherIcon src='/drop.svg' alt='humidity' title='humidity'></WeatherIcon></RowBit>
                <RowBit>{main.humidity}%</RowBit>
            </RowUI>
        </WeatherDataUI>
    );
};


export default WeatherData;