import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WiFi Monitor Pro - Network Telemetry App | بسام الحكيم",
  description:
    "تطبيق WiFi Monitor Pro لمراقبة استهلاك الإنترنت وتحليل الشبكات للأندرويد، تم تطويره بواسطة المهندس بسام الحكيم باستخدام Flutter و Kotlin Native.",
  alternates: {
    canonical: "/projects/wifi-monitor-pro",
  },
  openGraph: {
    title: "WiFi Monitor Pro - Network Telemetry App | بسام الحكيم",
    description:
      "تطبيق WiFi Monitor Pro لمراقبة استهلاك الإنترنت وتحليل الشبكات للأندرويد، تم تطويره بواسطة المهندس بسام الحكيم.",
    url: "https://bassam-alhakim-portfolio.vercel.app/projects/wifi-monitor-pro",
    siteName: "Bassam Alhakim Portfolio | معرض أعمال بسام الحكيم",
    locale: "ar_SA",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WiFi Monitor Pro Project by Bassam Alhakim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WiFi Monitor Pro - Network Telemetry App | بسام الحكيم",
    description:
      "تطبيق WiFi Monitor Pro لمراقبة استهلاك الإنترنت وتحليل الشبكات للأندرويد، تم تطويره بواسطة المهندس بسام الحكيم.",
    images: ["/og-image.png"],
  },
};

export default function WiFiMonitorProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
