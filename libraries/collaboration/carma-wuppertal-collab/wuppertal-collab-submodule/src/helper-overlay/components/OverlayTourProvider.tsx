import { createContext } from "react";
import type {
  OverlayTourContext as OverlayTourContextSettings,
  OverlayTourProviderProps,
} from "../helperTypes";

export const OverlayTourContext = createContext<OverlayTourContextSettings>({
  setSecondaryWithKey: () => {},
  showOverlay: () => {},
});

export const OverlayTourProvider = ({
  setSecondaryWithKey = () => {},
  showOverlay = () => {},
  children,
}: OverlayTourProviderProps) => {
  return (
    <OverlayTourContext.Provider value={{ setSecondaryWithKey, showOverlay }}>
      {children}
    </OverlayTourContext.Provider>
  );
};
