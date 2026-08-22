import type { Metadata } from "next";
import { headers } from "next/headers";
import { DM_Mono, Manrope } from "next/font/google";
import { getDictionary, getLocale, localeConfig, type Locale } from "@/lib/i18n";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "optional",
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  display: "optional",
  weight: ["400", "500"],
});

const baseUrl = "https://bassam-alhakim-portfolio.vercel.app";

async function requestLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  return getLocale(requestHeaders.get("x-site-locale") ?? "en");
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await requestLocale();
  const dictionary = getDictionary(locale);
  const config = localeConfig[locale];

  return {
    metadataBase: new URL(baseUrl),
    title: { template: `%s | Bassam Alhakim`, default: dictionary.metadata.title },
    description: dictionary.metadata.description,
    keywords: [
      "بسام الحكيم", "Bassam Alhakim", "Software Engineer", "مهندس برمجيات",
      "Product Engineer", "Full Stack Developer", "Flutter Developer", "Laravel Developer",
      "Next.js Developer", "Portfolio", "معرض أعمال", "Orasoft",
    ],
    authors: [{ name: "بسام الحكيم (Bassam Alhakim)", url: baseUrl }],
    creator: "Bassam Alhakim",
    publisher: "Bassam Alhakim",
    category: "Technology & Software Engineering",
    applicationName: "Bassam Alhakim Portfolio",
    alternates: {
      canonical: `/${locale}`,
      languages: { "ar-SA": "/ar", "en-US": "/en" },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
    },
    referrer: "origin-when-cross-origin",
    icons: { icon: "/icon.png", apple: "/developer.jpg" },
    verification: { google: "X8QmasHRQfR3Oo14BVSa0kRzrh9hwyJ2_uvPlQxmuMM" },
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      url: `${baseUrl}/${locale}`,
      siteName: dictionary.metadata.siteName,
      locale: config.ogLocale,
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_SA"],
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: dictionary.metadata.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      images: ["/og-image.png"],
      creator: "@bassamdev711",
    },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await requestLocale();
  const config = localeConfig[locale];
  const dictionary = getDictionary(locale);
  const personId = `${baseUrl}/${locale}#person`;
  const websiteId = `${baseUrl}/${locale}#website`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Bassam Alhakim",
        alternateName: ["بسام الحكيم", "بسام عبد الحكيم", "Bassam Abdulhakim", "Bassam Al Hakim"],
        jobTitle: dictionary.metadata.jobTitle,
        description: dictionary.metadata.description,
        url: `${baseUrl}/${locale}`,
        image: `${baseUrl}/developer.jpg`,
        email: "bassam.alhakim.dev@gmail.com",
        telephone: "+967780500363",
        sameAs: ["https://github.com/bassamdev711", "https://www.linkedin.com/in/bassam-al-hakim-b4007a40b"],
        worksFor: { "@id": "https://orasoft.vercel.app/#organization" },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${baseUrl}/${locale}`,
        name: dictionary.metadata.siteName,
        inLanguage: config.hreflang,
        description: dictionary.metadata.description,
        publisher: { "@id": personId },
      },
    ],
  };

  return (
    <html lang={locale} dir={config.dir} className={`${manrope.variable} ${dmMono.variable} h-full antialiased`}>
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></head>
      <body className="min-h-full flex flex-col font-sans selection:bg-blue-600 selection:text-white">{children}</body>
    </html>
  );
}
