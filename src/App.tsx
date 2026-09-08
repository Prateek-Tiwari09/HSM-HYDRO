import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCTAs from "./components/FloatingCTAs";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Infrastructure from "./pages/Infrastructure";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import {
  Blog,
  BlogDetail,
  Enquiry,
  FAQ,
  PrivacyPolicy,
  TermsOfService,
  Testimonials,
} from "./pages/AdditionalPages";

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": { title: "HSM Hydro Control Pvt. Ltd. | Complete Hydraulic Solutions", description: "Hydraulic engineering, manufacturing, installation and service support from HSM Hydro Control Pvt. Ltd." },
  "/about": { title: "About HSM Hydro Control | Hydraulic Engineering & Manufacturing", description: "Learn about HSM Hydro Control, its engineering capabilities, manufacturing facility and service support." },
  "/products": { title: "Hydraulic Products | HSM Hydro Control", description: "Explore hydraulic power units, cylinders, test benches, components and filtration systems from HSM Hydro Control." },
  "/services": { title: "Hydraulic Services | HSM Hydro Control", description: "Engineering, installation, commissioning, repair, troubleshooting and maintenance support for hydraulic systems." },
  "/infrastructure": { title: "Infrastructure | HSM Hydro Control", description: "Explore the manufacturing and service capabilities supporting HSM hydraulic solutions." },
  "/contact": { title: "Contact HSM Hydro Control | Bangalore & Pune", description: "Contact HSM Hydro Control for hydraulic products, engineering support and service enquiries." },
  "/faq": { title: "Hydraulic FAQ | HSM Hydro Control", description: "Answers about HSM hydraulic products, services, customization and enquiry process." },
  "/testimonials": { title: "Customer Experience | HSM Hydro Control", description: "Learn how HSM approaches reliable hydraulic engineering and customer support." },
  "/enquiry": { title: "Hydraulic Enquiry | HSM Hydro Control", description: "Share your industrial hydraulic product or service requirement with HSM Hydro Control." },
  "/blog": { title: "Hydraulic Engineering Insights | HSM Hydro Control", description: "Practical notes about hydraulic equipment, industrial applications and system maintenance." },
  "/privacy-policy": { title: "Privacy Policy | HSM Hydro Control", description: "Privacy information for the HSM Hydro Control website." },
  "/terms-of-service": { title: "Terms of Service | HSM Hydro Control", description: "Website terms of service for HSM Hydro Control." },
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    const meta = pageMeta[pathname] ?? (pathname.startsWith("/products/")
      ? { title: "Hydraulic Product | HSM Hydro Control", description: "Explore this hydraulic product from HSM Hydro Control." }
      : pathname.startsWith("/services/")
        ? { title: "Hydraulic Service | HSM Hydro Control", description: "Explore this hydraulic service from HSM Hydro Control." }
        : pathname.startsWith("/blog/")
          ? { title: "Hydraulic Insight | HSM Hydro Control", description: "Read an engineering insight from HSM Hydro Control." }
          : { title: "Page Not Found | HSM Hydro Control", description: "The requested HSM Hydro Control page could not be found." });
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-white text-[#334155]">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <FloatingCTAs />
      </div>
    </HashRouter>
  );
}
