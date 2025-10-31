import { Link } from "react-scroll";
interface MenuIntroductionProps {
  setAppMenuActiveMenuSection: (arg: string) => void;
}
export const MenuIntroduction: React.FC<MenuIntroductionProps> = ({
  setAppMenuActiveMenuSection,
}: MenuIntroductionProps) => {
  return (
    <span>
      W&auml;hlen Sie Ihre Such- und Ausschlussbedingungen in den{" "}
      <Link
        className="useAClassNameToRenderProperLink"
        to="filter"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("filter")}
      >
        Filtern
      </Link>{" "}
      aus, um die angezeigten Angebote an Ihre Interessen anzupassen (alternativ
      über die Einstellungen unter den darunter folgenden Leitfragen). Über{" "}
      <Link
        className="useAClassNameToRenderProperLink"
        to="settings"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("merkliste")}
      >
        meine Merkliste
      </Link>{" "}
      erreichen Sie die Liste der Angebote, die Sie festgehalten haben. Wählen
      Sie{" "}
      <Link
        className="useAClassNameToRenderProperLink"
        to="help"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("help")}
      >
        Kompaktanleitung
      </Link>{" "}
      für detailliertere Bedienungsinformationen und{" "}
      <Link
        id="lnkUDZ"
        to="digiTal"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("digiTal")}
        className="renderAsLink"
      >
        Urbaner Digitaler Zwilling
      </Link>{" "}
      für eine Einordnung der Ehrenamtskarte in das Gesamtsystem des Digitalen Zwillings der Stadt Wuppertal.
    </span>
  );
};
