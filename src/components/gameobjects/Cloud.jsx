import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Cloud(vara, ...props) {
	const { nodes, materials } = useGLTF("./models/scene.gltf");
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Object_2.geometry}
				material={materials["Scene_-_Root"]}
                position={vara.position}
                scale={vara.scale}
				rotation={[-Math.PI / 2, 0, 0]}
			>
                <meshStandardMaterial
                    {...materials["Scene_-_Root"]}
                    attach="material"
                    color={0xffffff}
                    transparent={true}
                    opacity={vara.opacity}
                    roughness={1}
                    metalness={0}
                />
            </mesh>
		</group>
	);
}

useGLTF.preload("./models/scene.gltf");
