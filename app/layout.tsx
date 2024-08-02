import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import AuthProvider from "./auth/Provider";

// React Context is unavailable in server components
// Cant use client when exporting Metadata
// make a separate component (AuthPrivider) and wrap with sessionProvider, and make
// that component a client component "use client"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App",
  description: "Mark's Class Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <AuthProvider>
          {/* <div className="flex flex-col h-screen justify-between"> */}
          <Navbar />
          <main className="p-5">{children}</main>
          <MyFooter />
          {/* </div> */}
        </AuthProvider>
      </body>
    </html>
  );
}
