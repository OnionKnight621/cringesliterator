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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.REPLACE_REGEXP = exports.LANGUAGES = exports.CRI_ENDING = exports.identifyLanguage = exports.transliterate = exports.constants = void 0;
const constants_1 = __importStar(require("./constants"));
exports.constants = constants_1.default;
Object.defineProperty(exports, "CRI_ENDING", { enumerable: true, get: function () { return constants_1.CRI_ENDING; } });
Object.defineProperty(exports, "LANGUAGES", { enumerable: true, get: function () { return constants_1.LANGUAGES; } });
Object.defineProperty(exports, "REPLACE_REGEXP", { enumerable: true, get: function () { return constants_1.REPLACE_REGEXP; } });
const transliterator_1 = __importDefault(require("./transliterator"));
exports.transliterate = transliterator_1.default;
const utils_1 = require("./utils");
Object.defineProperty(exports, "identifyLanguage", { enumerable: true, get: function () { return utils_1.identifyLanguage; } });
