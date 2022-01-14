import * as THREE from 'https://threejs.org/build/three.module.js';

export function createPilot() {
	const pilot = new THREE.Object3D();
	pilot.name = 'pilot';

	const bodyGeometry = new THREE.BoxGeometry(12, 15, 15);
	const bodyMaterial = new THREE.MeshPhongMaterial({ color: '#142f5e' });
	const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
	body.position.set(0, -12, 0);
	pilot.add(body);

	const faceGeometry = new THREE.BoxGeometry(10, 10, 10);
	const faceMaterial = new THREE.MeshLambertMaterial({ color: '#ffe8f8' });
	const face = new THREE.Mesh(faceGeometry, faceMaterial);
	pilot.add(face);

	const hairGeometry = new THREE.BoxGeometry(4, 4, 4);
	const hairMaterial = new THREE.MeshLambertMaterial({ color: '#ff8b2b' });
	const hair = new THREE.Mesh(hairGeometry, hairMaterial);
	hair.geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 2, 0));

	const hairs = new THREE.Object3D();
	const hairsTop = new THREE.Object3D();
	hairsTop.name = 'hairsTop';

	for (let i = 0; i < 12; i++) {
		const clonedHair = hair.clone();
		const col = i % 3;
		const row = Math.floor(i / 3);
		const startPositionZ = -4;
		const startPositionX = -8;
		clonedHair.position.set(startPositionX + row * 4, 3, startPositionZ + col * 4);
		hairsTop.add(clonedHair);
	}
	hairs.add(hairsTop);

	const hairSideGeometry = new THREE.BoxGeometry(12, 4, 1);
	hairSideGeometry.applyMatrix4(new THREE.Matrix4().makeTranslation(-6, 0, 0));
	const hairSideRight = new THREE.Mesh(hairSideGeometry, hairMaterial);
	const hairSideLeft = hairSideRight.clone();
	hairSideRight.position.set(4, 2, 6);
	hairSideLeft.position.set(4, 2, -6);
	hairs.add(hairSideRight);
	hairs.add(hairSideLeft);
	hairs.name = 'hairs';

	pilot.add(hairs);

	const glassGeometry = new THREE.BoxGeometry(2, 5, 5);
	const glassMaterial = new THREE.MeshLambertMaterial({ color: '#1a1324' });
	const glassR = new THREE.Mesh(glassGeometry, glassMaterial);
	glassR.position.set(6, 0, 3);
	const glassL = glassR.clone();
	glassL.position.z = -glassR.position.z;

	const glassAGeometry = new THREE.BoxGeometry(11, 1, 11);
	const glassA = new THREE.Mesh(glassAGeometry, glassMaterial);

	pilot.add(glassR);
	pilot.add(glassL);
	pilot.add(glassA);

	const earGeometry = new THREE.BoxGeometry(2, 3, 2);
	const leftEar = new THREE.Mesh(earGeometry, faceMaterial);
	leftEar.position.set(0, -2, -7);
	const rightEar = leftEar.clone();
	rightEar.position.set(0, -2, 7);

	pilot.add(leftEar);
	pilot.add(rightEar);

	return pilot;
}
