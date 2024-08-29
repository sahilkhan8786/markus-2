import { Canvas } from "@react-three/fiber";
import ParkScene from "./components/Models/ParkScene";
import { Environment, OrbitControls } from "@react-three/drei";
import { Lola } from "./components/Models/Lola";

export default function App() {
  return (
    <div className="w-full h-screen">
      <Canvas className="w-full h-screen">
        <ambientLight intensity={1} />
        <ParkScene scale={[30, 30, 30]} position={[2, 0, 1]} rotation={[0, -Math.PI / 5, 0]} />
        <Lola position={[-4, -1, 2]} rotation={[0, 0.5, 0]} />
        <Environment preset="forest" background />
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} zoomSpeed={false} />
      </Canvas>
    </div>
  );
}
