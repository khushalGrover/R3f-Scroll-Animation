import { Environment, Sphere} from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import { Cloud } from "./gameobjects/Cloud";
import * as THREE from "three";

export const Background = () => {
	return (
		<>
			<Environment preset="sunset" />
			<Sphere
				scale={[100, 100, 100]}
				rotation-y={Math.PI}
				position={[0, 0, 0]}
			>
				<LayerMaterial
					lighting="physical"
					transmission={1}
					side={THREE.BackSide}
				>
					<Gradient
						colorA={"#44b0ff"}
						colorB={"#24b0ff"}
						axes={"y"}
						start={0}
						end={-0.01}
					/>
				</LayerMaterial>
			</Sphere>

			{/* CLOUDS */}
			<Cloud position={[-15, 8, -10]} scale={0.1} opacity={1} />
			<Cloud position={[15, 5, -30]} scale={0.1} opacity={0.8} />
			<Cloud position={[0, 8, -50]} scale={0.1} opacity={0.2} />
			<Cloud position={[1, 7, -55]} scale={0.15} opacity={0.1} />

			{/* WATER */}
			<mesh rotation={[-Math.PI / 2, 0, 0]} scale={0.2}>
				<planeGeometry args={[1000, 1000]} />
				<meshStandardMaterial
					color="#5555ff"
					transparent={true}
					opacity={0.5}
				/>
			</mesh>
			<mesh
				position={[0, -0.05, 0]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={0.2}
			>
				<planeBufferGeometry args={[1000, 1000]} />
				<meshStandardMaterial
					color="#5555ff"
					transparent={true}
					opacity={0.5}
				/>
			</mesh>
		</>
	);
};
