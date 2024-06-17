import LanguageSelector from "@/components/language-selector";
import initTranslations from "../i18n";

interface Props {
  params: {
    lang: string;
  };
}

export default async function Page({ params: { lang } }: Props) {
  const { t } = await initTranslations(lang, ["translation"]);
  return (
    <div>
      <LanguageSelector />
      <div>{t("home_text")}</div>
    </div>
  );
}
