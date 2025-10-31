import type { ElementType } from "../helper-overlay/helperTypes";
import { DemoVideo } from "./secondary/DemoVideo";
import { DemoGif } from "./secondary/DemoGif";

export const demoElements: Record<string, ElementType> = {
  videoControl: {
    key: "DEMOVIDEO",
    content: <div>Demo video</div>,
    containerPos: "center",
    contentPos: "left-center",
    secondary: {
      content: <DemoVideo />,
      secondaryPos: "right",
    },
  },
  gifControl: {
    key: "DEMOGIF",
    content: <div>Demo gif</div>,
    containerPos: "center",
    contentPos: "left-center",
    secondary: {
      content: <DemoGif />,
      secondaryPos: "right",
    },
  },
};
