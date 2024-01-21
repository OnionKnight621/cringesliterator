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
Object.defineProperty(exports, "__esModule", { value: true });
exports.identifyLanguage = void 0;
const constants_1 = __importStar(require("./constants"));
const LAT_ALPHABET = constants_1.default.LAT.join("");
const CYR_ALPHABET = constants_1.default.CYR.join("");
const LAT_CRI_ALPHABET = constants_1.default.LAT_CRI.join("");
const CYR_CRI_ALPHABET = constants_1.default.CYR_CRI.join("");
function identifyLanguage(input) {
    const clearedInput = input.replace(constants_1.REPLACE_REGEXP, "");
    const languages = {
        LAT: new RegExp(`^[${LAT_ALPHABET}]+$`, "gi"),
        CYR: new RegExp(`^[${CYR_ALPHABET}]+$`, "gi"),
        LAT_CRI: new RegExp(`^[${LAT_CRI_ALPHABET}]+$`, "gi"),
        CYR_CRI: new RegExp(`^[${CYR_CRI_ALPHABET}]+$`, "gi"),
    };
    let lang = constants_1.LANGUAGES.CYR;
    // @ts-ignore
    Object.entries(languages).forEach(([key, value]) => {
        if (value.test(clearedInput) == true) {
            lang = key;
        }
    });
    return lang;
}
exports.identifyLanguage = identifyLanguage;
