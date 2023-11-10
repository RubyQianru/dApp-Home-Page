import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Smug Pepe High Poly.glb");
  return (
    <group {...props} dispose={null} scale={1.5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Smug_Pepe_Body_HQ.geometry}
        material={materials.Smug_Pepe_Body}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Smug_Pepe_Eyes_HQ.geometry}
        material={materials.Pepe_Eyes}
        position={[-0.344, 0.458, 0.411]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Smug_Pepe_Hand_HQ.geometry}
        position={[0.409, -0.481, 0.638]}
        rotation={[1.8, 0.092, -0.066]}
        scale={0.01}
      ><meshPhongMaterial color={"#577f38"}/></mesh>
    </group>
  );
}

useGLTF.preload("/Smug Pepe High Poly.glb");
