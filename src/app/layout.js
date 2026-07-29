import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";


export const metadata = {
  title: "Amaze PMS – India's Premier Property Management Company",
  description:
    "Amaze Property Management Solutions Pvt Ltd provides integrated facility management services including Security, Housekeeping, MEP, Pest Control, Landscaping, and more across India. 15,000+ workforce, 200+ clients, PAN India presence.",
  keywords:
    "property management, facility management, housekeeping, security services, MEP services, pest control, landscaping, Hyderabad, India",
  openGraph: {
    title: "Amaze PMS – India's Premier Property Management Company",
    description:
      "Integrated Facility Management Solutions with 15,000+ professionals across India.",
    url: "https://www.amazepms.com",
    siteName: "Amaze PMS",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-navy text-white antialiased overflow-x-hidden">
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </LenisProvider>
      </body>
    </html>
  );
}
