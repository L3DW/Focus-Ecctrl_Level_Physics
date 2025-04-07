import { memo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Environment, Grid, KeyboardControls } from "@react-three/drei";

/**
 * Keyboard control mapping for the stage.
 * Defines the key bindings for various actions.
 * @constant {Array<Object>}
 */
const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] },
  { name: "action1", keys: ["1"] },
  { name: "action2", keys: ["2"] },
  { name: "action3", keys: ["3"] },
];

/**
 * Stage component that sets up the 3D environment, physics, and keyboard controls.
 * Uses memoization to prevent unnecessary re-renders.
 * @param {Object} props - Props passed to the component.
 * @param {React.ReactNode} props.children - Child components to render within the stage.
 * @returns {JSX.Element} The Stage component.
 */
export const Stage = memo(({ children }) => (
  <Canvas shadows>
    {/* Ambient lighting for the scene */}
    <ambientLight intensity={0.2} />

    {/* Environment preset for realistic lighting */}
    <Environment preset="city" />

    {/* Grid helper for visual reference */}
    <Grid args={[24, 24]} />

    {/* Physics simulation with variable time step */}
    <Physics timeStep="vary" debug>
      {/* Keyboard controls for character movement */}
      <KeyboardControls map={keyboardMap}>
        {/* Suspense to handle asynchronous loading of child components */}
        <Suspense fallback={null}>{children}</Suspense>
      </KeyboardControls>
    </Physics>
  </Canvas>
));
