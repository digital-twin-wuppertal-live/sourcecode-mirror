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
      Für mehr Anlagen Ansicht mit <Icon name="minus-square" /> verkleinern oder
      mit untenstehendem Link alle Treffer der aktuellen Filterung anzeigen.
      Ggf. Filtereinstellungen im
      <a
        onClick={() => {
          setAppMenuVisible(true);
          setAppMenuActiveMenuSection("filter");
        }}
        className="renderAsLink"
      >
        {" "}
        Anwendungsmenü
        <Icon
          name="bars"
          style={{
            color: "black",
          }}
        />{" "}
      </a>
      zurücksetzen
    </p>
  );
};
