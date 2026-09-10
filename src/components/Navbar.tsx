import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { PRODUCTS, SERVICES } from "../data/company";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products", hasDropdown: true, items: PRODUCTS },
  { label: "Services", to: "/services", hasDropdown: true, items: SERVICES },
  { label: "Infrastructure", to: "/infrastructure" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 border-b border-[#E2E8F0] shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
          : "bg-white border-b border-white"
      }`}
    >
      <nav className="container-x flex h-16 lg:h-[72px] items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Shri Ramraj Engineering Home">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0F172A] text-[#F97316] font-heading font-extrabold text-sm tracking-tight">
            <img src={`${import.meta.env.BASE_URL}assets/shri-ramraj-engineering-logo.jpg`} alt="Shri Ramraj Engineering logo" className="h-10 w-10 rounded-md object-cover" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-bold text-[15px] text-[#0F172A]">
              Shri Ramraj Engineering
            </span>
            <span className="text-[11px] text-[#64748B] font-medium tracking-wide">
              
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.to)}
                  onMouseLeave={() => link.hasDropdown && setOpenDropdown(null)}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `relative inline-flex items-center gap-1 px-3.5 py-2 text-[14px] font-medium rounded-md transition-colors ${
                        isActive
                          ? "text-[#0F172A]"
                          : "text-[#475569] hover:text-[#0F172A]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.label}</span>
                        {link.hasDropdown && (
                          <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                        )}
                        <span
                          className={`absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 bg-[#F97316] transition-opacity ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>

              {/* Dropdown */}
              {link.hasDropdown && openDropdown === link.to && (
                <div className="absolute left-0 top-full pt-3 w-[280px]">
                  <div className="rounded-lg border border-[#E2E8F0] bg-white shadow-lg p-2">
                    {(link.items as any[]).map((item) => (
                      <Link
                        key={item.slug}
                        to={`${link.to}/${item.slug}`}
                        className="block px-3 py-2.5 rounded-md text-[13.5px] text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="h-px bg-[#E2E8F0] my-1" />
                    <Link
                      to={link.to}
                      className="block px-3 py-2.5 rounded-md text-[13px] font-semibold text-[#F97316] hover:bg-[#FFF7ED] transition-colors"
                    >
                      View All {link.label} →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 lg:gap-3">
          <a
            href="tel:+919967886168"
            className="hidden md:inline-flex items-center gap-2 text-[13.5px] font-medium text-[#475569] hover:text-[#0F172A] mr-1"
          >
            <Phone className="h-4 w-4 text-[#F97316]" />
            +91 9967886168
          </a>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-md bg-[#F97316] px-4 py-2.5 text-[13.5px] font-semibold text-white shadow-sm hover:bg-[#EA580C] transition-colors"
          >
            Get a Quote
          </Link>
          <button
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-md border border-[#E2E8F0] text-[#0F172A]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] flex">
          <div
            className="absolute inset-0 bg-[#0F172A]/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-[70%] max-w-sm flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between h-16 px-5 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0F172A] text-[#F97316] font-heading font-extrabold text-[12px]">
                  <img src={`${import.meta.env.BASE_URL}assets/shri-ramraj-engineering-logo.jpg`} alt="Shri Ramraj Engineering logo" className="h-9 w-9 rounded-md object-cover" />
                </div>
                <span className="font-heading font-bold text-[15px] text-[#0F172A]">
                  Shri Ramraj Engineering
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-md text-[#475569] hover:bg-[#F8FAFC]"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-4">
              {navLinks.map((link) => {
                const isOpen = openDropdown === link.to;
                return (
                  <div key={link.to} className="border-b border-[#F1F5F9] last:border-0">
                    <div className="flex items-center">
                      <NavLink
                        to={link.to}
                        end={link.to === "/"}
                        onClick={() => !link.hasDropdown && setMobileOpen(false)}
                        className={({ isActive }) =>
                          `flex-1 px-3 py-3.5 text-[15px] font-semibold ${
                            isActive ? "text-[#0F172A]" : "text-[#1E293B]"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                      {link.hasDropdown && (
                        <button
                          onClick={() =>
                            setOpenDropdown(isOpen ? null : link.to)
                          }
                          className="px-3 py-3.5 text-[#64748B]"
                          aria-expanded={isOpen}
                          aria-label={`Toggle ${link.label} menu`}
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {link.hasDropdown && isOpen && (
                      <div className="pb-3 pl-3">
                        {(link.items as any[]).map((item) => (
                          <Link
                            key={item.slug}
                            to={`${link.to}/${item.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2.5 text-[14px] text-[#475569] hover:text-[#F97316]"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="border-t border-[#E2E8F0] p-4 space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center rounded-md bg-[#F97316] px-4 py-3 text-[14px] font-semibold text-white"
              >
                Get a Quote
              </Link>
              <a
                href="tel:+919967886168"
                className="flex w-full items-center justify-center gap-2 rounded-md border border-[#E2E8F0] px-4 py-3 text-[14px] font-semibold text-[#0F172A]"
              >
                <Phone className="h-4 w-4 text-[#F97316]" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
