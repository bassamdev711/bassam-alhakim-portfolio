import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TIF Luxury Perfume & AI Concierge | بسام الحكيم",
  description:
    "تطبيق وموقع TIF للعطور الفاخرة مع عرض 3D التفاعلي ومساعد الذكاء الاصطناعي Keiro المدعوم بـ Gemini API، تم تطويره بواسطة المهندس بسام الحكيم باستخدام Next.js 16 و Three.js.",
  alternates: {
    canonical: "/projects/tif",
  },
  openGraph: {
    title: "TIF Luxury Perfume & AI Concierge | بسام الحكيم",
    description:
      "تطبيق وموقع TIF للعطور الفاخرة مع عرض 3D التفاعلي ومساعد الذكاء الاصطناعي Keiro، تم تطويره بواسطة المهندس بسام الحكيم.",
    url: "https://bassam-alhakim-portfolio.vercel.app/projects/tif",
    siteName: "Bassam Alhakim Portfolio | معرض أعمال بسام الحكيم",
    locale: "ar_SA",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TIF Luxury Perfume Project by Bassam Alhakim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TIF Luxury Perfume & AI Concierge | بسام الحكيم",
    description:
      "تطبيق وموقع TIF للعطور الفاخرة مع عرض 3D التفاعلي ومساعد الذكاء الاصطناعي Keiro، تم تطويره بواسطة المهندس بسام الحكيم.",
    images: ["/og-image.png"],
  },
};

export default function TIFLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
