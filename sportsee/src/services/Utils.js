/**
 * Translates a given data value to its corresponding translated string.
 * @param {string} data - The data value to be translated.
 * @returns {string} The translated value, or an empty string if no translation exists.
 */
export const translateName = (data) => {
  const translations = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  return translations[data] || "";
};

export default {
  translateName,
};