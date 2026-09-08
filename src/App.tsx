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
  "/": { title: "Shri Ramraj Engineering | Hydraulic Engineering Solutions", description: "Design consultation, hydraulic and pneumatic cylinder repair, machine parts, sealing solutions and metalizing services." },
  "/about": { title: "About Shri Ramraj Engineering", description: "Learn about Shri Ramraj Engineering's engineering team, industrial repair expertise, quality practices and associations." },
  "/products": { title: "Hydraulic Products & Expertise | Shri Ramraj Engineering", description: "Explore cylinder expertise, rotary unions, mill blocks, sensor housings, seals and fittings." },
  "/services": { title: "Engineering Services | Shri Ramraj Engineering", description: "Piston rod repair, seal groove machining, shaft repair, metalizing, plating and design consultation." },
  "/infrastructure": { title: "Machines & Facilities | Shri Ramraj Engineering", description: "Review the machines, hydraulic test bench and measurement instruments listed by Shri Ramraj Engineering." },
  "/contact": { title: "Contact Shri Ramraj Engineering", description: "Contact Shri Ramraj Engineering at its registered office or works for engineering enquiries." },
  "/faq": { title: "FAQ | Shri Ramraj Engineering", description: "Answers about Shri Ramraj Engineering's hydraulic products, repairs, services and enquiries." },
  "/testimonials": { title: "Customer Experience | Shri Ramraj Engineering", description: "Learn about Shri Ramraj Engineering's quality and service approach." },
  "/enquiry": { title: "Engineering Enquiry | Shri Ramraj Engineering", description: "Share your hydraulic, pneumatic or industrial machining requirement with Shri Ramraj Engineering." },
  "/blog": { title: "Engineering Insights | Shri Ramraj Engineering", description: "Practical notes about hydraulic cylinders, industrial repair and engineering services." },
  "/privacy-policy": { title: "Privacy Policy | Shri Ramraj Engineering", description: "Privacy information for the Shri Ramraj Engineering website." },
  "/terms-of-service": { title: "Terms of Service | Shri Ramraj Engineering", description: "Website terms of service for Shri Ramraj Engineering." },
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    const meta = pageMeta[pathname] ?? (pathname.startsWith("/products/")
      ? { title: "Hydraulic Expertise | Shri Ramraj Engineering", description: "Explore this expertise from Shri Ramraj Engineering." }
      : pathname.startsWith("/services/")
        ? { title: "Engineering Service | Shri Ramraj Engineering", description: "Explore this service from Shri Ramraj Engineering." }
        : pathname.startsWith("/blog/")
          ? { title: "Engineering Insight | Shri Ramraj Engineering", description: "Read an engineering insight from Shri Ramraj Engineering." }
          : { title: "Page Not Found | Shri Ramraj Engineering", description: "The requested Shri Ramraj Engineering page could not be found." });
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
