// tag responsible for enhanced alphabets
export const CRI_ENDING = "_CRI";

export enum LANGUAGES {
  LAT = "LAT",
  CYR = "CYR",
  LAT_CRI = "LAT_CRI",
  CYR_CRI = "CYR_CRI",
}

const constants = {
  CYR: "а б в г ґ д е є ж з и й к л м н о п р с т у ф х ц ч ш щ ь ю я і".split(
    / +/g
  ),
  CYR_CRI:
    "升 五 乃 厂 广 亼 仨 仨 米 ろ 认 计 长 入 从 廾 口 刀 尸 匚 丅 丫 中 乂 凵 丩 山 山 ら 扣 兄 工".split(
      / +/g
    ),
  LAT: "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(/ +/g),
  LAT_CRI:
    "升 乃 匚 力 仨 下 马 卄 工 亅 长 乚 从 认 口 尸 贝 尺 丂 丅 凵 V 山 乂 丫 乙".split(
      / +/g
    ),
  LANGUAGES,
};

export const REPLACE_REGEXP = new RegExp(
  `[^${constants.CYR.join("")}${constants.LAT.join("")}${constants.CYR_CRI.join("")}${
    constants.LAT_CRI.join("")
  }]+`,
  "gi"
);

export default constants;
