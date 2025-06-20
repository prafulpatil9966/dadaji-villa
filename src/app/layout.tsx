import type { Metadata } from "next";
import './styles/fonts.scss';
import "./globals.css";
import Navigation from "./components/navigation";
import ScrollProgressCircle from "./components/ScrollProgressCircle/ScrollProgressCircle"
import Footer from "./components/Footer/footer";
import ClientLayout from "./components/ClientLayout";
import InitialLoaderWrapper from "./components/global-ui/InitialLoaderWrapper/InitialLoaderWrapper";

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
        <InitialLoaderWrapper>
          <ClientLayout>
          <Navigation />
            {children}

          <ScrollProgressCircle />
          <Footer />
          </ClientLayout>
        </InitialLoaderWrapper>
      </body>
    </html>
  );
}
