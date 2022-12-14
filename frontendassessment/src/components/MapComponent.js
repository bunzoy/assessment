import React, { useState } from "react";
import './Style.css';
import mapboxgl from 'mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'access_token_here';

export  class Map extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = JSON.parse(window.localStorage.getItem('state')) || {
            lng: 10.4821,
            lat: 59.4152,
            zoom: 13
        };

        this.mapContainer = React.createRef();
    }

    setState(state) {
        window.localStorage.setItem('state', JSON.stringify(state));
        super.setState(state);
      }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        map.on('move', () => {
            this.setState({
              lng: map.getCenter().lng.toFixed(4),
              lat: map.getCenter().lat.toFixed(4),
              zoom: map.getZoom().toFixed(2)
            });
          });
    }

    render() {
        
        const { lng, lat, zoom } = this.state;

        return (
            <div>
                <div ref={this.mapContainer} className="map-container" />
                <div className="sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
            </div>
        );
    }


}
    
export default Map;