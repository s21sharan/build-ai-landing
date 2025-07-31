import type { Metadata } from "next";
import { Geist, Geist_Mono, Turret_Road } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const turretRoad = Turret_Road({
  weight: "400",
  variable: "--font-turret-road",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "build.ai",
  description: "Build physical superintelligence to free humanity from manual labor",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${turretRoad.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
