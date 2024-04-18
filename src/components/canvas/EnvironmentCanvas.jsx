import { OrbitControls, CameraControls, ScrollControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Prototype3 } from "./Prototype3";
import React, { useEffect, useRef } from "react";

export const EnvironmentCanvas = ({ arg }) => {

	const cameraControlRef = useRef(null);

	const handleView = (position, target, enableTransition) => {
		cameraControlRef.current?.setLookAt(
			position.x,
			position.y,
			position.z,
			target.x,
			target.y,
			target.z,
			enableTransition
		);
	};

	useEffect(() => {
		if (arg === 1) {
			handleView(
				{ x: 2, y: 0, z: 0 }, // position
				{ x: 0, y: 0, z: 0 }, // target
				true // enableTransition
			);
			
		} else if (arg === 2) {
			handleView(
				{ x: -4, y: 2, z: 2 }, // position
				{ x: -2, y: 2, z: -2 }, // target
				true // enableTransition
			);
		} else if (arg === 3) {
			handleView(
				{ x: 0, y: 4, z: -4 }, // position
				{ x: -4, y: 4, z: -4 }, // target
				true // enableTransition
			);
		}
	}, [arg]);
	
	return (
		<Canvas shadows camera={{ position: [3, 0, 0], fov: 50 }}>
			<CameraControls ref={cameraControlRef} />
			<color attach="background" args={["#ececec"]} />
			<ambientLight intensity={0.5} />
			{/* <OrbitControls enableZoom={false} /> */}
			{/* <ScrollControls pages={3.3} damping={0.1}>
				<Hero />
			</ScrollControls> */}
			<Prototype3 arg={arg} />
			{/* <CameraControls setLookAt={2,0,2,0,0,0, {isEnable}]/> */}
			{/* <CameraControls /> */}
			{/* camera control with setlookat property position at 0 and looking at target 2,0,2 */}
		</Canvas>
	);
};
