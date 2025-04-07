import { EcctrlJoystick } from "ecctrl";
import { Character, Level, Stage } from "./components/3D";

/**
 * The main application component.
 * 
 * This component renders the 3D environment, including a joystick for control,
 * a character, and a level within a stage.
 * 
 * @component
 * @returns {JSX.Element} The rendered application.
 */
export default function App() {
  return (
    <>
      {/* Joystick component for user input */}
      <EcctrlJoystick buttonNumber={4} />
      
      {/* 3D stage containing the character and level */}
      <Stage>
        <Character />
        <Level scale={1.2} rotation={[0, Math.PI * 1, 0]} />
      </Stage>
    </>
  );
}
