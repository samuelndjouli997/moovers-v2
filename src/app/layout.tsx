
import { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Moovers - Votre plateforme audio interactive",
  description: "Découvrez et écoutez des podcasts captivants sur Moovers, votre plateforme audio personnalisée.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="fr"
    >
      <head>
        <link rel="icon" href="/moovers-green.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/moovers-green.svg" />

        <link rel="stylesheet" href="https://use.typekit.net/xlr5bqj.css" />
      </head> 
      <body
        className={`antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
