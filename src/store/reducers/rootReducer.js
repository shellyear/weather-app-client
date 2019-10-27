import * as actionTypes from '../../constants/actionTypes';


const initialState = {
    weather: {},
    err: ""
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_WEATHER_SUCCESS:
            return { ...state,
                weather: action.payload
            };

        case actionTypes.GET_WEATHER_FAILURE: {
            return { ...state,
                err: action.payload
            };
        }

        case actionTypes.CLEAR_ERROR: {
            return { ...state,
                err: ""
            };
        }

    
        default:
            return state;
    };
};

export default rootReducer;