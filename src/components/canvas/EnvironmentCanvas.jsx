import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Prototype4 } from "./Prototype4";
import { Overlay } from ".././Overlay";

export const EnvironmentCanvas = () => {
  return (
    <Canvas shadows camera={{ position: [3, 0, 0], fov: 50 }}>
      <color attach="background" args={["#ececec"]} />
      <ambientLight intensity={0.1} />
      {/* <directionalLight
        position={[0, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      /> */}
      <spotLight
        color={"#ffffff"}
        position={[10, 20, 5]}
        intensity={1}
        castShadow
        angle={Math.PI / 6}
        penumbra={0.5}

      />
      {/* <OrbitControls enableZoom={false} /> */}
      <ScrollControls pages={3.3} damping={0.1}>
        <Overlay />
        <Prototype4 />
      </ScrollControls>
    </Canvas>
  );
};
