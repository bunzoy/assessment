import React from "react";
import './NavComponent.css';

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export function Main (){

    const { isLoaded } = useLoadScript({ 
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, 
    });

    if (!isLoaded) return <div>Loading...</div>
    
    return(
        <Map />

    )
}
    
function Map() {
    return 
        <GoogleMap 
            zoom={10} 
            center={{ lat: 59.4153337, lng: 10.4822852 }} 
            mapContainerClassName="map-container"
        >
        </GoogleMap>;
    }





export default Main;