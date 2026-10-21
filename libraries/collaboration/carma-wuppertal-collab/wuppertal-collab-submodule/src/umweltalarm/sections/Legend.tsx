import Section from "react-cismap/topicmaps/menu/Section";
import legende_wupperverband from "../assets/Legende_Wupperverband.png";
import legende_brwasserverband from "../assets/Legende_BRWasserverband.png";
import legende_verrohrung from "../assets/Legende_Verrohrung.png";
import legende_schmutzkanal from "../assets/Legende_Schmutzkanal.png";
import legende_regenkanal from "../assets/Legende_Regenkanal.png";
import legende_mischkanal from "../assets/Legende_Mischkanal.png";
import legende_privatkanal from "../assets/Legende_Privatkanal.png";
import legende_fliessrichtung from "../assets/Legende_Fliessrichtung.png";
import legende_schachtdeckel from "../assets/Legende_Schachtdeckel.png";
import legende_trinkwasserbrunnen from "../assets/Legende_Trinkwasserbrunnen.png";

export const Legend = () => {
  return (
    <Section
      key="legend"
      sectionKey="legend"
      sectionTitle="Legende der Fachdaten"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <img
                style={{ padding: 5, marginRight: 15 }}
                width="50px"
                alt="Legendenbild"
                src={legende_wupperverband}
              />
              Gewässer Wupperverband
            </li>
            <li>
              <img
                style={{ padding: 5, marginRight: 15 }}
                width="50px"
                alt="Legendenbild"
                src={legende_brwasserverband}
              />
              Gewässer Bergisch-Rheinischer Wasserverband / Ruhrverband
            </li>
            <li>
              <img
                style={{ padding: 5, marginRight: 15 }}
                width="50px"
                alt="Legendenbild"
                src={legende_verrohrung}
              />
              Gewässerverrohrungen
            </li>
            <li>
              <img
                style={{ padding: 5, marginRight: 15 }}
                width="50px"
                alt="Legendenbild"
                src={legende_schmutzkanal}
              />
              Schmutzwasserkanal
            </li>
            <li>
              <img
                style={{ padding: 5, marginRight: 15 }}
                width="50px"
                alt="Legendenbild"
                src={legende_regenkanal}
              />
              Regenwasserkanal
            </li>
            <li>
              <img
                style={{ padding: 5, marginRight: 15 }}
                width="50px"
                alt="Legendenbild"
                src={legende_mischkanal}
              />
              Mischwasserkanal
            </li>
            <li>
              <img
                style={{ padding: 5, marginRight: 15 }}
                width="50px"
                alt="Legendenbild"
                src={legende_privatkanal}
              />
              Privatkanal
            </li>
            <li>
              <img
                style={{ padding: 5, marginRight: 15 }}
                width="50px"
                alt="Legendenbild"
                src={legende_fliessrichtung}
              />
              Fließrichtungspfeil (jeweils in der Farbe des zugehörigen
              Kanalnetzes)
            </li>
            <li>
              <img
                style={{ padding: 5, marginRight: 15 }}
                width="50px"
                alt="Legendenbild"
                src={legende_schachtdeckel}
              />
              Schachtdeckel (jeweils in der Farbe des zugehörigen Kanalnetzes)
            </li>
            <li>
              <img
                style={{
                  padding: 5,
                  margin: 10,
                  marginRight: 24,
                  marginTop: 10,
                }}
                width="30px"
                alt="Legendenbild"
                src={legende_trinkwasserbrunnen}
              />
              Trinkwasserbrunnen
            </li>
          </ul>
        </div>
      }
    />
  );
};
