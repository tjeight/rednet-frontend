import type { Metadata } from "next";
import "@/styles/root-layout.css";
import { fonts } from "@/lib/fonts";
import { ThemeProvider } from "@/lib/providers/theme";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Unified Next Essential | Elementary",
  description:
    "Unified Next Essential - An Essential Template to get started with Next.js application with all the essentials included...",
  icons: {
    icon: "favicon.png",
  },
  openGraph: {
    title: "Unified Next Essential | Elementary",
    description:
      "Unified Next Essential - An Essential Template to get started with Next.js application with all the essentials included...",
    url: "https://elementary.vgseven.com",
    siteName: "Unified Next Essential | Elementary",
    images: [
      {
        url: "https://odouepjkxheu5esn.public.blob.vercel-storage.com/vgseven/vgseven-banner.png",
        width: 800,
        height: 600,
        alt: "Next Essential",
      },
      {
        url: "https://odouepjkxheu5esn.public.blob.vercel-storage.com/vgseven/vgseven-banner.png",
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
    title: "Unified Next Essential | Elementary",
    description:
      "Unified Next Essential - An Essential Template to get started with Next.js application with all the essentials included...",
    images: [
      "https://odouepjkxheu5esn.public.blob.vercel-storage.com/vgseven/vgseven-banner.png",
    ],
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
        "font-geistSans"
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
