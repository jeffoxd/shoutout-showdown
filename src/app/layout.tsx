import type { Metadata } from "next";
import "./globals.css";
import { zysol } from "./font";

export const metadata: Metadata = {
  title: "Shoutout Showdown",
  description: "Customize your own quizzes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        data-theme="light"
        className={`overflow-visible ${zysol.className}`}
      >
        {children}
      </body>
    </html>
  );
}
