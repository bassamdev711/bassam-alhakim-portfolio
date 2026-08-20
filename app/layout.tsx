import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bassam-alhakim-portfolio.vercel.app"),
  title: {
    template: "%s | Bassam Alhakim",
    default: "Bassam Alhakim — Software Engineer & Product Builder",
  },
  description:
    "Bassam Alhakim is a software engineer and product builder focused on reliable architecture, full-stack delivery, expressive interfaces, and digital products that hold up in the real world.",
  keywords: [
    "بسام الحكيم",
    "بسام عبد الحكيم",
    "Bassam Alhakim",
    "Bassam Abdulhakim",
    "Bassam Al Hakim",
    "Bassam",
    "Product Engineer",
    "Software Engineer",
    "Full Stack Developer",
    "Flutter Developer",
    "Laravel Developer",
    "Next.js Developer",
    "Web Developer",
    "Mobile Developer",
    "Portfolio",
    "Software Portfolio",
    "مطور برمجيات",
    "مهندس برمجيات",
    "مهندس منتجات",
    "مطور Flutter",
    "مطور Laravel",
    "مطور Next.js",
    "أعمال برمجية",
    "معرض أعمال",
  ],
  authors: [{ name: "بسام الحكيم (Bassam Alhakim)", url: "https://bassam-alhakim-portfolio.vercel.app" }],
  creator: "Bassam Alhakim",
  publisher: "Bassam Alhakim",
  category: "Technology & Software Engineering",
  applicationName: "Bassam Alhakim Portfolio",
  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/",
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/icon.png",
    apple: "/developer.jpg",
  },
  verification: {
    google: "X8QmasHRQfR3Oo14BVSa0kRzrh9hwyJ2_uvPlQxmuMM",
  },
  openGraph: {
    title: "Bassam Alhakim — Software Engineer & Product Builder",
    description:
      "Software engineer and product builder focused on reliable systems, full-stack delivery, and expressive digital products.",
    url: "https://bassam-alhakim-portfolio.vercel.app",
    siteName: "Bassam Alhakim — Software Engineer & Product Builder",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bassam Alhakim Portfolio - Product Engineer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bassam Alhakim — Software Engineer & Product Builder",
    description:
      "Software engineer and product builder focused on reliable systems, full-stack delivery, and expressive digital products.",
    images: ["/og-image.png"],
    creator: "@bassamdev711",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://bassam-alhakim-portfolio.vercel.app/#person",
      name: "Bassam Alhakim",
      alternateName: [
        "بسام الحكيم",
        "بسام عبد الحكيم",
        "Bassam Abdulhakim",
        "Bassam Al Hakim",
      ],
      jobTitle: "Software Engineer & Product Builder",
      description:
        "Software engineer and product builder specializing in scalable systems, full-stack delivery, Next.js, Flutter, Laravel, and thoughtful digital experiences.",
      url: "https://bassam-alhakim-portfolio.vercel.app",
      image: "https://bassam-alhakim-portfolio.vercel.app/developer.jpg",
      email: "bassam.alhakim.dev@gmail.com",
      telephone: "+967780500363",
      sameAs: [
        "https://github.com/bassamdev711",
        "https://www.linkedin.com/in/bassam-al-hakim-b4007a40b",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://bassam-alhakim-portfolio.vercel.app/#profilepage",
      url: "https://bassam-alhakim-portfolio.vercel.app",
      name: "بسام الحكيم | Bassam Alhakim - Portfolio",
      isPartOf: {
        "@id": "https://bassam-alhakim-portfolio.vercel.app/#website",
      },
      about: {
        "@id": "https://bassam-alhakim-portfolio.vercel.app/#person",
      },
      mainEntity: {
        "@id": "https://bassam-alhakim-portfolio.vercel.app/#person",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://bassam-alhakim-portfolio.vercel.app/#website",
      url: "https://bassam-alhakim-portfolio.vercel.app",
      name: "Bassam Alhakim Portfolio | معرض أعمال بسام الحكيم",
      description:
        "معرض أعمال المهندس بسام الحكيم، مطور برمجيات ومهندس منتجات رقمية.",
      publisher: {
        "@id": "https://bassam-alhakim-portfolio.vercel.app/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
