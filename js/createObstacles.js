import * as THREE from 'https://threejs.org/build/three.module.js';

export function createObstacle() {
	
	const geometry = new THREE.BoxGeometry(2, 2, 2);
	const material = new THREE.MeshPhongMaterial({
		color: 0xcc11cc,
	});

	const obstacle = new THREE.Mesh(geometry,material);
	
	obstacle.position.x = 15;
	obstacle.position.y = Math.random() * 10;
		obstacle.position.z = Math.random() * 10;
		obstacle.rotation.z = Math.random() * Math.PI * 2;
		obstacle.rotation.y = Math.random() * Math.PI * 2;		
		obstacle.castShadow = true;
		obstacle.receiveShadow = true;

	return obstacle;
}
