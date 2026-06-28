import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant ERP & POS System | بسام الحكيم",
  description:
    "نظام إدارة المطاعم ونقاط البيع (Restaurant ERP & POS System) متعدد الفروع مع مزامنة فورية للطلبات، تم تطويره بواسطة المهندس بسام الحكيم باستخدام Next.js و Laravel و PostgreSQL.",
  alternates: {
    canonical: "/projects/restaurant-erp",
  },
  openGraph: {
    title: "Restaurant ERP & POS System | بسام الحكيم",
    description:
      "نظام إدارة المطاعم ونقاط البيع متعدد الفروع مع مزامنة فورية للطلبات، تم تطويره بواسطة المهندس بسام الحكيم.",
    url: "https://bassam-alhakim-portfolio.vercel.app/projects/restaurant-erp",
    siteName: "Bassam Alhakim Portfolio | معرض أعمال بسام الحكيم",
    locale: "ar_SA",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Restaurant ERP Project by Bassam Alhakim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant ERP & POS System | بسام الحكيم",
    description:
      "نظام إدارة المطاعم ونقاط البيع متعدد الفروع مع مزامنة فورية للطلبات، تم تطويره بواسطة المهندس بسام الحكيم.",
    images: ["/og-image.png"],
  },
};

export default function RestaurantERPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
