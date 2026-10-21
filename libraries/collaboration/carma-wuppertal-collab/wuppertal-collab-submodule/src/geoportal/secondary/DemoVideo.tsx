import stepOne from "./assets/m-vide-demo.mp4";

export const DemoVideo = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <li>
        Die Schaltfläche aktiviert einen Modus zum Messen von Strecken und/oder
        Flächen, nicht nur eine einmalige Messung.
      </li>
      <li>
        Linienzüge schließt man durch erneutes Anklicken des letzten Punktes
        („Doppelklick auf Endpunkt“), Flächen durch erneutes Anklicken des
        Startpunktes.
      </li>
      <li>
        Man kann mehrere Messgeometrien anlegen, deren Verwaltung über die
        Info-Box erfolgt.
      </li>
      <li>
        Die Messgeometrien werden im Browser-Cache gespeichert und stehen
        dadurch nach einem erneuten Starten des Geoportals weiterhin zur
        Verfügung.
      </li>
      <div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "-10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <video width="100%" height="383px" controls muted>
            <source src={stepOne} type="video/mp4" />
          </video>
        </div>
      </div>
    </ul>
  );
};
