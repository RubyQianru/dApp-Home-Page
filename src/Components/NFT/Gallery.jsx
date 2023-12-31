import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import getUuid from 'uuid-by-string'
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import sound1 from '/audio/chant.mp3'
import sound2 from '/audio/holyChant.mp3'
import sound3 from '/audio/musicalChant.mp3'

const GOLDENRATIO = 1.61803398875

const soundArr = [new Audio(sound1), new Audio(sound2), new Audio(sound3)]

extend ({MeshReflectorMaterial})

export const Gallery = ({ images, preset, color, applyDepthOfField  }) => (
  <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }} style={{height: "100vh"}}>
    {!applyDepthOfField && (
      <ambientLight intensity={8} />
    )
    }
    {applyDepthOfField && (
      <>
      <ambientLight intensity={1} />
        <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={0.0001} bokehScale={15} height={120} />
        </EffectComposer>
      </>

      )}
    <color attach="background" args={[color]} />
    <fog attach="fog" args={[color, 0, 15]} />
      
    <group position={[0, -0.5, 0]}>
      <Frames images={images} />
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[600, 600]}
          resolution={2048}
          mixBlur={20}
          mixStrength={80}
          roughness={0.5}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#191920"
          metalness={0}
        />
      </mesh>
    </group>
    <Environment preset={preset} />
  </Canvas>
)

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef()
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt)
    easing.dampQ(state.camera.quaternion, q, 0.4, dt)
  })
  return (
    <group
      ref={ref}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      {images.map((props) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}
    </group>
  )
}

let audioStack = []

function Frame({ url, c = new THREE.Color(), ...props }) {
  const image = useRef()
  const frame = useRef()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const name = getUuid(url)
  const isActive = params?.id === name
  const handleHover = () => {
    let hoverAudio = soundArr[Math.floor(Math.random() * 3)]
    hoverAudio.currentTime = 0;
    hoverAudio.play();
    audioStack.push(hoverAudio)
  }
  const handleHoverEnd = () => {
    let hoverAudio = audioStack.pop()
    hoverAudio.pause();
    hoverAudio.currentTime = 0; 
  }

  useCursor(hovered)
  useFrame((state, dt) => {
    image.current.material.zoom = 1.5 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 3
    easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
    easing.dampC(frame.current.material.color, hovered ? 'white' : 'grey', 0.1, dt)

  })
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true), handleHover())}
        onPointerOut={(e) => (hover(false), handleHoverEnd())} 
        scale={[1, 1, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial metalness={0.5} roughness={0.5} envMapIntensity={2}/>
        <mesh 
          ref={frame} 
          raycast={() => null} scale={[0.9, 0.93, 0.9]} 
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.8]} url={url} />
      </mesh>
      <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, 0.55, 0]} fontSize={0.025}>
        {name.split('-').join(' ')}
      </Text>
    </group>
  )
}
