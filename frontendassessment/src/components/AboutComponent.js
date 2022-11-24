import React from "react";
import './Style.css';


export function About() {
    return(
        <div className="AboutBody">

            <h2>Front-end skills assessment</h2>
            <h3>Introduction</h3>
            <p>This is a skill-based assessment for front-end development. The following Test description will have a set of requirements that must be met.
However, the implementation of these requirements is open to interpretation. This means that you can solve this test however you want</p>
            
            <h3>Test description</h3>
            <p>You have been commissioned to build a web app for a customer. They want to be able to manage virtual geofences on a map. This
includes adding and removing these fences. They also want to be able to label each fence with a name.
</p>
            <h4>Technology requirements</h4>
            <p>The app is built as a SPA (Single Page Application). You are allowed to use any front-end framework of your choice. However, it would be
preferable that either React, Angular, or Vue is used.</p>
            <p>Git is used as the version control system.</p>
            <p>GitHub is used to host the codebase.</p>
            <p>(optional) Docker is used to containerizing the application.</p>

            <h4>Technology requirements</h4>
            <p>Should integrate with an already existing map solution (Mapbox?).</p>
            <p>Should be able to add a virtual geofence on the map.</p>
            <p>Should be able to label the virtual geofence.</p>
            <p>Should be able to remove a virtual geofence from the map.</p>
            <p>Should persist the state between page refreshes.</p>
            <p>(optional) Should be mobile-friendly.</p>
            
            <h4>Out of scope</h4>
            <p>You don’t need any authentication scheme.</p>
            <p>You don’t need to host the application on a server.</p>
            <p>You don’t need a back-end solution for persistence.</p>
        </div>

    )
}

export default About;