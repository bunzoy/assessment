import React, { useState } from "react";
import './Style.css';
import mapboxgl from 'mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnVuem95IiwiYSI6ImNsYXM5YWxmazAydTEzdGtqbm9ndjNiMWsifQ.esiqirmwHhQrHTxTIcYoSg';

export  class Map extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            lng: 10.4821,
            lat: 59.4152,
            zoom: 13
        };

        this.mapContainer = React.createRef();
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