const { LAT, LAT_B, CYR, CYR_B, LANGUAGES } = require( "./constants");

const transliterate = (text, lang = LANGUAGES.LAT) => {
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
    result = result.split(fromLang[x].toUpperCase()).join(toLang[x].toUpperCase());
  }
  return result;
};

module.exports = transliterate;