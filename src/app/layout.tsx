
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deezer | Search App 💜",
  description: "A search app for Deezer tracks using Deezer API and Discogs API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="fr"
      suppressHydrationWarning
    >
      <link rel="icon" href="/deezer-favicon.png" />
      <body
        className={`antialiased`}
      >
           {children}
      </body>
    </html>
  );
}
