export const CANCEL_UPLOAD = "Cancel upload";
export const CONFIRM_UPLOAD = "Confirm upload";
export const getAvatarLabel = (name: string) => `${name}'s profile picture`;
export const INVALID_FILE = "Invalid file.";
export const SELECT_AN_IMAGE = "Select an image";
export const UPLOAD_PENDING_ERROR =
  "Confirm or cancel the picture upload before saving.";

export const DISPLAY_LOCATION = "Display location";
export const INVALID_COORDINATE =
  "Missing coordinates, please select a location with the map above";
export const LOCATION_ACCURACY = "Location accuracy";
export const MAP_IS_BLANK =
  "Missing coordinates, start by searching for a location with the map above";
export const DISPLAY_LOCATION_NOT_EMPTY = "Please fill in a display address";
export const LOCATION_PUBLICLY_VISIBLE = "This will be publicly visible";
export const NO_LOCATION_RESULTS_TEXT =
  "No results. Try searching for just the city.";
export const NO_MAP_SUPPORT = "Your device doesn't support the map. Sorry!";
export const SEARCH_FOR_LOCATION = "Search for location";
export const PRESS_ENTER_TO_SEARCH = "Press enter to search";
export const getRadiusText = (radius: number) => `${radius} meters`;
export const LOCATION_WARN = `Click and drag the circle below to show people the approximate location of your home. Make sure your home is not at the center of the circle, so people will not know the exact location.`;

//these come from https://github.com/unicode-org/cldr-json/tree/master/cldr-json/cldr-dates-modern/main
//but really https://stackoverflow.com/a/9893752
//all D and M have been replaced with DD and MM, because otherwise keyboard input is buggy
export const dateFormats = {
  "af-ZA": "YYYY/MM/DD",
  "am-ET": "DD/MM/YYYY",
  "ar-AE": "DD/MM/YYYY",
  "ar-BH": "DD/MM/YYYY",
  "ar-DZ": "DD-MM-YYYY",
  "ar-EG": "DD/MM/YYYY",
  "ar-IQ": "DD/MM/YYYY",
  "ar-JO": "DD/MM/YYYY",
  "ar-KW": "DD/MM/YYYY",
  "ar-LB": "DD/MM/YYYY",
  "ar-LY": "DD/MM/YYYY",
  "ar-MA": "DD-MM-YYYY",
  "ar-OM": "DD/MM/YYYY",
  "ar-QA": "DD/MM/YYYY",
  "ar-SA": "DD/MM/YY",
  "ar-SY": "DD/MM/YYYY",
  "ar-TN": "DD-MM-YYYY",
  "ar-YE": "DD/MM/YYYY",
  "arn-CL": "DD-MM-YYYY",
  "as-IN": "DD-MM-YYYY",
  "az-Cyrl-AZ": "DD.MM.YYYY",
  "az-Latn-AZ": "DD.MM.YYYY",
  "ba-RU": "DD.MM.YY",
  "be-BY": "DD.MM.YYYY",
  "bg-BG": "DD.MM.YYYY",
  "bn-BD": "DD-MM-YY",
  "bn-IN": "DD-MM-YY",
  "bo-CN": "YYYY/MM/DD",
  "br-FR": "DD/MM/YYYY",
  "bs-Cyrl-BA": "DD.MM.YYYY",
  "bs-Latn-BA": "DD.MM.YYYY",
  "ca-ES": "DD/MM/YYYY",
  "co-FR": "DD/MM/YYYY",
  "cs-CZ": "DD.MM.YYYY",
  "cy-GB": "DD/MM/YYYY",
  "da-DK": "DD-MM-YYYY",
  "de-AT": "DD.MM.YYYY",
  "de-CH": "DD.MM.YYYY",
  "de-DE": "DD.MM.YYYY",
  "de-LI": "DD.MM.YYYY",
  "de-LU": "DD.MM.YYYY",
  "dsb-DE": "DD. MM. YYYY",
  "dv-MV": "DD/MM/YY",
  "el-GR": "DD/MM/YYYY",
  "en-029": "MM/DD/YYYY",
  "en-AU": "DD/MM/YYYY",
  "en-BZ": "DD/MM/YYYY",
  "en-CA": "DD/MM/YYYY",
  "en-GB": "DD/MM/YYYY",
  "en-IE": "DD/MM/YYYY",
  "en-IN": "DD-MM-YYYY",
  "en-JM": "DD/MM/YYYY",
  "en-MY": "DD/MM/YYYY",
  "en-NZ": "DD/MM/YYYY",
  "en-PH": "MM/DD/YYYY",
  "en-SG": "DD/MM/YYYY",
  "en-TT": "DD/MM/YYYY",
  "en-US": "MM/DD/YYYY",
  "en-ZA": "YYYY/MM/DD",
  "en-ZW": "MM/DD/YYYY",
  "es-AR": "DD/MM/YYYY",
  "es-BO": "DD/MM/YYYY",
  "es-CL": "DD-MM-YYYY",
  "es-CO": "DD/MM/YYYY",
  "es-CR": "DD/MM/YYYY",
  "es-DO": "DD/MM/YYYY",
  "es-EC": "DD/MM/YYYY",
  "es-ES": "DD/MM/YYYY",
  "es-GT": "DD/MM/YYYY",
  "es-HN": "DD/MM/YYYY",
  "es-MX": "DD/MM/YYYY",
  "es-NI": "DD/MM/YYYY",
  "es-PA": "MM/DD/YYYY",
  "es-PE": "DD/MM/YYYY",
  "es-PR": "DD/MM/YYYY",
  "es-PY": "DD/MM/YYYY",
  "es-SV": "DD/MM/YYYY",
  "es-US": "MM/DD/YYYY",
  "es-UY": "DD/MM/YYYY",
  "es-VE": "DD/MM/YYYY",
  "et-EE": "DD.MM.YYYY",
  "eu-ES": "YYYY/MM/DD",
  "fa-IR": "MM/DD/YYYY",
  "fi-FI": "DD.MM.YYYY",
  "fil-PH": "MM/DD/YYYY",
  "fo-FO": "DD-MM-YYYY",
  "fr-BE": "DD/MM/YYYY",
  "fr-CA": "YYYY-MM-DD",
  "fr-CH": "DD.MM.YYYY",
  "fr-FR": "DD/MM/YYYY",
  "fr-LU": "DD/MM/YYYY",
  "fr-MC": "DD/MM/YYYY",
  "fy-NL": "DD-MM-YYYY",
  "ga-IE": "DD/MM/YYYY",
  "gd-GB": "DD/MM/YYYY",
  "gl-ES": "DD/MM/YY",
  "gsw-FR": "DD/MM/YYYY",
  "gu-IN": "DD-MM-YY",
  "ha-Latn-NG": "DD/MM/YYYY",
  "he-IL": "DD/MM/YYYY",
  "hi-IN": "DD-MM-YYYY",
  "hr-BA": "DD.MM.YYYY.",
  "hr-HR": "DD.MM.YYYY",
  "hsb-DE": "DD. MM. YYYY",
  "hu-HU": "YYYY. MM. DD.",
  "hy-AM": "DD.MM.YYYY",
  "id-ID": "DD/MM/YYYY",
  "ig-NG": "DD/MM/YYYY",
  "ii-CN": "YYYY/MM/DD",
  "is-IS": "DD.MM.YYYY",
  "it-CH": "DD.MM.YYYY",
  "it-IT": "DD/MM/YYYY",
  "iu-Cans-CA": "DD/MM/YYYY",
  "iu-Latn-CA": "DD/MM/YYYY",
  "ja-JP": "YYYY/MM/DD",
  "ka-GE": "DD.MM.YYYY",
  "kk-KZ": "DD.MM.YYYY",
  "kl-GL": "DD-MM-YYYY",
  "km-KH": "YYYY-MM-DD",
  "kn-IN": "DD-MM-YY",
  "ko-KR": "YYYY-MM-DD",
  "kok-IN": "DD-MM-YYYY",
  "ky-KG": "DD.MM.YY",
  "lb-LU": "DD/MM/YYYY",
  "lo-LA": "DD/MM/YYYY",
  "lt-LT": "YYYY.MM.DD",
  "lv-LV": "YYYY.MM.DD.",
  "mi-NZ": "DD/MM/YYYY",
  "mk-MK": "DD.MM.YYYY",
  "ml-IN": "DD-MM-YY",
  "mn-MN": "YY.MM.DD",
  "mn-Mong-CN": "YYYY/MM/DD",
  "moh-CA": "MM/DD/YYYY",
  "mr-IN": "DD-MM-YYYY",
  "ms-BN": "DD/MM/YYYY",
  "ms-MY": "DD/MM/YYYY",
  "mt-MT": "DD/MM/YYYY",
  "nb-NO": "DD.MM.YYYY",
  "ne-NP": "MM/DD/YYYY",
  "nl-BE": "DD/MM/YYYY",
  "nl-NL": "DD-MM-YYYY",
  "nn-NO": "DD.MM.YYYY",
  "nso-ZA": "YYYY/MM/DD",
  "oc-FR": "DD/MM/YYYY",
  "or-IN": "DD-MM-YY",
  "pa-IN": "DD-MM-YY",
  "pl-PL": "YYYY-MM-DD",
  "prs-AF": "DD/MM/YY",
  "ps-AF": "DD/MM/YY",
  "pt-BR": "DD/MM/YYYY",
  "pt-PT": "DD-MM-YYYY",
  "qut-GT": "DD/MM/YYYY",
  "quz-BO": "DD/MM/YYYY",
  "quz-EC": "DD/MM/YYYY",
  "quz-PE": "DD/MM/YYYY",
  "rm-CH": "DD/MM/YYYY",
  "ro-RO": "DD.MM.YYYY",
  "ru-RU": "DD.MM.YYYY",
  "rw-RW": "MM/DD/YYYY",
  "sa-IN": "DD-MM-YYYY",
  "sah-RU": "MM.DD.YYYY",
  "se-FI": "DD.MM.YYYY",
  "se-NO": "DD.MM.YYYY",
  "se-SE": "YYYY-MM-DD",
  "si-LK": "YYYY-MM-DD",
  "sk-SK": "DD. MM. YYYY",
  "sl-SI": "DD.MM.YYYY",
  "sma-NO": "DD.MM.YYYY",
  "sma-SE": "YYYY-MM-DD",
  "smj-NO": "DD.MM.YYYY",
  "smj-SE": "YYYY-MM-DD",
  "smn-FI": "DD.MM.YYYY",
  "sms-FI": "DD.MM.YYYY",
  "sq-AL": "YYYY-MM-DD",
  "sr-Cyrl-BA": "DD.MM.YYYY",
  "sr-Cyrl-CS": "DD.MM.YYYY",
  "sr-Cyrl-ME": "DD.MM.YYYY",
  "sr-Cyrl-RS": "DD.MM.YYYY",
  "sr-Latn-BA": "DD.MM.YYYY",
  "sr-Latn-CS": "DD.MM.YYYY",
  "sr-Latn-ME": "DD.MM.YYYY",
  "sr-Latn-RS": "DD.MM.YYYY",
  "sv-FI": "DD.MM.YYYY",
  "sv-SE": "YYYY-MM-DD",
  "sw-KE": "MM/DD/YYYY",
  "syr-SY": "DD/MM/YYYY",
  "ta-IN": "DD-MM-YYYY",
  "te-IN": "DD-MM-YY",
  "tg-Cyrl-TJ": "DD.MM.YY",
  "th-TH": "DD/MM/YYYY",
  "tk-TM": "DD.MM.YY",
  "tn-ZA": "YYYY/MM/DD",
  "tr-TR": "DD.MM.YYYY",
  "tt-RU": "DD.MM.YYYY",
  "tzm-Latn-DZ": "DD-MM-YYYY",
  "ug-CN": "YYYY-MM-DD",
  "uk-UA": "DD.MM.YYYY",
  "ur-PK": "DD/MM/YYYY",
  "uz-Cyrl-UZ": "DD.MM.YYYY",
  "uz-Latn-UZ": "DD/MM YYYY",
  "vi-VN": "DD/MM/YYYY",
  "wo-SN": "DD/MM/YYYY",
  "xh-ZA": "YYYY/MM/DD",
  "yo-NG": "DD/MM/YYYY",
  "zh-CN": "YYYY/MM/DD",
  "zh-HK": "DD/MM/YYYY",
  "zh-MO": "DD/MM/YYYY",
  "zh-SG": "DD/MM/YYYY",
  "zh-TW": "YYYY/MM/DD",
  "zu-ZA": "YYYY/MM/DD",
};
