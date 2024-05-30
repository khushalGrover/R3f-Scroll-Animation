import { Canvas } from "@react-three/fiber";
import { MainScene } from "./components/MainScene";
import { ScrollControls } from "@react-three/drei"

function App() {
  return (
    <Canvas shadows>
      <color attach="background" args={["#6acbff"]} />
      <ScrollControls pages={5} damping={0.3}>
        <MainScene />
      </ScrollControls>
    </Canvas>
  );
}

export default App;
