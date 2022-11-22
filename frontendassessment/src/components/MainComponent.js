import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import './HeaderComponent.css';
import mapboxgl from 'mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnVuem95IiwiYSI6ImNsYXM5YWxmazAydTEzdGtqbm9ndjNiMWsifQ.esiqirmwHhQrHTxTIcYoSg';


export  class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            lng: 10.4437392,
            lat: 59.4101728,
            zoom: 10
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
        }

        render() {
            return (
                <div>
                <div ref={this.mapContainer} className="map-container" />
                </div>
            );
        }
}
    

export default Main;