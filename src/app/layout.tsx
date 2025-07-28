import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vanderson Cangaty - Desenvolvedor Front End",
    template: "%s | Vanderson Cangaty"
  },
  description: "Desenvolvedor Front End especializado em React, TypeScript e tecnologias modernas. Criando soluções digitais inovadoras e experiências de usuário excepcionais.",
  keywords: [
    "Vanderson Cangaty",
    "Desenvolvedor Front End",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Frontend",
    "Web Development",
    "UI/UX",
    "Portfolio",
    "São Paulo"
  ],
  authors: [{ name: "Vanderson Cangaty" }],
  creator: "Vanderson Cangaty",
  publisher: "Vanderson Cangaty",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vandersoncangaty.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vandersoncangaty.dev",
    title: "Vanderson Cangaty - Desenvolvedor Front End",
    description: "Desenvolvedor Front End especializado em React, TypeScript e tecnologias modernas. Criando soluções digitais inovadoras.",
    siteName: "Vanderson Cangaty Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vanderson Cangaty - Desenvolvedor Front End",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanderson Cangaty - Desenvolvedor Front End",
    description: "Desenvolvedor Front End especializado em React, TypeScript e tecnologias modernas.",
    images: ["/images/og-image.jpg"],
    creator: "@vandersoncangaty",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground min-h-screen`}
      >
        <div className="relative min-h-screen bg-background">
          {/* Grid pattern background */}
          <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" />
          
          {/* Gradient overlay */}
          <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-background/80 pointer-events-none" />
          
          {/* Main content */}
          <div className="relative z-10">
            {children}
          </div>
          
          {/* Floating neon orbs for ambient lighting */}
          <div className="fixed top-20 left-20 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float pointer-events-none" />
          <div className="fixed bottom-20 right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '1s' }} />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-green/5 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
        </div>
      </body>
    </html>
  );
}

