import React, { useEffect } from 'react';
import * as THREE from 'three';
function ThreeApp(props) {
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize( window.innerWidth, window.innerHeight );

    return(
    <>{renderer.domElement}</>
    )
}

export default ThreeApp;