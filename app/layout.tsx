import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deep Ideas — one useful lens a day",
  description: "Current, cross-disciplinary ideas worth knowing — plus how to bring them into real conversation without sounding like a lecture.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
