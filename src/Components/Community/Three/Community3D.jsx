import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, Environment, OrbitControls } from '@react-three/drei';
import { Model } from './Model';

const Community3D = () => {
  const meshRef = useRef();

  // State to store the rotation angles
  const [rotation, setRotation] = useState({ x: 0, y: 0.5 });

  // Update rotation based on mouse movement
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
      style={{ width: '30vw', height: '30vw' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <pointLight position={[10, 10, 10]} />
      <ambientLight intensity={5} />
      <directionalLight color="green" position={[0, 0, 0]} />

      <mesh ref={meshRef} rotation={[rotation.x, rotation.y, 0]}>
        <Model scale={[1, 1, 1]} />
      </mesh>

      <OrbitControls
        autoRotate={false}
        autoRotateSpeed={4}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
      />
    </Canvas>
  );
};

export default Community3D;
