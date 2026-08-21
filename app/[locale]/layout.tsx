import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getLocale, locales, localeConfig, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = getLocale(rawLocale);
  const config = localeConfig[locale];

  return <div data-locale={locale} data-direction={config.dir}>{children}</div>;
}
