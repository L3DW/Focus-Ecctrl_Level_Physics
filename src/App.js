import { EcctrlJoystick } from "ecctrl";
import { Character, Level, Stage } from "./components/3D";

export default function App() {
  return (
    <>
      <EcctrlJoystick buttonNumber={4} />
      <Stage>
        <Character />
        <Level scale={1.2} rotation={[0, Math.PI * 1, 0]} />
      </Stage>
    </>
  );
}
