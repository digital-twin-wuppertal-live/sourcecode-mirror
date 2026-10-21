interface KompaktanleitungFooterProps {
  version: string;
}

export const KompaktanleitungFooter = ({
  version,
}: KompaktanleitungFooterProps) => {
  return (
    <span style={{ fontSize: "11px" }}>
      <b>Hintergrundkarten</b>: True Orthophoto 2022, Amtliche Basiskarte (ABK)
      © Stadt Wuppertal | Stadtplanwerk 2.0 (Beta) © RVR | WebAtlasDE © BKG{" "}
      <a>(Details und Nutzungsbedingungen)</a>
      <br />
      <div>
        <b>verdis-online Wuppertal</b>: ({version}){" "}
        <a href="https://cismet.de/" target="_cismet">
          cismet GmbH
        </a>{" "}
        auf Basis von{" "}
        <a href="http://leafletjs.com/" target="_more">
          Leaflet
        </a>{" "}
        und{" "}
        <a href="https://cismet.de/#refs" target="_cismet">
          cids | react-cismap | WuNDa
        </a>{" "}
        |{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://cismet.de/datenschutzerklaerung.html"
        >
          Datenschutzerklärung (Privacy Policy)
        </a>
      </div>
    </span>
  );
};
