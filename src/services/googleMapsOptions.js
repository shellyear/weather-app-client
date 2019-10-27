import * as $ from 'lodash';

export default function createMapOptions(maps) {   
    return {
      zoomControlOptions: {
        position: maps.ControlPosition,
        style: maps.ZoomControlStyle
      },
      fullscreenControl: false,
      mapTypeControl: true
    };
};

export const changeMapOptions = (data) => {
    if (data !== "undefined" && !$.isEmpty(data)) {  
        const { lon, lat } = data.coord;
        return {
          center: {
            lat: lat,
            lng: lon 
          },
          zoom: 6
        };
    } else {
        return {
          center: {
            lat: 19.95,
            lng: 30.33 
          },
          zoom: 5
        };
    };
};