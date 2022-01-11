import * as THREE from 'https://threejs.org/build/three.module.js';

export function createAirplane() {
	const airplane = new THREE.Object3D();
	const cockpitGeometry = new THREE.BoxGeometry(60, 50, 50, 1, 1, 1);
	const cockpitMaterial = new THREE.MeshPhongMaterial({ color: '#fc035e' });
	const cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
	cockpit.castShadow = true;
	cockpit.receiveShadow = true;
	airplane.add(cockpit);

	const engineGeometry = new THREE.BoxGeometry(20, 50, 50, 1, 1, 1);
	const engineMaterial = new THREE.MeshPhongMaterial({ color: '#fafafa' });
	const engine = new THREE.Mesh(engineGeometry, engineMaterial);
	engine.position.x = 40;
	engine.castShadow = true;
	engine.receiveShadow = true;
	airplane.add(engine);

	const tailGeometry = new THREE.BoxGeometry(15, 40, 5, 1, 1, 1);
	const tailMaterial = new THREE.MeshPhongMaterial({ color: '#fc035e' });
	const tail = new THREE.Mesh(tailGeometry, tailMaterial);
	tail.castShadow = true;
	tail.receiveShadow = true;
	tail.position.set(-35, 25, 0);
	airplane.add(tail);

	const wingsGeometry = new THREE.BoxGeometry(40, 8, 150, 1, 1, 1);
	const wingsMaterial = new THREE.MeshPhongMaterial({ color: '#ffffff' });
	const wings = new THREE.Mesh(wingsGeometry, wingsMaterial);
	wings.castShadow = true;
	wings.receiveShadow = true;
	airplane.add(wings);

	const propelerGeometry = new THREE.BoxGeometry(20, 10, 10, 1, 1, 1);
	const propelerMaterial = new THREE.MeshPhongMaterial({ color: '#594632' });
	const propeler = new THREE.Mesh(propelerGeometry, propelerMaterial);
	propeler.castShadow = true;
	propeler.receiveShadow = true;
	propeler.position.set(50, 0, 0);
	propeler.name = 'propeller';
	const bladeGeometry = new THREE.BoxGeometry(1, 100, 20, 1, 1, 1);
	const bladeMaterial = new THREE.MeshPhongMaterial({ color: '#000' });
	const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
	wings.castShadow = true;
	wings.receiveShadow = true;
	blade.castShadow = true;
	blade.receiveShadow = true;
	blade.position.set(8, 0, 0);
	propeler.add(blade);

	airplane.add(propeler);
	return airplane;
}
