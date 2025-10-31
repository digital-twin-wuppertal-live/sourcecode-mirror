export const MenuTitle = ({ appMode = "ORTE" }) => {
  return appMode === "ORTE"
    ? "Meine Klimaorte, Einstellungen und Kompaktanleitung"
    : "Einstellungen und Kompaktanleitung";
};
