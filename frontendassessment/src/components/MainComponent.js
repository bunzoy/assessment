import React, {useState} from "react";
import './HeaderComponent.css';
import ReactMapGL from "react-map-gl";



export function Main (){
    const [viewport, setViewport] = useState({
        latitud: 59.4101728,
        longitude: 10.4437392,
        width: '100vw',
        height: '100vh',
        zoom: 10
    });
    
    return (
        <div>
            <ReactMapGL {...viewport}> markers here </ReactMapGL>
        </div>
    );
}
    



export default Main;