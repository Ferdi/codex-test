import type { Metadata } from "next";
import "./globals.css";
import { MainNav } from "../components/MainNav";

export const metadata: Metadata = {
  title: "MIT Learning Hub",
  description: "Explore MIT learning opportunities from free materials to professional credentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
