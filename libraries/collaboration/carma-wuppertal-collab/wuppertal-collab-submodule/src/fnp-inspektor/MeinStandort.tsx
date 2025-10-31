import Section from "react-cismap/topicmaps/menu/Section";
import { MeinStandortText } from "../commons";

export const MeinStandort = () => {
  return (
    <Section
      sectionKey="standort"
      sectionTitle="Mein Standort"
      sectionBsStyle="warning"
      sectionContent={<MeinStandortText />}
    />
  );
};
