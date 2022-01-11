import * as THREE from 'https://threejs.org/build/three.module.js';
import { createSea } from './createSea.js';
import { createSky } from './createSky.js';

const colors = {
	red: 0xf25346,
	white: 0xd8d0d1,
	brown: 0x59332e,
	pink: 0xf5986e,
	brownDark: 0x23190f,
	blue: 0x68c3c0,
};

window.addEventListener('DOMContentLoaded', init);
const canvas = document.getElementById('world');

let renderer, scene, camera;

const windowSizes = {
	HEIGHT: window.innerHeight,
	WIDTH: window.innerWidth,
};

const cameraOptions = {
	aspectRatio: windowSizes.WIDTH / windowSizes.HEIGHT,
	fieldOfView: 60,
	nearPlane: 1,
	farPlane: 10000,
	position: {
		x: 0,
		y: 100,
		z: 200,
	},
};

function init() {
	renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setSize(windowSizes.WIDTH, windowSizes.HEIGHT);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.shadowMap.enabled = true;
	canvas.appendChild(renderer.domElement);

	scene = new THREE.Scene();
	scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);

	camera = new THREE.PerspectiveCamera(
		cameraOptions.fieldOfView,
		cameraOptions.aspectRatio,
		cameraOptions.nearPlane,
		cameraOptions.farPlane
	);

	camera.position.set(cameraOptions.position.x, cameraOptions.position.y, cameraOptions.position.z);

	const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.9);
	const shadowLight = new THREE.DirectionalLight(0xffffff, 0.9);
	shadowLight.position.set(150, 350, 350);
	shadowLight.castShadow = true;

	scene.add(hemisphereLight);
	scene.add(shadowLight);

	const sea = createSea();
	sea.position.y = -600;
	scene.add(sea);

	const sky = createSky(15);
	sky.position.y = -600;
	scene.add(sky);

	animate();
}

function animate() {
	requestAnimationFrame(animate);

	renderer.render(scene, camera);
}
