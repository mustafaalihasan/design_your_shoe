import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shoe = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/nike_colored_shoe_08.glb')

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => easing.dampC(materials.main_body_material.color, 
    snap.color, 0.25, delta));

  useFrame((state, delta) => easing.dampC(materials.Logo_left_Material.color, 
    snap.color01, 0.25, delta));

  useFrame((state, delta) => easing.dampC(materials.shoe_bottom.color, 
    snap.color02, 0.25, delta));

  const stateString = JSON.stringify(snap);

  return (
    <group
      key={stateString}
    >
      <mesh
        castShadow
        geometry={nodes.Nike_Shoe.geometry}
        material={materials.main_body_material}
        material-roughness={1}
        dispose={null}
        depthTest={1}
      >
        
        {snap.isFullTexture && (
          <Decal
          position={[0, 0.01, 0.2]}
          rotation={[0, 0, 0]}
          scale={0.5}
          depthTest={1}
          map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal style={{ zIndex: 0 }}
          position={[0, 0.01, 0.2]}
          rotation={[0, 0, 0]}
          depthTest={1}
          scale={0.5}
          map={logoTexture}

          />
        )}

      </mesh>
      <mesh
        position={[0, 0, 0.005]}
        rotation={[0, 0.1, 0]}
        castShadow
        geometry={nodes.Nike_Logo_L.geometry}
        material={materials.Logo_left_Material}
        material-roughness={1}
        dispose={null}
      >

      </mesh>
      <mesh
        castShadow
        geometry={nodes.Shoe_Bottom.geometry}
        material={materials.shoe_bottom}
        material-roughness={1}
        dispose={null}
      >
      </mesh>

      <mesh
        castShadow
        geometry={nodes.Shoe_Flap.geometry}
        material={materials.Flap_Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>

      <mesh
        castShadow
        geometry={nodes.Shoe_Tag.geometry}
        material={materials.Tag_Material}
        material-roughness={1}
        dispose={null}
      >
      </mesh>

    </group>
  )
}

export default Shoe