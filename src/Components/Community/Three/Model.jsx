import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/pepe_head.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials["Material.001"]}
        position={[-0.006, 0.01, 0.386]}
        scale={0.118}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.Material}
        position={[0.122, 0.128, 0.353]}
        rotation={[1.571, 0, 3.058]}
        scale={0.097}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.Material}
        position={[-0.112, 0.13, 0.353]}
        rotation={[1.571, 0, 3.058]}
        scale={0.097}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials["Material.002"]}
        position={[0, 0, 0.01]}
      >

      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
      >
        <meshStandardMaterial color="#20672c" />
      </mesh>

    </group>

  );
}

useGLTF.preload("/pepe_head.gltf");
