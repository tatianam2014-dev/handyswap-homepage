import "./globals.css";
import type { ReactNode } from "react";
import Header from "./components/Header";

export const metadata = {
  title: "Handyswap – New iPhone & Samsung",
  description: "Smart prices. German warranty.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
