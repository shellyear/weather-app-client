import styled from 'styled-components';


export const HeaderUI = styled.header`
    display: flex;
    z-index: 1; 
    justify-content: space-between;
    align-items: center;
    position: fixed;
    border-radius: 1em;
    width: 30em;
    padding: 2vh;
    top: 3%;
    left: 3%;
    background-color: #f5f3f2;

    @media (max-width: 525px) {
        width: 20em;
    }
`;

export const ErrorUI = styled.div`
    position: absolute;
    font-size: 0.7em;
    color: #eb4034;
    width: inherit;
    backround: #f5f3f2;
    bottom: 100%;
    left: 30%;
`;

export const Logo = styled.img`
    width: 8vh;
    height: 8vh;

    @media (max-width: 525px) {
        height: 7vh;
        width: 7vh;
    }
`;

export const FormUI = styled.form`
    position: relative;
`;

export const InputUI = styled.input`
    font: Arial;
    font-size: 0.9em;
    box-sizing: border-box; 
    padding: 2vh 7vh;
    border: 1px solid gray;
    border-radius: 3em;
    box-shadow: inset 0.1em 0.1em 0.1em 0.1em #ccc;
    background: url(/search.svg) no-repeat scroll 5% 50%;
    background-size: 8%;
    background-color: #f7faf8;
    outline: none;

    
    @media (max-width: 525px) {
        padding: 1vh 4vh;
    }
`;

export const ButtonUI = styled.div`
    cursor: pointer;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 0.8em 1em;
    width: 9vh;
    heigth: 9vh;
    background-color: #428DFF;
    background-image: url(/location.svg) no-repeat 50% 50%;

    &:hover {
        background-color: #07b0db;
    }

    
    @media (max-width: 525px) {
        height: 7vh;
        width: 7vh;
    }

`;

export const Icon = styled.img`
    width: 100%;
    height: 100%;
`;

export const MainUI = styled.div`
    height: 100vh;
    width: 100%;
`;


export const WeatherDataUI = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    background-color: #f5f3f2;
    width: 25em;
    position: fixed;
    top: 20%;
    left: 3%;
    border-radius: 1em;

    @media (max-width: 525px) {       
        width: 20em;
    }
`;

export const H3 = styled.h3`
    text-align: center;
`;

export const SpanUI = styled.span`
    text-align: center;
    color: #808080;   
`;

export const RowUI = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    position: relative;
    width: inherit; 
    padding: 1em 3em;
`;

export const RowBit = styled.div`
    box-sizing: border-box;
    padding: 0 1em;
    font-size: 1em;
    font-weight: bold;
    color: black;
    text-align: right;
`;

export const WeatherIcon = styled.img`
    width: 9vh;
    height: 9vh;
`;