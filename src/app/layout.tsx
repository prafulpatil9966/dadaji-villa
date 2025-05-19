import type { Metadata } from "next";
import './styles/fonts.scss';
import "./globals.css";
import Navigation from "./components/navigation";
import ScrollProgressCircle from "./components/ScrollProgressCircle/ScrollProgressCircle"
import Footer from "./components/footer";
import ClientLayout from "./components/ClientLayout";

export const metadata: Metadata = {
  title: "Dadaji Villa",
  description: "Your Perfect Escape, Your Home Away From Home",
  icons: {
    icon: "/favicon-dadaji.ico",
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
        className={`antialiased`}
      >
        <Navigation />
        <ClientLayout>
          {children}
        </ClientLayout>
        <ScrollProgressCircle />
        <Footer />
      </body>
    </html>
  );
}
