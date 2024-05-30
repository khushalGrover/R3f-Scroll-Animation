import { useMemo, useRef } from "react";

import {
	Float,
	OrbitControls,
	PerspectiveCamera,
	useScroll,
	Line,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { Background } from "./Background";
import { Boat } from "./gameobjects/Boat";
import * as THREE from "three";

const LINE_NB_POINTS = 200;

export const MainScene = () => {
	const curve = useMemo(() => {
		return new THREE.CatmullRomCurve3(
			[
				new THREE.Vector3(0, 0, 10),
				new THREE.Vector3(0, 0, 0),
				new THREE.Vector3(0, 0, -20),
				new THREE.Vector3(5, 0, -30),
				new THREE.Vector3(0, 0, -40),
				new THREE.Vector3(0, 0, -50),
				new THREE.Vector3(0, 0, -60),
				new THREE.Vector3(5, 0, -60),
				new THREE.Vector3(10, 0, -50),
				new THREE.Vector3(10, 0, -40),
			],
			false,
			"catmullrom",
			0.5
		);
	}, []);

	const linePoints = useMemo(() => {
		return curve.getPoints(LINE_NB_POINTS);
	}, [curve]);

	const shape = useMemo(() => {
		const shape = new THREE.Shape();
		shape.moveTo(0, -0.2);
		shape.lineTo(0, 0.2);

		return shape;
	}, [curve]);

	useFrame((_state, delta) => {
		const curPointIndex = Math.min(
			Math.round(scroll.offset * linePoints.length),
			linePoints.length - 1
		);
		const curPoint = linePoints[curPointIndex];
		const pointAhead =
			linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)];

		const xDisplacement = (pointAhead.x - curPoint.x) * 80;

		// Math.PI / 2 -> LEFT
		// -Math.PI / 2 -> RIGHT

		const angleRotation =
			(xDisplacement < 0 ? 1 : -1) *
			Math.min(Math.abs(xDisplacement), Math.PI / 3);

		const targetBoatQuaternion = new THREE.Quaternion().setFromEuler(
			new THREE.Euler(
				boat.current.rotation.x,
				boat.current.rotation.y,
				Math.max(Math.min(angleRotation, 0.3), -0.3)
			)
		);

		const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
			new THREE.Euler(
				cameraGroup.current.rotation.x,
				Math.max(Math.min(angleRotation, 0.2), -0.2),
				cameraGroup.current.rotation.z
			)
		);

		boat.current.quaternion.slerp(targetBoatQuaternion, delta * 2);
		cameraGroup.current.quaternion.slerp(targetCameraQuaternion, delta * 2);

		cameraGroup.current.position.lerp(curPoint, delta * 24);
	});

	const cameraGroup = useRef();
	const boat = useRef();
	const scroll = useScroll();

	return (
		<>
			{/* <OrbitControls enableZoom={false} /> */}
			<group ref={cameraGroup}>
				<Background />
				<PerspectiveCamera position={[5, 2, 15]} fov={30} makeDefault />
				<group ref={boat}>
					{/* <Float floatIntensity={0.1} speed={2}> */}
						<Boat />
					{/* </Float> */}
				</group>
			</group>

			{/* LINE */}
			<group position={[0, 0.2, 0]}>
				{/* <Line
					points={linePoints}
					color={"white"}
					opacity={0.2}
					transparent={true}
					lineWidth={1}
				/> */}
				<mesh>
					<extrudeGeometry
						args={[
							shape,
							{
								steps: LINE_NB_POINTS,
								bavelEnabled: false,
								extrudePath: curve,
							},
						]}
					/>
					<meshStandardMaterial
						color={"white"}
						opacity={0.2}
						transparent={true}
					/>
				</mesh>
			</group>
		</>
	);
};
