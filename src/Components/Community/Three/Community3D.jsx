import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, Environment, OrbitControls } from '@react-three/drei' 
import { Model } from './Model'


const Community3D = () => (
    <Canvas shadows style={{ width: "100vw", height: "30vw" }}>
      <pointLight position={[10, 10, 10]}  />
      <ambientLight intensity={10} />
      <directionalLight color="yellow" position={[0, 0, 5]} />
      <mesh>
        <Model scale={[5,5,5]}></Model>
      </mesh>
      <OrbitControls autoRotate autoRotateSpeed={4} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} />

    </Canvas>
  )

export default Community3D