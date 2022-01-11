import * as THREE from 'https://threejs.org/build/three.module.js';

export function createCloud(numberOfBlocks) {
	const cloud = new THREE.Object3D();
	const geometry = new THREE.BoxGeometry(20, 20, 20);
	const material = new THREE.MeshPhongMaterial({
		color: 0xffffff,
	});

	const blocksInCloud = numberOfBlocks < 3 ? 3 : numberOfBlocks;

	for (let i = 0; i < blocksInCloud; i++) {
		let box = new THREE.Mesh(geometry, material);
		box.position.x = i * 15;
		box.position.y = Math.random() * 10;
		box.position.z = Math.random() * 10;
		box.rotation.z = Math.random() * Math.PI * 2;
		box.rotation.y = Math.random() * Math.PI * 2;

		const scale = 0.2 + Math.random() * 0.9;
		box.scale.set(scale, scale, scale);
		box.castShadow = true;
		box.receiveShadow = true;

		cloud.add(box);
	}
	console.log(cloud.children);
	return cloud;
}
