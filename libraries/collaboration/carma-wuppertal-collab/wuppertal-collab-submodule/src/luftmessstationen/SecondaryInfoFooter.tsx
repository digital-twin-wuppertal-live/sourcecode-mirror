interface SecondaryInfoFooterProps {
  version: string;
}

export const SecondaryInfoFooter = ({ version }: SecondaryInfoFooterProps) => {
  return (
    <table
      style={{
        width: "100%",
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              textAlign: "left",
              verticalAlign: "bottom",
              paddingRight: "30px",
            }}
          >
            <div>
              <span style={{ fontSize: "11px" }}>
                <div>
                  <b>Teilzwilling Luftmessstationskarte #{version}:</b>{" "}
                  <a href="https://cismet.de/" target="_cismet">
                    cismet GmbH
                  </a>{" "}
                  auf Basis von{" "}
                  <a href="http://leafletjs.com/" target="_more">
                    Leaflet
                  </a>{" "}
                  und{" "}
                  <a href="https://cismet.de/#refs" target="_cismet">
                    cids | WuNDa
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
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
