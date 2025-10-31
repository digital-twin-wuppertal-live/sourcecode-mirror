interface VersionNumberLoginPageProps {
  textColor?: string;
  version: string;
  fonntSize?: string;
}

export const VersionNumberLoginPage = ({
  textColor = "white",
  version,
  fonntSize = "18px",
}: VersionNumberLoginPageProps) => {
  return (
    <div style={{ color: textColor, fontSize: fonntSize }}>
      <span>
        {version} powered by{" "}
        <a
          style={{ color: textColor }}
          href="https://cismet.de/"
          target="_cismet"
        >
          cismet GmbH
        </a>{" "}
        auf Basis von{" "}
        <a
          style={{ color: textColor }}
          href="http://leafletjs.com/"
          target="_cismet"
        >
          Leaflet
        </a>{" "}
        und{" "}
        <a
          style={{ color: textColor }}
          href="https://github.com/cismet/carma"
          target="_cismet"
        >
          carma
        </a>{" "}
        (
        <a
          style={{ color: textColor }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://cismet.de/datenschutzerklaerung.html"
        >
          Datenschutzerklärung
        </a>{" "}
        |{" "}
        <a
          style={{ color: textColor }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://cismet.de/impressum.html"
        >
          Impressum
        </a>
        )
      </span>
    </div>
  );
};
