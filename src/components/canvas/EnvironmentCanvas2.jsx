import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";

const DEG45 = Math.PI / 4;

export const EnvironmentCanvas2 = ({ arg }) => {
	
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
				{ x: 5, y: 0, z: 0 }, // position
				{ x: 0, y: 0, z: 0 }, // target
				true // enableTransition
			);
			
		} else if (arg === 2) {
			handleView(
				{ x: 2, y: 0, z: 2 }, // position
				{ x: 0, y: 0, z: 0 }, // target
				true // enableTransition
			);
		} else if (arg === 3) {
			handleView(
				{ x: 5, y: 3, z: 5 }, // position
				{ x: 0, y: 0, z: 0 }, // target
				true // enableTransition
			);
		}
	}, [arg]);

	return (
		<>
			<Canvas>
				<CameraControls ref={cameraControlRef} />
				<group >
					<mesh>
						<boxGeometry />
						<meshBasicMaterial color={0xff0000} wireframe />
					</mesh>
				</group>
			</Canvas>
		</>
	);
};
