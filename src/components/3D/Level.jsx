/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { memo } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

/**
 * Level component that renders the 3D environment.
 * Uses memoization to prevent unnecessary re-renders.
 * @param {Object} props - Props passed to the component.
 * @returns {JSX.Element} The Level component.
 */
export const Level = memo((props) => {
  const { nodes, materials } = useGLTF("/Level1.glb");
  return (
    <RigidBody type="fixed" colliders="trimesh" ccd>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-large-tall001"].geometry}
          material={materials.colormap}
          position={[-3.268, 0, -0.815]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-large-slope-steep-narrow001"].geometry}
          material={materials.colormap}
          position={[-3.212, -0.021, 1.131]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-long001"].geometry}
          material={materials.colormap}
          position={[-1.678, 0, -3.375]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-overhang-long001"].geometry}
          material={materials.colormap}
          position={[-2.793, 0, -2.381]}
          rotation={[Math.PI, -1.02, Math.PI]}
          scale={[1.237, 1.375, 1.55]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-large-slope001"].geometry}
          material={materials.colormap}
          position={[-0.44, 0, 4.208]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-large-tall002"].geometry}
          material={materials.colormap}
          position={[-2.483, 0, 4.302]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-low-hexagon001"].geometry}
          material={materials.colormap}
          position={[-1.362, 0, 2.047]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-overhang-edge001"].geometry}
          material={materials.colormap}
          position={[-2.597, 0.446, 2.909]}
          rotation={[-Math.PI, 0.087, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["fence-corner001"].geometry}
          material={materials.colormap}
          position={[-4.608, 0, 5.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["fence-straight001"].geometry}
          material={materials.colormap}
          position={[-4.601, 0, 4.482]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["fence-corner002"].geometry}
          material={materials.colormap}
          position={[-4.586, 0, -4.528]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["fence-straight002"].geometry}
          material={materials.colormap}
          position={[-3.572, -0.002, -4.523]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["fence-corner-curved001"].geometry}
          material={materials.colormap}
          position={[5.443, 0, -4.517]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["fence-straight003"].geometry}
          material={materials.colormap}
          position={[4.392, 0, 5.484]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["fence-straight004"].geometry}
          material={materials.colormap}
          position={[5.461, 0, -3.475]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree001.geometry}
          material={materials.colormap}
          position={[-2.84, 2, 4.714]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tree-pine001"].geometry}
          material={materials.colormap}
          position={[-4.403, 0, -4.042]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tree-pine-small001"].geometry}
          material={materials.colormap}
          position={[-3.603, 0, -4.389]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["flowers-short001"].geometry}
          material={materials.colormap}
          position={[-3.632, 2, -0.478]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grass001.geometry}
          material={materials.colormap}
          position={[0.149, 0, -4.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["flowers-tall001"].geometry}
          material={materials.colormap}
          position={[-1.916, 0, -1.181]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-overhang-large-slope001"].geometry}
          material={materials.colormap}
          position={[4.083, 0.155, -1.113]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-low-narrow001"].geometry}
          material={materials.colormap}
          position={[3.167, 0, -3.016]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-narrow001"].geometry}
          material={materials.colormap}
          position={[3.902, 0, -3.985]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-overhang-low-long001"].geometry}
          material={materials.colormap}
          position={[2.065, 1.034, -4.068]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-overhang-narrow001"].geometry}
          material={materials.colormap}
          position={[1.546, 1.534, -4.043]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-overhang-low-long002"].geometry}
          material={materials.colormap}
          position={[1.953, 2.448, -5.551]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-overhang-low-long003"].geometry}
          material={materials.colormap}
          position={[0.684, 3.594, -3.95]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.flag001.geometry}
          material={materials.colormap}
          position={[-0.075, 4.094, -3.806]}
          rotation={[0, 1.176, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["block-grass-low-large001"].geometry}
          material={materials.colormap}
          position={[0.252, -3.205, 0.207]}
          scale={6.4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poles001.geometry}
          material={materials.colormap}
          position={[-1.58, -0.005, -0.48]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poles002.geometry}
          material={materials.colormap}
          position={[-0.35, -0.005, -0.48]}
          rotation={[0, 0.428, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poles003.geometry}
          material={materials.colormap}
          position={[0.332, 0.103, -2.593]}
          rotation={[0, 1.506, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["flowers-tall002"].geometry}
          material={materials.colormap}
          position={[-1.139, 0.5, 2.227]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mushrooms001.geometry}
          material={materials.colormap}
          position={[4.912, -0.005, 0.592]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plant001.geometry}
          material={materials.colormap}
          position={[-3.198, 1.375, -2.521]}
          rotation={[Math.PI, -1.02, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plant002.geometry}
          material={materials.colormap}
          position={[4.355, -0.005, 5.348]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree002.geometry}
          material={materials.colormap}
          position={[5.509, -0.005, 5.557]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["block-grass-overhang-large-slope-steep-narrow001"].geometry
          }
          material={materials.colormap}
          position={[-0.456, 0.13, -2.298]}
        />
      </group>
    </RigidBody>
  );
});

// Preload the GLTF model for better performance
useGLTF.preload("/Level1.glb");
