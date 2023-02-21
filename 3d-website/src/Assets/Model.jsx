import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import  './room.glb'
function Model() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const scene = new THREE.Scene();

    const loader = new GLTFLoader();
    loader.load('./room.glb', function (gltf) {
      const model = gltf.scene;
      scene.add(model);
    });
    renderer.render( scene, camera );

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5,5,5);
    scene.add(pointLight);
    
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);
    
    const lightHelper = new THREE.PointLightHelper(pointLight);
    scene.add(lightHelper);
    
    const gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper);
    
    renderer.render( scene, camera );

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const controls = new OrbitControls(camera, renderer.domElement);
    function animate(){
      requestAnimationFrame(animate);
      controls.update();
    
      renderer.render( scene, camera );
    }
    animate()
  }, []);

  return <canvas ref={canvasRef} />;
}

export default Model;
