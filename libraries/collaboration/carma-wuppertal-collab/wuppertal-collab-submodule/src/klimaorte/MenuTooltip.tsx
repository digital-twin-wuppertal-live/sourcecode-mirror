export const MenuTooltip = ({ appMode = "ORTE" }) => {
  return appMode === "ORTE"
    ? "Filter | Einstellungen | Anleitung"
    : "Einstellungen | Anleitung";
};
