import { mainProvider } from "providers";
import { useEffect, type ReactElement } from "react";
import useSound from "use-sound";

export const AppProvider = (): ReactElement => {
  const [playSound] = useSound("assets/sound.mp3");

  useEffect(() => {
    mainProvider.registerPlaySound(playSound);
  }, []);

  return <></>;
};
