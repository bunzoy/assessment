import React from "react";
import './HeaderComponent.css';
import mapboxgl from 'mapbox-gl'; 


mapboxgl.accessToken = 'pk.eyJ1IjoiYnVuem95IiwiYSI6ImNsYXM5YWxmazAydTEzdGtqbm9ndjNiMWsifQ.esiqirmwHhQrHTxTIcYoSg';


export function Home() {
    return(
        <div>
            <h1>HomeComponent</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis risus vitae erat ultricies hendrerit. Vivamus consequat velit lectus, a sagittis arcu luctus ac. Nam a ante commodo, vehicula leo vel, dignissim enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam porttitor ante ligula, a venenatis risus tristique sit amet. Donec nec blandit nibh, vel viverra ligula. In elementum posuere tortor quis placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse dapibus tellus id arcu auctor venenatis. Praesent porttitor pulvinar nibh feugiat imperdiet. Vivamus luctus maximus ex at vestibulum.
Nullam mi quam, fringilla sit amet bibendum at, cursus nec velit. Vestibulum eget tincidunt sapien, a ultricies sem. Morbi ligula nulla, molestie at suscipit sed, aliquam at odio. Donec laoreet viverra risus, et convallis sem volutpat quis. Ut eget condimentum nisi, iaculis bibendum lectus. Nulla facilisi. In eu felis in odio consectetur cursus et vitae ipsum. Pellentesque nec ipsum quis lorem consectetur faucibus. Sed mollis, est in laoreet tincidunt, ante ante maximus leo, in condimentum leo libero ut enim. Sed hendrerit turpis sit amet augue eleifend, vel malesuada leo semper. Proin et ornare purus, vitae sodales odio. Proin id mauris sed tortor cursus condimentum vitae eu felis.</p>
        </div>
    )

}

export default Home;