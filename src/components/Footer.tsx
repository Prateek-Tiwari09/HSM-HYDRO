import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronRight,
} from "lucide-react";
import { PRODUCTS, SERVICES, OFFICES, COMPANY } from "../data/company";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#CBD5E1]">
      <div className="container-x py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Column 1: Company */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 border border-white/10 text-[#F97316] font-heading font-extrabold text-sm">
                HSM
              </div>
              <div>
                <div className="font-heading font-bold text-[15px] text-white">
                  HSM Hydro Control
                </div>
                <div className="text-[11px] text-white/50 font-medium tracking-wide">
                  PVT. LTD.
                </div>
              </div>
            </div>
            <p className="text-[14px] leading-relaxed text-white/70 max-w-sm">
              {COMPANY.description} ISO 9001:2015 certified. Incorporated in 2015.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://hsmhcpl.com"
                aria-label="Website"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 border border-white/10 text-white/60 hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-colors"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="mailto:sales@hsmhcpl.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 border border-white/10 text-white/60 hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-white font-semibold text-[14px] mb-5 tracking-wide uppercase">
              Products
            </h4>
            <ul className="space-y-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="group inline-flex items-center gap-1 text-[13.5px] text-white/65 hover:text-[#F97316] transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-white font-semibold text-[14px] mb-5 tracking-wide uppercase">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group inline-flex items-center gap-1 text-[13.5px] text-white/65 hover:text-[#F97316] transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#F97316]"
                >
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-white font-semibold text-[14px] mb-5 tracking-wide uppercase">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="h-4 w-4 text-[#F97316] mt-0.5 flex-shrink-0" />
                <div className="text-[13.5px] leading-relaxed text-white/70">
                  <div className="font-medium text-white/90 mb-0.5">
                    {OFFICES[0].type}
                  </div>
                  {OFFICES[0].address}
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="h-4 w-4 text-[#F97316] mt-0.5 flex-shrink-0" />
                <div className="text-[13.5px] text-white/70 space-y-0.5">
                  {OFFICES[0].phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/-/g, "")}`}
                      className="block hover:text-[#F97316] transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="h-4 w-4 text-[#F97316] mt-0.5 flex-shrink-0" />
                <div className="text-[13.5px] text-white/70 space-y-0.5">
                  {OFFICES[0].emails.map((e) => (
                    <a
                      key={e}
                      href={`mailto:${e}`}
                      className="block hover:text-[#F97316] transition-colors"
                    >
                      {e}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12.5px] text-white/50">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[12.5px] text-white/50">
            <Link to="/privacy-policy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white/80 transition-colors">
              Terms of Service
            </Link>
            <a href="/sitemap.xml" className="hover:text-white/80 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
