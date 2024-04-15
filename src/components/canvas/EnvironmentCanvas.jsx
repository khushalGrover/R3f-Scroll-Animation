import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Prototype3 } from "./Prototype3";

export const EnvironmentCanvas = () => {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      {/* <color attach="background" args={["#ececec"]} /> */}
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={0.5} />
      <Prototype3 />
    </Canvas>
    
  );
};
