import { LangString } from "@model/appconfig.model";

export const getTextFromApi = (
  langStrings: LangString,
  currentLanguage: string
): string => {
  if (langStrings.en == null && langStrings.vi==null) {
    return "";
  }
  if (currentLanguage === "en" && langStrings.en) {
    return langStrings.en;
  } else if (currentLanguage === "vi" && langStrings.vi) {
    return langStrings.vi;
  } else {
    return langStrings.en;
  }
};
