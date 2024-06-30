import type { Metadata } from "next";
import { Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";

const creteRound = Crete_Round({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-creteRound",
});

const workSans = Work_Sans({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-workSans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dili017.uz"),
  title: "Diyorbek dasturlashga oid maqolalar",
  description:
    "Dasturlash haqida maqolalar, yangiliklar, maslahatlar va dasturlash haqidagi so'nggi xabarlar.",
  authors: [{ name: "Sulaymonov Diyorbek", url: "https://diyor-dev.uz" }],
  icons: { icon: "/favicon.png" },
  keywords:
    "Dasturlash haqida maqolalar, yangiliklar, maslahatlar va dasturlash haqidagi so'nggi xabarlar, Diyorbek blogi, diyorbek's blog, dili017, Diyorbek Sulaymonov, diyordev, diyor-dev, sulaymonov diyorbek, developers news, developerdiyorbek, diyorbekdeveloper",
  openGraph: {
    title: "Diyorbek dasturlashga oid maqolalar",
    description:
      "Dasturlash haqida maqolalar, yangiliklar, maslahatlar va dasturlash haqidagi so'nggi xabarlar.",
    type: "website",
    url: "https://dili017.uz",
    locale: "en_EN",
    images:
      "https://lh3.googleusercontent.com/pw/AP1GczMY8bWabI0Pb2d0rtRXQisIjewIxleTbbjssR6KUAjH02ipnrf1oNYec3AGUonA7PcIxI6ew0DFz90DryXOJdpJpXQNfaRER8pGYsHmzJ3IUhRIXacOJ6rONf1RKG0ZQZfof40dlx_xdWhNyI1a5JwW=w960-h1280-s-no-gm?authuser=0",
    countryName: "Uzbekistan",
    siteName: "Diyorbek's blog, dili017",
    emails: "diyorbeksulaymonov70@gmail.com",
  },
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${creteRound.variable} ${workSans.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false} />
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
