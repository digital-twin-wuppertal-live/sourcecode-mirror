export const normalizeInput = (properties: {
  standort: string;
  adresse: string;
  status: string;
  foto: string;
  zusatzinfo: string;
  bemerkung: string;
  versatz: string;
  vohandene_stecker: string;
  parkgebuehr: string;
  anzahl: string;
  abrechnung: string;
  offen: string;
  strom: string;
  betreiber: string;
  betreiberadresse: string;
  betreiberort: string;
  betreiberhomepage: string;
  betreiberemail: string;
  betreibertelefon: string;
  gruen: string;
  schnellladestation: string;
  [key: string]: string;
}) => {
  let stecker: { url: string; text: string }[] = [];
  let zugang: string[] = [];
  let oeffnungszeiten = "";
  for (let key in properties) {
    if (key.startsWith("stecker")) {
      const value = properties[key];
      const parts = value.split("!").map((part) => part.trim());
      stecker.push({ url: parts[0] + ".png", text: parts[1] });
    }

    if (key.startsWith("zugang")) {
      const value = properties[key];

      zugang.push(value);
    }
  }

  if (properties.offen) {
    if (properties.offen.includes("24-7")) {
      oeffnungszeiten = "24/7";
    } else {
      oeffnungszeiten = properties.offen;
    }
  }

  return {
    stecker,
    zugang,
    oeffnungszeiten,
    ...properties,
  };
};
