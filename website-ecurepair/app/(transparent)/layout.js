import "@/styles/globals.css";
import "@/styles/pagination.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CookieBanner from "@/components/modules/CookieBanner";
import GoogleAnalytics from "@/components/modules/GoogleAnalytics";

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-LQZEPWRDLE" />
        <Navbar transparent />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
