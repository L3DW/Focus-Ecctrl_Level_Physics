import { memo, useRef } from "react";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

/**
 * URL for the character's 3D model.
 * @constant {string}
 */
export const characterURL = "/C_Block.glb";

/**
 * Animation set for the character.
 * Maps animation names to their corresponding identifiers in the 3D model.
 * @constant {Object<string, string>}
 */
export const animationSet = {
  idle: "Idle",
  walk: "M_Walk",
  run: "M_Run",
  jump: "J_Idle",
  jumpIdle: "J_Idle",
  jumpLand: "J_Idle",
  fall: "J_Idle",
  action4: "A_Wave",
  action3: "A_Get",
  action2: "A_Dance",
};

/**
 * Main character component.
 * Handles the character's physics and animation.
 * @returns {JSX.Element} The character component.
 */
export const Character = memo(() => {
  const ecctrlRef = useRef();

  // Reset character position if it falls below a certain threshold
  useFrame(() => {
    if (ecctrlRef.current && ecctrlRef.current.translation().y < -10) {
      ecctrlRef.current.setTranslation({ x: 0, y: 4, z: 0 });
      ecctrlRef.current.setLinvel({ x: 0, y: 0, z: 0 });
      ecctrlRef.current.setAngvel({ x: 0, y: 0, z: 0 });
    }
  });

  return (
    <Ecctrl capsuleHalfHeight={0.2} animated ref={ecctrlRef}>
      <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
        <CharacterModel
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.08}
          position-y={-0.8}
        />
      </EcctrlAnimation>
    </Ecctrl>
  );
});

/**
 * 3D model of the character.
 * Uses memoization to prevent unnecessary re-renders.
 * @param {Object} props - Props passed to the component.
 * @returns {JSX.Element} The character model component.
 */
export const CharacterModel = memo((props) => {
  const { nodes, materials } = useGLTF(characterURL);

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Main">
          <skinnedMesh
            name="ArmLeft1"
            geometry={nodes.ArmLeft1.geometry}
            material={materials.Skin}
            skeleton={nodes.ArmLeft1.skeleton}
          />
          <skinnedMesh
            name="ArmRight1"
            geometry={nodes.ArmRight1.geometry}
            material={materials.Skin}
            skeleton={nodes.ArmRight1.skeleton}
          />
          <skinnedMesh
            name="Body1"
            geometry={nodes.Body1.geometry}
            material={materials.Skin}
            skeleton={nodes.Body1.skeleton}
          />
          <skinnedMesh
            name="Head1"
            geometry={nodes.Head1.geometry}
            material={materials.Skin}
            skeleton={nodes.Head1.skeleton}
          />
          <skinnedMesh
            name="LegLeft1"
            geometry={nodes.LegLeft1.geometry}
            material={materials.Skin}
            skeleton={nodes.LegLeft1.skeleton}
          />
          <skinnedMesh
            name="LegRight1"
            geometry={nodes.LegRight1.geometry}
            material={materials.Skin}
            skeleton={nodes.LegRight1.skeleton}
          />
          <primitive object={nodes.Rig1} />
        </group>
      </group>
    </group>
  );
});
