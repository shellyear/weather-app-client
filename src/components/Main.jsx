import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { MainUI } from '../ui/styled';
import { connect } from 'react-redux';
import { changeMapOptions } from '../services/googleMapsOptions';
import { clearError } from '../store/actions/weather'; 
import createMapOptions from '../services/googleMapsOptions';
import WeatherData from './WeatherData';
import * as $ from 'lodash';


const Main = ({ data, onClearError }) => {
    const options = changeMapOptions(data);
    const { center, zoom } = options;

    useEffect(() => {
        document.title = 'weather forecast';

        return () => {
            onClearError();
        };
    });

    return (
        <MainUI>
            <GoogleMapReact
                bootstrapURLKeys={{
                    language: 'en',
                    region: 'en'
                }}
                yesIWantToUseGoogleMapApiInternals={true} 
                defaultCenter={center}
                center={center}
                defaultZoom={zoom}
                zoom={zoom}
                options={createMapOptions}
            >
            </GoogleMapReact>
            { !$.isEmpty(data) && <WeatherData data={data} /> } 
        </MainUI>
    );
};


const mapStateToProps = (state) => {
    return {
        data: state.weather
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClearError: () => dispatch(clearError())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
