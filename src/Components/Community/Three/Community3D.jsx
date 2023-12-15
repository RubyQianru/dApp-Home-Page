import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Model } from './Model';
import { SoftShadows } from "@react-three/drei"

const Community3D = () => {
  const meshRef = useRef();
  const [rotation, setRotation] = useState({ x: 0, y: 0.5 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;

    setRotation({
      x: -y,
      y: x,
    });
  };

  const handleMouseLeave = (e) =>{
    setRotation({x:0, y:0.5})
  }

  return (
    <Canvas
      shadows
      style={{ width: '100vw', height: '50vh' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <SoftShadows size={25} focus={1} samples={10}/>
      <ambientLight intensity={1.8} />
      <directionalLight castShadow position={[2.5, 8, 5]} intensity={1.5} shadow-mapSize={1024}>
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
      </directionalLight>
      <pointLight position={[-10, 0, -20]} color="white" intensity={1} />
      <pointLight position={[0, -10, 0]} intensity={1} />

      <group>
        <mesh ref={meshRef} rotation={[rotation.x, rotation.y, 0]} position={[0, -0.5, 0]}>
          <Model scale={[1, 1, 1]} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>
      </group>

    </Canvas>
  );
};

export default Community3D;
