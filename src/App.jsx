import React, { useRef, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import ParkScene from "./components/Models/ParkScene";
import { Environment, OrbitControls } from "@react-three/drei";
import { Lola } from "./components/Models/Lola";
import sound from './first-page-audio.mp3';

export default function App() {
  const audioRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsAudioPlaying(prev => !prev);
      }).catch(error => {
        console.error("Error playing audio:", error);
      });
    }
  };

  return (
    <div className="w-full h-screen">
      <audio
        ref={audioRef}
        src={sound}
        loop
        style={{ display: 'none' }} // Hide the audio element
      />
      <button
        onClick={handlePlayAudio}
        className="absolute top-0 left-0 p-4 bg-blue-500 text-white"
        style={{ zIndex: 1000 }}
      >
        Play Audio
      </button>
      {isAudioPlaying && <p className='absolute top-0 left-0 z-30'>Audio is playing...</p>}
      <Canvas className="w-full h-screen">
        <ambientLight intensity={1} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={500}
        />
        <ParkScene scale={[30, 30, 30]} position={[2, 0, 1]} rotation={[0, -Math.PI / 5, 0]} />
        <Lola position={[6, -1, -1]} rotation={[0, 0.5, 0]} scale={[1.5, 1.5, 1.5]} />
        <Environment preset="forest" background />
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} zoomSpeed={false} />
      </Canvas>
    </div>
  );
}
