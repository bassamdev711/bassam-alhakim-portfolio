import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "House of Spices E-Commerce | بسام الحكيم",
  description:
    "تطبيق House of Spices لبيع التوابل اليمنية التراثية المدعوم بالذكاء الاصطناعي، تم تطويره بواسطة المهندس بسام الحكيم باستخدام Next.js و Laravel.",
  alternates: {
    canonical: "/projects/house-of-spices",
  },
  openGraph: {
    title: "House of Spices E-Commerce | بسام الحكيم",
    description:
      "تطبيق House of Spices لبيع التوابل اليمنية التراثية المدعوم بالذكاء الاصطناعي، تم تطويره بواسطة المهندس بسام الحكيم باستخدام Next.js و Laravel.",
    url: "https://bassam-alhakim-portfolio.vercel.app/projects/house-of-spices",
    siteName: "Bassam Alhakim Portfolio | معرض أعمال بسام الحكيم",
    locale: "ar_SA",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "House of Spices Project by Bassam Alhakim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House of Spices E-Commerce | بسام الحكيم",
    description:
      "تطبيق House of Spices لبيع التوابل اليمنية التراثية المدعوم بالذكاء الاصطناعي، تم تطويره بواسطة المهندس بسام الحكيم.",
    images: ["/og-image.png"],
  },
};

export default function HouseOfSpicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
