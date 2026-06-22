import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/portfolio/layout/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tahmid Hossain Ta-Seen | IT Support Engineer & Network Enthusiast",
  description:
    "Portfolio of Tahmid Hossain Ta-Seen — an IT Support Engineer specializing in network troubleshooting, hardware maintenance, and on-site support. Enthusiastic and ready to collaborate with any team.",
  keywords: [
    "Tahmid Hossain Ta-Seen",
    "IT Support Engineer",
    "Network Engineer",
    "MikroTik",
    "CCNA",
    "CompTIA A+",
    "Dhaka",
    "Bangladesh",
    "IT Support",
    "Portfolio",
  ],
  authors: [{ name: "Tahmid Hossain Ta-Seen" }],
  openGraph: {
    title: "Tahmid Hossain Ta-Seen | IT Support Engineer",
    description:
      "Enthusiastic IT Support Engineer ready to collaborate and solve problems with any team.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahmid Hossain Ta-Seen | IT Support Engineer",
    description:
      "Enthusiastic IT Support Engineer ready to collaborate and solve problems with any team.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
