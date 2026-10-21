import { Popover } from "antd";
import { cloneElement, useEffect, useState } from "react";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";

export function LibHelperOverlay({
  config,
  transparency = 0.8,
  color = "white",
  primaryPlaceInStory = "center",
  showSecondaryWithKey = () => {},
}) {
  const [hightlightRects, setHightlightRects] = useState<any>(null);
  let primaryMargin;

  switch (primaryPlaceInStory) {
    case "center":
      primaryMargin = "0 auto";
      break;
    case "left":
      primaryMargin = "";
      break;
    case "right":
      primaryMargin = "0 0 0 auto";
      break;
  }

  useEffect(() => {
    if (config) {
      const { content, containerPos, contentPos, secondaryComponent } = config;
      const pos = getContainerPosition(containerPos);
      const contPos = getElementPosition(contentPos);
      setHightlightRects({
        pos,
        contPos,
        content,
        ...(secondaryComponent && {
          secondaryComponent,
        }),
      });
    }
  }, [config]);

  return (
    <TopicMapContextProvider appKey="storybook-appkey">
      {" "}
      <div
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          width: "100vw",
          height: "100vh",
          background: color,
          opacity: transparency,
        }}
      >
        {hightlightRects && hightlightRects.secondaryComponent && (
          <div
            style={{
              fontSize: "12px",
              marginTop: "5px",
              textAlign: "right",
              width: "98%",
              paddingRight: "15px",
              color: "#919090",
            }}
          >
            Auf den Text klicken um sekundäre Komponente zu öffnen
          </div>
        )}

        <div
          style={{
            marginTop: "1rem",
            height: "95vh",
            width: "96%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {hightlightRects &&
            (hightlightRects.secondaryComponent ? (
              <Popover
                content={hightlightRects.secondaryComponent.content}
                trigger="click"
                placement={hightlightRects.secondaryComponent.secondaryPos}
                autoAdjustOverflow={false}
              >
                <span
                  style={{
                    cursor: "pointer",
                    textAlign: "center",
                    width: "max-content",
                    margin: primaryMargin,
                  }}
                >
                  {hightlightRects.content}
                </span>
              </Popover>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  width: "max-content",
                  margin: primaryMargin,
                }}
              >
                {cloneElement(hightlightRects.content, {
                  showSecondaryWithKey: showSecondaryWithKey,
                })}
              </div>
            ))}
        </div>
      </div>
    </TopicMapContextProvider>
  );
}

export function getContainerPosition(alignment) {
  let styleElement: { [key: string]: string } = {};
  switch (alignment) {
    case "center":
      styleElement.transform = "translate(0, 0)";
      break;
    case "top":
      styleElement.transform = "translate(0, -100%)";
      break;
    case "left":
      styleElement.transform = "translate(-100%, 0)";
      break;
    case "right":
      styleElement.transform = "translate(100%, 0)";
      break;
    case "bottom":
      styleElement.transform = "translate(0, 100%)";
      break;
    default:
      console.log("yyy element position");
  }

  return styleElement;
}

export function getElementPosition(alignment) {
  let styleElement: { [key: string]: string | number } = {};
  switch (alignment) {
    case "center":
      styleElement.top = "50%";
      styleElement.left = "50%";
      styleElement.transform = "translate(-50%, -50%)";
      break;
    case "top-center":
      styleElement.top = 0;
      styleElement.transform = "translate(50%, 0)";
      break;
    case "top-right":
      styleElement.top = 0;
      styleElement.right = 0;
      break;
    case "top-left":
      styleElement.top = 0;
      styleElement.left = 0;
      break;
    case "left-center":
      styleElement.top = "50%";
      styleElement.transform = "translate(0, -50%)";
      styleElement.left = 0;
      break;
    case "left-top":
      styleElement.top = 0;
      styleElement.left = 0;
      break;
    case "left-bottom":
      styleElement.bottom = 0;
      styleElement.left = 0;
      break;
    case "right-center":
      styleElement.top = "50%";
      styleElement.transform = "translate(0, -50%)";
      styleElement.right = 0;
      break;
    case "right-top":
      styleElement.top = 0;
      styleElement.right = 0;
      break;
    case "right-bottom":
      styleElement.bottom = 0;
      styleElement.right = 0;
      break;
    case "bottom-center":
      styleElement.bottom = 0;
      styleElement.transform = "translate(50%, 0)";
      break;
    case "bottom-right":
      styleElement.bottom = 0;
      styleElement.right = 0;
      break;
    case "bottom-left":
      styleElement.bottom = 0;
      styleElement.left = 0;
      break;
    default:
      console.log("yyy content position");
  }

  return styleElement;
}
