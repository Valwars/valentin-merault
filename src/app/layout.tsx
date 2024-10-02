import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import {ThemeProvider} from "@/components/Providers/theme-provider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Valentin MERAULT - Portfolio",
  description: "Learn more about me, my projects and my skills.",
    openGraph: {
        description: "Learn more about me, my projects and my skills.",
        title: "Valentin MERAULT - Portfolio",
        locale: "en_US",
        type: "website"
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased max-w-full overflow-x-hidden px-6`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          enableColorScheme={true}
          disableTransitionOnChange>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
