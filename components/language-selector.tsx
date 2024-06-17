"use client";

import i18nConfig from "@/app/i18nConfig";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const [language, setLanguage] = useState("ko");
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const pathname = usePathname();

  console.log("currentLocale", currentLocale);

  const onChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    console.log("lang", lang);
    setLanguage(lang);

    if (currentLocale === i18nConfig.defaultLocale) {
      router.push("/" + lang + pathname);
    } else {
      router.push(pathname.replace(`/${currentLocale}`, `/${lang}`));
    }
  };

  return (
    <select onChange={onChangeLanguage} defaultValue={currentLocale}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}
