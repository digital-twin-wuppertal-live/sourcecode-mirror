import Icon from "react-cismap/commons/Icon";

const defaultText = (
  <span>
    Für mehr POI Ansicht mit <Icon name="minus-square" /> verkleinern. Um nach
    Themenfeldern zu filtern, das Menü öffnen.
  </span>
);

export const InfoBoxTextContent = ({ text = defaultText }) => {
  return text;
};
