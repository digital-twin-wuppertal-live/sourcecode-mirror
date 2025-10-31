import Icon from "react-cismap/commons/Icon";
interface InfoBoxTextContentProps {
  setAppMenuActiveMenuSection: (arg: string) => void;
  setAppMenuVisible: (arg: boolean) => void;
}
export const InfoBoxTextContent: React.FC<InfoBoxTextContentProps> = ({
  setAppMenuVisible,
  setAppMenuActiveMenuSection,
}) => {
  return (
    <p>
      Für mehr POI Ansicht mit <Icon name="minus-square" /> verkleinern. Um nach
      Themenfeldern zu filtern, das
      <a
        onClick={() => {
          setAppMenuVisible(true);
          setAppMenuActiveMenuSection("filter");
        }}
        className="renderAsLink"
      >
        {" "}
        Men&uuml;&nbsp;
        <Icon
          name="bars"
          style={{
            color: "black",
          }}
        />{" "}
        &ouml;ffnen.
      </a>
    </p>
  );
};
