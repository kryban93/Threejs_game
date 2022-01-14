import * as THREE from 'https://threejs.org/build/three.module.js';
import { createPilot } from './createPilot.js';

export function createAirplane() {
	const airplane = new THREE.Object3D();
	const cockpitGeometry = new THREE.BoxGeometry(60, 50, 50, 1, 1, 1);
	const cockpitMaterial = new THREE.MeshPhongMaterial({ color: '#590939' });
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
	const tailMaterial = new THREE.MeshPhongMaterial({ color: '#590939' });
	const tail = new THREE.Mesh(tailGeometry, tailMaterial);
	tail.castShadow = true;
	tail.receiveShadow = true;
	tail.position.set(-35, 25, 0);
	airplane.add(tail);

	const wingsGeometry = new THREE.BoxGeometry(40, 8, 150, 1, 1, 1);
	const wingsMaterial = new THREE.MeshPhongMaterial({ color: '#9c1465' });
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

	const pilot = createPilot();
	pilot.position.set(-10, 40, 0);
	pilot.scale.set(1.5, 1.5, 1.5);
	airplane.add(pilot);

	const glassGeometry = new THREE.BoxGeometry(2, 20, 30);
	const glassMaterial = new THREE.MeshPhongMaterial({ color: '#fff', opacity: 0.1 });
	const glass = new THREE.Mesh(glassGeometry, glassMaterial);
	glass.position.set(20, 30, 0);
	airplane.add(glass);

	airplane.castShadow = true;
	airplane.receiveShadow = true;

	return airplane;
}
