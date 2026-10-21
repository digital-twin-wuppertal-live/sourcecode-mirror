import GenericDigitalTwinReferenceTextComponent from "./GenericDigitalTwinReferenceTextComponent";
import Section from "react-cismap/topicmaps/menu/Section";

const GenericDigitalTwinReferenceSection: React.FC = () => {
  return (
    <Section
      key="digiTal"
      sectionKey="digiTal"
      sectionTitle={"Urbaner Digitaler Zwilling"}
      sectionBsStyle="warning"
      sectionContent={<GenericDigitalTwinReferenceTextComponent />}
    ></Section>
  );
};

export default GenericDigitalTwinReferenceSection;
