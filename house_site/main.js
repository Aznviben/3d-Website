import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { InteractionManager } from "three.interactive";
import * as TWEEN from "@tweenjs/tween.js";
//Scene, Camera, raycaster and Renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000 )

const renderer = new THREE.WebGL1Renderer({
  canvas:document.querySelector('#bg'),
});



renderer.setPixelRatio( window.devicePixelRatio );

renderer.setSize(window.innerWidth, window.innerHeight );

const interactionManager = new InteractionManager(
  renderer,
  camera,
  renderer.domElement
);

camera.position.set(45,5,0);

renderer.render( scene, camera);

//Add Model


const loader = new GLTFLoader();
loader.load( 'House.glb', function ( gltf ) {

	scene.add( gltf.scene );
  gltf.scene.position.y = -10;
  gltf.scene.name = 'sun';

}, undefined, function ( error ) {

	console.error( error );

} );

// Art Sign Model
      
 
   
loader.load( 'ArtMusicSigns.glb', function ( gltf1 ) {
  
	scene.add( gltf1.scene );
  gltf1.scene.position.y = -10;
  gltf1.scene.name = 'ArtSign';
  gltf1.scene.addEventListener("click", (event) => {
    event.stopPropagation();
 const Sign = scene.getObjectByName('ArtSign');
 const House = scene.getObjectByName('sun');
 const HomeSign = scene.getObjectByName('HomeSign');
 const CompSign = scene.getObjectByName('ComputerSign');
      Sign.position.z = - 20;
      House.position.z = -20;
      HomeSign.position.z = -20;
      CompSign.position.z = -20;
      renderer.render(camera,scene);

  });
  interactionManager.add(gltf1.scene);


}, undefined, function ( error ) {

	console.error( error );
} );

//Computer Sign
loader.load( 'ComputerSigns.glb', function ( gltf3 ) {
  
	scene.add( gltf3.scene );
  gltf3.scene.position.y = -10;
  gltf3.scene.name = 'ComputerSign';
  gltf3.scene.addEventListener("click", (event) => {
    event.stopPropagation();
 const Sign = scene.getObjectByName('ArtSign');
 const House = scene.getObjectByName('sun');
 const HomeSign = scene.getObjectByName('HomeSign');
 const CompSign = scene.getObjectByName('ComputerSign');
      Sign.position.z = 20;
      House.position.z = 20;
      HomeSign.position.z = 20;
      CompSign.position.z = 20;
      renderer.render(camera,scene)
 
   

  });
  interactionManager.add(gltf3.scene);


}, undefined, function ( error ) {

	console.error( error );
} );

// Art Sign Model
      
const material = new THREE.MeshBasicMaterial();
   
loader.load( 'HomeSigns.glb', function ( gltf2 ) {
  
	scene.add( gltf2.scene );
  gltf2.scene.position.y = -10;
  gltf2.scene.name = 'HomeSign';
  gltf2.scene.addEventListener("click", (event) => {
    event.stopPropagation();
 const ArtSign = scene.getObjectByName('ArtSign');
 const House = scene.getObjectByName('sun');
 const HomeSign = scene.getObjectByName('HomeSign');
 const CompSign = scene.getObjectByName('ComputerSign');

      ArtSign.position.z =  0;
      House.position.z = 0;
      HomeSign.position.z = 0;
      CompSign.position.z = 0;
      renderer.render(camera,scene)


  });

  interactionManager.add(gltf2.scene);


}, undefined, function ( error ) {

	console.error( error );
} );


/*
//testing a feature
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );

const material = new THREE.MeshStandardMaterial({color: 0xFF6347} );

const torus = new THREE.Mesh( geometry, material );

scene.add(torus);


//Animation and clicking feature

torus.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log(`torus was clicked`);
  const cube = event.target;
  const coords = { x: camera.position.x, y: camera.position.y };
  new TWEEN.Tween(coords)
  .to({ x: 10, y: 2 , z:3})
  .onUpdate(() =>
    camera.position.set(coords.x, coords.y, camera.position.z)
  )
  .start();
});
interactionManager.add(torus);
*/


//Light


const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(15,15,1);
scene.add(pointLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);

const pointLight1 = new THREE.PointLight(0xffffff);
pointLight1.position.set(10,15,25);
scene.add(pointLight1);

const lightHelper1 = new THREE.PointLightHelper(pointLight1);
scene.add(lightHelper1);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const lightHelper2 = new THREE.PointLightHelper(ambientLight);
scene.add(lightHelper2);
ambientLight.position.set(15,15,5);


const light = new THREE.Light(0xFFFFFF,300000);
scene.add(light);

//Add Background
  const spaceTexture = new THREE.TextureLoader().load('./Assets/Brooklyn.jpg');
  scene.background = spaceTexture;

//Raycastingmodels

//Animate
const controls = new OrbitControls(camera, renderer.domElement);
function animate(time){  
  controls.update();

  interactionManager.update();
  TWEEN.update(time);

  renderer.render( scene, camera );
  window.requestAnimationFrame(animate);
}

animate()