import { LANGUAGES } from "./constants";
declare function transliterate(text: string, languageFrom?: LANGUAGES): string;
declare const _default: {
    transliterate: typeof transliterate;
    constants: {
        CYR: string[];
        CYR_CRI: string[];
        LAT: string[];
        LAT_CRI: string[];
        LANGUAGES: typeof LANGUAGES;
    };
};
export = _default;
