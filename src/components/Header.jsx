import React, { useState } from 'react';
import { HeaderUI, Logo, FormUI, InputUI, ButtonUI, Icon, ErrorUI } from '../ui/styled';
import { getWeatherBySearch, getWeatherByLocation } from '../store/actions/weather';
import { connect } from 'react-redux';


const Header = ({ onGetWeatherBySearch, onGetWeatherByLocation, err }) => {
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onGetWeatherBySearch(search);
    };

    const sendCurrentPosition = () => {
        onGetWeatherByLocation();
    };

    return (
        <HeaderUI>
            <Logo src='/weather.svg' />
            <FormUI onSubmit={handleSubmit}>
                <InputUI 
                    placeholder='Enter place...'
                    onChange={e => setSearch(e.target.value)}
                />
                {err && <ErrorUI>place not found</ErrorUI>}
            </FormUI>
            <ButtonUI title="send my location"  onClick={() => sendCurrentPosition()}>
                <Icon src='/location.svg'/>        
            </ButtonUI>    
        </HeaderUI>
    );
};


const mapStateToProps = (state) => {
    return {
        err: state.err
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetWeatherBySearch: (search) => dispatch(getWeatherBySearch(search)),
        onGetWeatherByLocation: () => dispatch(getWeatherByLocation())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);