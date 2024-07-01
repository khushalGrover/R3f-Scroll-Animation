import { OrbitControls } from "@react-three/drei";
import { useTexture } from "@react-three/drei"
export const Experience = ({arg }) => {


  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial {...props}/>
      </mesh>
    </>
  );
};
