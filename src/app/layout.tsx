import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CodeBgProvider } from "@/components/providers/CodeBgProvider";
import { CodeBackgroundWrapper } from "@/components/ui/CodeBackgroundWrapper";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Peter Ejeh — Software Developer | DevOps Learner | Data Enthusiast",
  description:
    "Portfolio of Peter Ejeh — building clean, reliable web applications with Next.js, Django, AWS, and Python.",
  keywords: ["Peter Ejeh", "Software Developer", "Portfolio", "Next.js", "Django", "AWS", "Python", "DevOps"],
  authors: [{ name: "Peter Ejeh" }],
  creator: "Peter Ejeh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://peterejeh.dev",
    title: "Peter Ejeh — Software Developer",
    description:
      "Building clean, reliable web applications with modern tools and scalable cloud practices.",
    siteName: "Peter Ejeh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Peter Ejeh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Ejeh — Software Developer",
    description: "Building clean, reliable web applications with modern tools.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange={false}
        >
          <CodeBgProvider>
            <CodeBackgroundWrapper />
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: "rgba(15, 15, 25, 0.95)",
                  color: "rgb(240, 240, 255)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  backdropFilter: "blur(16px)",
                  fontFamily: "Inter, sans-serif",
                },
                success: {
                  iconTheme: { primary: "#a78bfa", secondary: "#0a0a0f" },
                },
                error: {
                  iconTheme: { primary: "#f87171", secondary: "#0a0a0f" },
                },
              }}
            />
          </CodeBgProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
