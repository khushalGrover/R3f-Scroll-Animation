import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Prototype3 } from "./Prototype3";
import { Overlay } from ".././Overlay";

export const EnvironmentCanvas = () => {
	return (
		<Canvas shadows camera={{ position: [3, 0, 0], fov: 50 }}>
			<color attach="background" args={["#ececec"]} />
			<ambientLight intensity={0.5} />
			<OrbitControls enableZoom={false} />
			<ScrollControls pages={3.3} damping={0.1}>
        <Overlay />
				<Prototype3 />
			</ScrollControls>
		</Canvas>
	);
};
