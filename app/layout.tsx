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
  metadataBase: new URL("https://test-blog.sammi.ac"),
  title: "Diyorbek dasturlashga oid maqolalar",
  description:
    "Dasturlash haqida maqolalar, yangiliklar, maslahatlar va dasturlash haqidagi so'nggi xabarlar.",
  authors: [{ name: "Sulaymonov Diyorbek", url: "https://diyor-dev.uz" }],
  icons: { icon: "/favicon.png" },
  keywords:
    "Dasturlash haqida maqolalar, yangiliklar, maslahatlar va dasturlash haqidagi so'nggi xabarlar, Diyorbek blogi, diyorbek's blog",
  openGraph: {
    title: "Diyorbek dasturlashga oid maqolalar",
    description:
      "Dasturlash haqida maqolalar, yangiliklar, maslahatlar va dasturlash haqidagi so'nggi xabarlar.",
    type: "website",
    url: "https://test-blog.sammi.ac",
    locale: "en_EN",
    images: "https://media.graphassets.com/kXL006lyRnW46IKTHdHs",
    countryName: "Uzbekistan",
    siteName: "Diyorbek's blog",
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
