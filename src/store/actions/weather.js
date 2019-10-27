import axios from 'axios';
import * as actionTypes from '../../constants/actionTypes';
import { WEATHER_API_URL, WEATHER_API_URL_CURRENT } from '../../constants/api';

export const clearError = () => {
    return (dispatch) => {
        return dispatch({ type: actionTypes.CLEAR_ERROR });
    };
};

export const getWeatherBySearch = (search) => {
    return (dispatch) => {
        dispatch(clearError());

        axios.get(WEATHER_API_URL(search))
        .then(({ data }) => {
            return dispatch({
                type: actionTypes.GET_WEATHER_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            const { response: { data: { message }}} = err;
            dispatch({
                type: actionTypes.GET_WEATHER_FAILURE,
                payload: message
            });
        });
    };
};

export const getWeatherByLocation = () => {
    return (dispatch) => {
        dispatch(clearError());

        navigator.geolocation.getCurrentPosition(({ coords, timestamp }) => {
            axios.get(WEATHER_API_URL_CURRENT(coords))
            .then(({ data }) => {
                return dispatch({
                    type: actionTypes.GET_WEATHER_SUCCESS,
                    payload: data
                });
            })
            .catch(err => {
                const { response: { data: { message }}} = err;
                dispatch({
                    type: actionTypes.GET_WEATHER_FAILURE,
                    payload: message
                });
            });
        });
    };
};
