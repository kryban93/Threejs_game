import * as THREE from 'https://threejs.org/build/three.module.js';
import { createSea } from './createSea.js';
import { createSky } from './createSky.js';
import { createAirplane } from './createAirplane.js';
import { normalize } from './normalize.js';

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

let renderer,
	scene,
	camera,
	sky,
	sea,
	airplane,
	pilot,
	angleHairs = 0;

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

let mousePosition = {
	x: 0,
	y: 0,
};

function init() {
	renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setSize(windowSizes.WIDTH, windowSizes.HEIGHT);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.shadowMap.enabled = true;
	canvas.appendChild(renderer.domElement);

	scene = new THREE.Scene();
	scene.fog = new THREE.Fog(0xf7d9aa, 100, 1100);

	camera = new THREE.PerspectiveCamera(
		cameraOptions.fieldOfView,
		cameraOptions.aspectRatio,
		cameraOptions.nearPlane,
		cameraOptions.farPlane
	);

	camera.position.set(cameraOptions.position.x, cameraOptions.position.y, cameraOptions.position.z);

	const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.9);
	const ambientLight = new THREE.AmbientLight('#dbaf4f', 0.1);
	const shadowLight = new THREE.DirectionalLight(0xffffff, 0.9);
	shadowLight.position.set(150, 350, 350);
	shadowLight.castShadow = true;

	scene.add(ambientLight);
	scene.add(hemisphereLight);
	scene.add(shadowLight);

	sea = createSea();
	sea.position.y = -600;
	scene.add(sea);

	sky = createSky(15);
	sky.position.y = -600;
	scene.add(sky);

	airplane = createAirplane();
	airplane.position.y = 100;
	airplane.scale.set(0.3, 0.3, 0.3);
	scene.add(airplane);

	animate();

	window.addEventListener('mousemove', handleMouseMove);
	window.addEventListener('resize', handleWindowResize);
}

function handleWindowResize() {
	windowSizes.HEIGHT = window.innerHeight;
	windowSizes.WIDTH = window.innerWidth;
	renderer.setSize(windowSizes.WIDTH, windowSizes.HEIGHT);
	camera.aspectRatio = windowSizes.WIDTH / windowSizes.HEIGHT;
	camera.updateProjectionMatrix();
}

function animate() {
	requestAnimationFrame(animate);

	sky.rotation.z += 0.001;
	sky.children.forEach((cloud) => {
		cloud.children.forEach((box) => {
			box.rotation.z += 0.005;
		});
	});
	sea.rotation.z += 0.005;
	airplane.children.forEach((element) => {
		if (element.name === 'propeller') {
			element.rotation.x += 0.3;
		}
	});

	updatePlanePosition();
	updateHairsPosition();
	renderer.render(scene, camera);
}

function handleMouseMove(event) {
	const normalizedX = -1 + (event.clientX / windowSizes.WIDTH) * 2;
	const normalizedY = 1 - (event.clientY / windowSizes.HEIGHT) * 2;

	mousePosition = {
		x: normalizedX,
		y: normalizedY,
	};
}

function updatePlanePosition() {
	const targetX = normalize(mousePosition.x, -1, 1, -100, 100);
	const targetY = normalize(mousePosition.y, -1, 1, 25, 175);

	airplane.position.set(targetX, targetY, 0);
}

function updateHairsPosition() {
	let hairs;

	airplane.children.forEach((object) => {
		if (object.name === 'pilot') {
			object.children.forEach((pilotElement) => {
				if (pilotElement.name === 'hairs') {
					pilotElement.children.forEach((hairsElement) => {
						if (hairsElement.name === 'hairsTop') {
							hairs = hairsElement;
						}
					});
				}
			});
		}
	});
	const hairsTop = hairs.children;
	const hairsTopLength = hairsTop.length;
	for (let i = 0; i < hairsTopLength; i++) {
		const hair = hairsTop[i];
		hair.scale.y = 0.75 + Math.cos(angleHairs + i / 3) * 0.25;
	}
	angleHairs += 0.16;
}
