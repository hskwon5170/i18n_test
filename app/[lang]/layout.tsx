import React from "react";
import initTranslations from "@/app/i18n";
import TranslationProvider from "./TranslationProvider";

// JSON 여러개 => 배열 추가
const namespaces = ["translation", "main"];

interface Props {
  children: React.ReactNode;
  params: { lang: string };
}

export default async function Layout({ children, params: { lang } }: Props) {
  // JSON 데이터 비동기 get
  const { resources } = await initTranslations(lang, namespaces);
  return (
    <TranslationProvider
      locale={lang}
      resources={resources}
      namespaces={namespaces}
    >
      {children}
    </TranslationProvider>
  );
}
