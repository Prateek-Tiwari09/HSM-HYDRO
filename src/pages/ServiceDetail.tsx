import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ClipboardList,
  ShieldCheck,
  Headphones,
  Gauge,
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

const serviceIcons = [Cog, Wrench, MoveVertical, Search, CalendarCheck, Plug, RefreshCw, ClipboardCheck];
const serviceImages: Record<string, string> = {
  "piston-rod-repair": "piston-rod-repair.jpg",
  "seal-groove-machining": "hydraulic-seals.jpg",
  "shaft-coupling-repair": "shaft-repair.jpg",
  "metalizing-services": "hydraulic-equipment.jpg",
  "hard-chrome-plating": "hydraulic-cylinder-component.jpg",
  "design-consultation": "industrial-machinery.jpg",
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const idx = SERVICES.findIndex((s) => s.slug === slug);
  const Icon = serviceIcons[idx] || Wrench;

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  // Standard process steps
  const process = [
    {
      title: "Inspection & Assessment",
      description:
        "We receive your equipment, perform a complete disassembly and thorough inspection to identify all worn or failed components.",
    },
    {
      title: "Quotation & Approval",
      description:
        "A detailed quotation is provided with a clear scope of work, parts to be replaced, and expected turnaround time.",
    },
    {
      title: "Repair / Reconditioning",
      description:
        "Our technicians carry out repair work using genuine spare parts, followed by assembly to OEM specifications.",
    },
    {
      title: "Testing & Validation",
      description:
        "Every repaired unit is tested on our in-house test benches to ensure it meets performance specifications before return.",
    },
  ];

  const benefits = [
    "Quick repair turnaround time",
    "Genuine spare parts",
    "In-house test bench verification",
    "Experienced factory-trained technicians",
    "Service for all major global brands",
    "On-site troubleshooting support",
  ];

  return (
    <main>
      {/* Breadcrumb */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container-x py-4">
          <nav className="text-[12.5px] text-[#64748B]">
            <Link to="/" className="hover:text-[#F97316]">
              Home
            </Link>
            <span className="mx-2 text-[#CBD5E1]">/</span>
            <Link to="/services" className="hover:text-[#F97316]">
              Services
            </Link>
            <span className="mx-2 text-[#CBD5E1]">/</span>
            <span className="text-[#0F172A] font-medium">{service.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white border-b border-[#E2E8F0]">
        <div className="container-x py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-4 text-[#F97316]">
                <span className="h-px w-6 bg-current opacity-50" />
                SERVICE
              </div>
              <h1 className="font-heading text-[34px] md:text-[44px] font-extrabold leading-[1.1] text-[#0F172A]">
                {service.name}
              </h1>
              <p className="mt-5 text-[16px] leading-relaxed text-[#475569] max-w-xl">
                {service.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-6 py-3.5 text-[14px] font-semibold text-white hover:bg-[#EA580C] transition-colors"
                >
                  Request This Service <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+919967886168"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#E2E8F0] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0F172A] hover:border-[#0F172A]/30 transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#F97316]" />
                  +91 9967886168
                </a>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] bg-[#0F172A] p-8 md:p-10 text-white">
                <img src={`${import.meta.env.BASE_URL}assets/${serviceImages[service.slug]}`} alt={service.name} className="absolute inset-0 h-full w-full object-cover opacity-[0.16]" />
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#F97316] mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading text-[22px] font-bold text-white mb-4">
                    What We Provide
                  </h3>
                  <ul className="space-y-2.5">
                    {(service.features || [
                      "Complete inspection & assessment",
                      "Genuine replacement parts",
                      "Assembly to OEM specifications",
                      "Performance testing",
                      "On-site support where required",
                    ]).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[14px] text-white/80">
                        <CheckCircle2 className="h-4 w-4 text-[#F97316] mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-4 text-[#F97316]">
              <span className="h-px w-6 bg-current opacity-50" />
              OUR PROCESS
            </div>
            <h2 className="font-heading text-[30px] md:text-[36px] font-bold leading-tight text-[#0F172A]">
              A Simple, Transparent Process
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <div
                key={p.title}
                className="relative rounded-xl border border-[#E2E8F0] bg-white p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#F97316]">
                    <ClipboardList className="h-5 w-5" />
                  </div>
                  <span className="font-heading text-[28px] font-extrabold text-[#F97316]/20 leading-none">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-[16px] font-bold text-[#0F172A] mb-2">
                  {p.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#64748B]">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-4 text-[#F97316]">
                <span className="h-px w-6 bg-current opacity-50" />
                BENEFITS
              </div>
              <h2 className="font-heading text-[30px] md:text-[36px] font-bold leading-tight text-[#0F172A]">
                Why Shri Ramraj Engineering?
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#475569]">
                We combine technical expertise, OEM-grade spare parts and
                in-house testing to deliver repairs that last — reducing your
                downtime and total cost of ownership.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 rounded-lg border border-[#E2E8F0] p-4"
                >
                  <ShieldCheck className="h-5 w-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-[14px] text-[#334155] leading-relaxed">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-[#0F172A] text-white">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-4 text-[#F97316]">
                <span className="h-px w-6 bg-[#F97316]/50" />
                BRANDS SUPPORTED
              </div>
              <h2 className="font-heading text-[28px] md:text-[34px] font-bold leading-tight text-white">
                We Service All Major OEM Brands
              </h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-white/70">
                Our work is grounded in application knowledge, strict inspection
                criteria, testing methods and acceptance norms.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {["Repair", "Cladding", "Welding", "Metal Spraying", "Inspection", "Testing", "Custom Seals", "Machining", "+ More"].map(
                (b) => (
                  <div
                    key={b}
                    className="flex items-center justify-center rounded-md border border-white/10 bg-white/[0.04] py-3 text-[12.5px] font-semibold text-white/85"
                  >
                    {b}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-heading text-[26px] md:text-[32px] font-bold text-[#0F172A]">
              Related Services
            </h2>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0F172A] hover:text-[#F97316]"
            >
              All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/services/${r.slug}`}
                className="group relative overflow-hidden rounded-xl border border-[#E2E8F0] p-5 hover:shadow-md hover:border-[#F97316]/40 transition-all"
              >
                <img src={`${import.meta.env.BASE_URL}assets/${serviceImages[r.slug]}`} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.07]" />
                <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#F97316]">
                    <Headphones className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="font-heading text-[16px] font-bold text-[#0F172A] mb-1.5 group-hover:text-[#F97316] transition-colors">
                  {r.name}
                </h3>
                <p className="text-[13px] text-[#64748B] line-clamp-2">
                  {r.shortDescription}
                </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="container-x py-14 md:py-16">
          <div className="rounded-2xl bg-[#F97316] text-white p-8 md:p-12 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 items-center relative">
              <div>
                <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-3 text-white/80">
                  <Gauge className="h-3.5 w-3.5" />
                  GET STARTED
                </div>
                <h2 className="font-heading text-[26px] md:text-[32px] font-bold leading-tight text-white">
                  Ready to get your equipment serviced?
                </h2>
                <p className="mt-2 text-[14.5px] text-white/90 leading-relaxed">
                  Send us an enquiry or speak with our service team directly
                  for a quick turnaround assessment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-[14px] font-semibold text-[#0F172A] hover:bg-white/90 transition-colors"
                >
                  Send Enquiry <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+919967886168"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/50 px-5 py-3 text-[14px] font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
