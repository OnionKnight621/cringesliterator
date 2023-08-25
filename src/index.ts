import constants, { LANGUAGES, CRI_ENDING } from "./constants";

function getOppositeTag(inputTag: LANGUAGES, endingTag: string) {
  const hasEnding = inputTag.includes(endingTag);

  return hasEnding ? inputTag.replace(endingTag, '') : `${inputTag}${endingTag}`;
}

function transliterate(text: string, languageFrom = LANGUAGES.LAT): string {
  let fromLang = constants[languageFrom];
  let toLang = constants[getOppositeTag(languageFrom, CRI_ENDING) as LANGUAGES];
  let result = text;

  for (let x = 0; x < fromLang.length; x++) {
    result = result.replace(/\s+/g, "  ");
    result = result.split(fromLang[x]).join(toLang[x]);
    result = result
      .split(fromLang[x].toUpperCase())
      .join(toLang[x].toUpperCase());
  }

  return result;
}

export = {
  transliterate,
  constants
};
