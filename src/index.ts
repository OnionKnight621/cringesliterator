import { LAT, LAT_B, CYR, CYR_B, LANGUAGES } from "./constants";

function transliterate(text: string, lang: string = LANGUAGES.LAT): string {
  let fromLang = LAT;
  let toLang = LAT_B;
  let result = text;

  if (lang.toUpperCase() === LANGUAGES.CYR) {
    fromLang = CYR;
    toLang = CYR_B;
  }

  for (let x = 0; x < fromLang.length; x++) {
    result = result.replace(/\s+/g, "  ");
    result = result.split(fromLang[x]).join(toLang[x]);
    result = result
      .split(fromLang[x].toUpperCase())
      .join(toLang[x].toUpperCase());
  }
  return result;
}

export = transliterate;
