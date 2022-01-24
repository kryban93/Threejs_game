import * as THREE from 'https://threejs.org/build/three.module.js';

export function createObstacle() {
	
	const geometry = new THREE.BoxGeometry(20, 20, 20);
	const material = new THREE.MeshPhongMaterial({
		color: 0xcc11cc,
	});

	const obstacle = new THREE.Mesh(geometry,material);
			
	obstacle.castShadow = true;
	obstacle.receiveShadow = true;

	return obstacle;
}
