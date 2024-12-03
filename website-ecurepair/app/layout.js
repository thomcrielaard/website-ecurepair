import CookieBanner from "@/components/modules/CookieBanner";
import GoogleAnalytics from "@/components/modules/GoogleAnalytics";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-LQZEPWRDLE" />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
