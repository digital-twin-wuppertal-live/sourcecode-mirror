export type PositionOverlayHelper =
  | "center"
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "left-center"
  | "left-top"
  | "left-bottom"
  | "right-center"
  | "right-top"
  | "right-bottom"
  | "top-center"
  | "top-right"
  | "top-left"
  | "bottom-center"
  | "bottom-right"
  | "bottom-left";

type SecondaryPlacement =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "leftTop"
  | "leftBottom"
  | "rightTop"
  | "rightBottom";

export type Secondary = {
  content: JSX.Element | string;
  secondaryPos?: SecondaryPlacement;
};

export type OptionsOverlayHelper = {
  primary: {
    key: string;
    containerPos?: PositionOverlayHelper;
    contentPos?: PositionOverlayHelper;
    contentWidth?: string;
    position?: React.CSSProperties;
    content: JSX.Element | string;
  };
  secondary?: Secondary;
};

export type GetCollabedHelpComponentConfig = OptionsOverlayHelper | undefined;

export type ElementType = {
  key: string;
  containerPos?: PositionOverlayHelper;
  contentPos?: PositionOverlayHelper;
  content: JSX.Element | string;
  contentWidth?: string;
  position?: React.CSSProperties;
  secondary?: {
    content: JSX.Element | string;
    secondaryPos?: SecondaryPlacement;
  };
};

export type OverlayTourContext = {
  setSecondaryWithKey: (key: string) => void;
  showOverlay: (show: boolean) => void;
};

export interface OverlayHelperConfig {
  key: string;
  el?: HTMLElement;
  content: JSX.Element | string;
  containerPos?: PositionOverlayHelper;
  contentPos?: PositionOverlayHelper;
  contentWidth?: string;
  position?: React.CSSProperties;
  secondary?: Secondary;
}

export type OverlayTourAction = (arg: OverlayHelperConfig) => void;

export type OverlayTourProviderProps = {
  children: JSX.Element;
  setSecondaryWithKey?: (key: string) => void;
  showOverlay?: (show: boolean) => void;
};
