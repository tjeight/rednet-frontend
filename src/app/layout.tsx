import type { Metadata } from "next";
import "@/styles/root-layout.css";
import { fonts } from "@/lib/fonts";
import { ThemeProvider } from "@/lib/providers/theme";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Next Essential | Elementary Unified Starter",
  description:
    "Unified Starter - Next Essential, An Essential Template to start an modern next.js application with all the essentials configured.",
  icons: {
    icon: "favicon.png",
  },
  openGraph: {
    title: "Next Essential | Elementary Unified Starter",
    description:
      "Unified Starter - Next Essential, An Essential Template to start an modern next.js application with all the essentials configured.",
    url: "https://elementary.vgseven.com",
    siteName: "Next Essential | Elementary Unified Starter",
    images: [
      {
        url: "/elementary-banner.png",
        width: 800,
        height: 600,
        alt: "Next Essential",
      },
      {
        url: "/elementary-banner.png",
        width: 1800,
        height: 1600,
        alt: "Next Essential",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Essential | Elementary Unified Starter",
    description:
      "Unified Starter - Next Essential, An Essential Template to start an modern next.js application with all the essentials configured.",
    images: ["/elementary-banner.png"],
  },
  metadataBase: new URL("https://elementary.vgseven.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        fonts.GeistSans.variable,
        fonts.GeistMono.variable,
        "font-geistMono"
      )}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
