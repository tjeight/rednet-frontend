import type { Metadata } from "next";
import "@/styles/root-layout.css";
import { fonts } from "@/lib/fonts";
import { ThemeProvider } from "@/lib/providers/theme-provider";

export const metadata: Metadata = {
  title: "Next Essential",
  description:
    "Next Essential - An Essential Template to build an Modern Next.js application with all the essentials included.",
  icons: {
    icon: "favicon.png",
  },
  openGraph: {
    title: "Next Essential",
    description:
      "Next Essential - An Essential Template to build an Modern Next.js application with all the essentials included.",
    url: "https://radium.vgseven.com",
    siteName: "Next Essential",
    images: [
      {
        url: "https://dlaiwpar81okkqcb.public.blob.vercel-storage.com/vgseven/vgseven-banner.png",
        width: 800,
        height: 600,
        alt: "Next Essential",
      },
      {
        url: "https://dlaiwpar81okkqcb.public.blob.vercel-storage.com/vgseven/vgseven-banner.png",
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
    title: "Next Essential",
    description:
      "Next Essential - An Essential Template to build an Modern Next.js application with all the essentials included.",
    images: [
      "https://dlaiwpar81okkqcb.public.blob.vercel-storage.com/vgseven/vgseven-banner.png",
    ],
  },
  metadataBase: new URL("https://vgseven.com"),
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
      className={`${fonts.GeistSans.variable} ${fonts.GeistMono.variable} font-geistSans`}
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
