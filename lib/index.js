"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const constants_1 = __importStar(require("./constants"));
function getOppositeTag(inputTag, endingTag) {
    const hasEnding = inputTag.includes(endingTag);
    return hasEnding ? inputTag.replace(endingTag, '') : `${inputTag}${endingTag}`;
}
function transliterate(text, languageFrom = constants_1.LANGUAGES.LAT) {
    let fromLang = constants_1.default[languageFrom];
    let toLang = constants_1.default[getOppositeTag(languageFrom, constants_1.CRI_ENDING)];
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
module.exports = transliterate;
