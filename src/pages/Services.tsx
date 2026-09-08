import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Wrench,
  Cog,
  MoveVertical,
  Search,
  CalendarCheck,
  Plug,
  RefreshCw,
  ClipboardCheck,
} from "lucide-react";
import { SERVICES } from "../data/company";

const serviceIcons = [
  Cog,
  Wrench,
  MoveVertical,
  Search,
  CalendarCheck,
  Plug,
  RefreshCw,
  ClipboardCheck,
];

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0F172A] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container-x relative py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-5 text-[#F97316]">
              <span className="h-px w-6 bg-[#F97316]/60" />
              OUR SERVICES
            </div>
            <h1 className="font-heading text-[38px] md:text-[48px] font-extrabold leading-[1.05] text-white">
              Hydraulic Services, Repair & Support
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-white/75 max-w-2xl">
                      Shri Ramraj Engineering provides cylinder repair and modification,
                      sealing solutions, metalizing, machining and hard chrome plating
                      services for heavy industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {SERVICES.map((s, i) => {
              const Icon = serviceIcons[i] || Wrench;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group rounded-xl border border-[#E2E8F0] bg-white p-6 hover:shadow-lg hover:border-[#F97316]/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11.5px] font-semibold uppercase tracking-wide text-[#94A3B8] group-hover:text-[#F97316] transition-colors">
                      Service 0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-[18px] font-bold text-[#0F172A] mb-2 group-hover:text-[#F97316] transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#64748B] mb-5">
                    {s.shortDescription}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#F97316]">
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands note */}
      <section className="py-16 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-4 text-[#F97316]">
                <span className="h-px w-6 bg-current opacity-50" />
                BRANDS WE SERVICE
              </div>
              <h2 className="font-heading text-[30px] md:text-[36px] font-bold leading-tight text-[#0F172A]">
                Experienced Across All Major Hydraulic Brands
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#475569]">
                Our technicians have deep hands-on experience servicing and
                repairing hydraulic components from all leading global OEMs.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Piston Rod Repair",
                "Parker",
                "Seal Groove Machining",
                "Sauer Danfoss",
                "Shaft Repair",
                "Metalizing",
                "Yuken",
                "Hagglunds",
                "Other OEMs",
              ].map((b) => (
                <div
                  key={b}
                  className="flex items-center justify-center text-center rounded-lg border border-[#E2E8F0] bg-white p-4 text-[13px] font-semibold text-[#0F172A] hover:border-[#F97316]/40 transition-colors"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F172A] text-white">
        <div className="container-x py-14 md:py-16 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-[28px] md:text-[36px] font-bold leading-tight text-white">
            Have a hydraulic system that needs attention?
          </h2>
          <p className="mt-4 text-[15px] text-white/70 leading-relaxed">
            No matter which industrial application you work in, the Shri Ramraj Engineering team will help you
            achieve high performance, long-term reliability, and maximum
            productivity with your hydraulic equipment.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-6 py-3.5 text-[14.5px] font-semibold text-white hover:bg-[#EA580C] transition-colors"
            >
              Request Service <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+919967886168"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-[14.5px] font-semibold text-white hover:bg-white/5 transition-colors"
            >
              Call +91 9967886168
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
