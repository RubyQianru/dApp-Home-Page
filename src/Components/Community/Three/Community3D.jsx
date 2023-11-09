import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Center, Environment, OrbitControls } from '@react-three/drei' 



const Community3D = () => {
  const { nodes } = useGLTF('/scene.gltf')

  return (
    <Canvas camera={{ position: [0, 0, -30], fov: 50 }}>
      {/* lights */}
      <pointLight position={[10, 10, 10]} />
      <ambientLight />

      <mesh geometry={nodes.Object_2.geometry}>
      </mesh>

      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} />

    </Canvas>
  )

}


      
  
// useGLTF.preload('/scene.gltf')
export default Community3D