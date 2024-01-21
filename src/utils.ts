import constants, { LANGUAGES, REPLACE_REGEXP } from "./constants";

const LAT_ALPHABET = constants.LAT.join("");
const CYR_ALPHABET = constants.CYR.join("");
const LAT_CRI_ALPHABET = constants.LAT_CRI.join("");
const CYR_CRI_ALPHABET = constants.CYR_CRI.join("");

function identifyLanguage(input: string) {
  const clearedInput = input.replace(REPLACE_REGEXP, "");

  const languages = {
    LAT: new RegExp(`^[${LAT_ALPHABET}]+$`, "gi"),
    CYR: new RegExp(`^[${CYR_ALPHABET}]+$`, "gi"),
    LAT_CRI: new RegExp(`^[${LAT_CRI_ALPHABET}]+$`, "gi"),
    CYR_CRI: new RegExp(`^[${CYR_CRI_ALPHABET}]+$`, "gi"),
  };

  let lang = LANGUAGES.CYR;
  // @ts-ignore
  Object.entries(languages).forEach(([key, value]) => {
    if (value.test(clearedInput) == true) {
      lang = key as LANGUAGES;
    }
  });

  return lang;
}

export { identifyLanguage };
