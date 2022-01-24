import * as THREE from 'https://threejs.org/build/three.module.js';
import { createCloud } from './createCloud.js';
import { createObstacle } from './createObstacles.js';

export function createSky(numberOfClouds) {
	const sky = new THREE.Object3D();
	const stepAngle = (Math.PI * 2) / numberOfClouds;

	for (let i = 0; i < numberOfClouds; i++) {
		const cloud = new createCloud(Math.floor(Math.random() * 10));
		const angle = stepAngle * i;
		const cloudHeight = 750 + Math.random() * 200;

		cloud.position.y = Math.sin(angle) * cloudHeight;
		cloud.position.x = Math.cos(angle) * cloudHeight;
		cloud.rotation.z = angle + Math.PI / 2;
		cloud.position.z = -400 - Math.random() * 400;
		const scale = 1 + Math.random() * 5;
		cloud.scale.set(scale, scale, scale);

		sky.add(cloud);
	}

	const obstacle = createObstacle();
	obstacle.position.y = Math.sin();
	obstacle.position.x = Math.cos();

	sky.add(obstacle);


	return sky;
}
