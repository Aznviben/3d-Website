import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import ModelViewer from './Assets/ModelViewer.js'
import Model from './Assets/Model.jsx'
import './Assets/room.gltf';
import './Assets/room.glb';
function App() {
  return (
    <div className="App">
      <Model />
    </div>
  );
}
/*
//Scene, Camera and Renderer Settings
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGL1Renderer({
  canvas:document.querySelector('#bg'),
});
//Renderer Settings
renderer.setPixelRatio( window.devicePixelRatio );

renderer.setSize(window.innerWidth, window.innerHeight );

camera.position.setZ(30);

renderer.render( scene, camera);



//Adding Light
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

//Adding Model


renderer.render( scene, camera );
//Camera Control Functions
const controls = new OrbitControls(camera, renderer.domElement);
function animate(){
  requestAnimationFrame(animate);
	controls.update();
  
  renderer.render( scene, camera );
}
animate()

*/


export default App;
