interface I18nConfig {
  locales: Array<string>;
  defaultLocale: string;
}

const i18nConfig: I18nConfig = {
  locales: ["ko", "en"],
  defaultLocale: "ko",
} as const;

export default i18nConfig;
