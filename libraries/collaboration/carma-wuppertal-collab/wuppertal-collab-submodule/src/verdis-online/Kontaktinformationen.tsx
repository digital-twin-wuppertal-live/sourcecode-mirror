type KontaktinformationenProps = {
  textColor?: string;
  fontSize?: string;
};
export const Kontaktinformationen = ({
  textColor = "white",
  fontSize = "18px",
}: KontaktinformationenProps) => {
  return (
    <>
      <h4 style={{ color: textColor, fontSize: fontSize }}>Stadt Wuppertal</h4>
      <h4 style={{ color: textColor, fontSize: fontSize }}>
        Vermessung, Katasteramt und Geodaten
      </h4>
      <h4 style={{ color: textColor, fontSize: fontSize }}>
        102.23 Kommunalservice Liegenschaftskataster
      </h4>
      <h4 style={{ color: textColor, fontSize: fontSize }}>
        <a
          style={{ color: textColor, fontSize: fontSize }}
          href="mailto:regengeld@stadt.wuppertal.de"
        >
          regengeld@stadt.wuppertal.de
        </a>
      </h4>
    </>
  );
};
