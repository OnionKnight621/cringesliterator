"use strict";
const constants_1 = require("./constants");
function transliterate(text, lang = constants_1.LANGUAGES.LAT) {
    let fromLang = constants_1.LAT;
    let toLang = constants_1.LAT_CRI;
    let result = text;
    if (lang.toUpperCase() === constants_1.LANGUAGES.CYR) {
        fromLang = constants_1.CYR;
        toLang = constants_1.CYR_CRI;
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
module.exports = transliterate;
