import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//Scene, Camera, and Renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGL1Renderer({
  canvas:document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );

renderer.setSize(window.innerWidth, window.innerHeight );

camera.position.setZ(20);
camera.position.setY(20);
camera.position.setX(20);

renderer.render( scene, camera);
//Add Model

const loader = new GLTFLoader();

loader.load( 'House.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

//Added Window



//Light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10,5,5);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const light = new THREE.Light(0xFFFFFF,30000);
scene.add(light);

//Star Feature
function addStar(){
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial( { color : 0xffffff});
    const star = new THREE.Mesh( geometry, material );
  
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100) );
  
    star.position.set(x, y, z);
    scene.add(star);
  
  }
  
  Array(200).fill().forEach(addStar);
  
  const spaceTexture = new THREE.TextureLoader().load('Space.jpg');
  scene.background = spaceTexture;



//Animate
const controls = new OrbitControls(camera, renderer.domElement);
function animate(){
  requestAnimationFrame(animate);
	controls.update();

  renderer.render( scene, camera );
}
animate()