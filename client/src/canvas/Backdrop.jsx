import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows= useRef();
  return (
    <AccumulativeShadows
    ref={shadows}
    temporal
    frames={60}
    alphaTest={0.85}
    scale={2}
    rotation={[Math.PI / 2, 0, 0]}
    position={[0, 0, -0.12]}
    >
      <RandomizedLight 
       amount={4}
       radius={10}
       intensity={2.5}
       ambient={0.25}
       position={[5, 5, -5]}
      />
      <RandomizedLight 
       amount={4}
       radius={4}
       intensity={0.2}
       ambient={0.1}
       position={[-5, 5, 5]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop