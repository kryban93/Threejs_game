import * as THREE from 'https://threejs.org/build/three.module.js';

export function createSea() {
	const geometry = new THREE.CylinderGeometry(600, 600, 800, 40, 10);
	geometry.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI / 2));

	const material = new THREE.MeshPhongMaterial({
		color: 0x68c3c0,
		transparent: true,
		opacity: 0.6,
	});

	const sea = new THREE.Mesh(geometry, material);
	sea.receiveShadow = true;

	return sea;
}
