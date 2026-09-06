import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cog,
  Wrench,
  Hammer,
  Settings,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  CalendarDays,
  Factory,
  Users,
  Send,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import {
  COMPANY,
  OFFICES,
  PRODUCTS,
  SERVICES,
  CAPABILITIES,
  TECH_STATS,
  WHY_CHOOSE,
  INDUSTRIES,
  INFRASTRUCTURE,
} from "../data/company";

const capabilityIcons = [Cog, Hammer, Wrench, Settings];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white border-b border-[#E2E8F0]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-white" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #F1F5F9 1px, transparent 1px), linear-gradient(to bottom, #F1F5F9 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom right, rgba(0,0,0,0.25), transparent 70%)",
          }}
        />

        <div className="container-x relative py-14 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 xl:col-span-6">
              
              <h1 className="font-heading text-[38px] sm:text-[44px] lg:text-[54px] xl:text-[58px] font-extrabold leading-[1.05] text-[#0F172A] tracking-tight">
                Complete Hydraulic Solutions for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Industrial</span>
                  <span className="absolute inset-x-0 bottom-1.5 h-3 bg-[#F97316]/20 -z-0" />
                </span>{" "}
                Applications
              </h1>
              <p className="mt-5 md:mt-6 text-[16px] md:text-[17px] leading-relaxed text-[#475569] max-w-xl">
                HSM Hydro Control is a single-window solution for all your
                hydraulics requirements — custom hydraulic engineering,
                manufacturing, installation, commissioning and service support
                across India and overseas.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0F172A] px-6 py-3.5 text-[14.5px] font-semibold text-white hover:bg-[#1E293B] transition-colors"
                >
                  Explore Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-6 py-3.5 text-[14.5px] font-semibold text-white hover:bg-[#EA580C] transition-colors shadow-sm"
                >
                  Talk to an Engineer
                  <Phone className="h-4 w-4" />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
                {[
                  { icon: Award, label: "ISO 9001:2015", sub: "Certified" },
                  { icon: CalendarDays, label: "Since", sub: "2015" },
                  { icon: Wrench, label: "Engineering", sub: "& Service" },
                ].map((b) => (
                  <div
                    key={b.sub}
                    className="flex flex-col items-start rounded-lg border border-[#E2E8F0] bg-white/80 backdrop-blur p-3.5"
                  >
                    <b.icon className="h-4 w-4 text-[#F97316] mb-2" />
                    <div className="text-[11px] font-medium text-[#64748B] uppercase tracking-wide leading-tight">
                      {b.label}
                    </div>
                    <div className="text-[13px] font-semibold text-[#0F172A] leading-tight mt-0.5">
                      {b.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="lg:col-span-6 xl:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80"
                  alt="Industrial hydraulic power unit manufactured by HSM Hydro Control"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[520px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/25 via-transparent to-transparent" />
              </div>

              {/* Floating card: top-right */}
              <div className="hidden sm:flex absolute -top-4 -right-2 lg:-right-6 bg-white rounded-xl border border-[#E2E8F0] shadow-lg p-4 items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FFF7ED] text-[#F97316]">
                  <Factory className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-[#64748B] uppercase tracking-wide">
                    Facility
                  </div>
                  <div className="text-[15px] font-bold text-[#0F172A]">
                    10,000+ sq.ft.
                  </div>
                </div>
              </div>

              {/* Floating card: bottom-left */}
              <div className="hidden sm:flex absolute -bottom-4 -left-2 lg:-left-6 bg-white rounded-xl border border-[#E2E8F0] shadow-lg p-4 items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FFF7ED] text-[#F97316]">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-[#64748B] uppercase tracking-wide">
                    Team
                  </div>
                  <div className="text-[15px] font-bold text-[#0F172A]">
                    25+ Engineers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0F172A] text-white">
        <div className="container-x py-12 md:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {[
              { value: "2015", label: "Established" },
              { value: "ISO 9001:2015", label: "Certified" },
              { value: "10,000+", label: "Sq. Ft. Facility" },
              { value: "25+", label: "Team Members" },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                <div className="font-heading text-[30px] md:text-[36px] font-extrabold text-white tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-[13px] md:text-[14px] text-white/60 uppercase tracking-wide font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80"
                  alt="HSM Hydro Control manufacturing shop floor"
                  className="rounded-xl w-full h-[220px] md:h-[280px] object-cover border border-[#E2E8F0]"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
                  alt="Hydraulic cylinders at HSM facility"
                  className="rounded-xl w-full h-[220px] md:h-[280px] object-cover border border-[#E2E8F0] mt-8"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3 bg-[#0F172A] text-white rounded-xl px-5 py-4 shadow-xl w-[80%]">
                <Award className="h-8 w-8 text-[#F97316] flex-shrink-0" />
                <div>
                  <div className="text-[13px] font-semibold leading-tight">
                    Trusted by OEMs across India
                  </div>
                  <div className="text-[11.5px] text-white/60 mt-0.5">
                    Single-window hydraulic partner since 2015
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="ABOUT HSM"
                title="Engineered Hydraulics. Built to Perform."
              />
              <p className="mt-5 text-[15.5px] leading-relaxed text-[#475569]">
                {COMPANY.aboutLong[0]}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#475569]">
                We specialize in both closed-loop and open-loop hydraulic
                systems and manufacture customized power units for a wide range
                of industrial applications. We also have deep expertise in
                overhauling and repairing hydraulic pumps and motors from
                reputed global brands including Denison, Hagglunds, Bosch
                Rexroth, Danfoss, Parker, Eaton, Vickers and Yuken.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Custom hydraulic engineering",
                  "In-house manufacturing",
                  "Pump, motor & cylinder repair",
                  "Installation & commissioning",
                  "Turnkey project delivery",
                  "AMC & service support",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-[14px] text-[#334155]">
                    <CheckCircle2 className="h-4 w-4 text-[#F97316] mt-0.5 flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0F172A] hover:text-[#F97316] group transition-colors"
                >
                  Read More About HSM
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="container-x">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="Engineering Hydraulic Solutions That Work"
            description="From concept and design through manufacturing, installation, and lifelong service — we deliver complete hydraulic solutions for every stage of your equipment lifecycle."
          />

          <div className="mt-10 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAPABILITIES.map((cap, i) => {
              const Icon = capabilityIcons[i];
              return (
                <div
                  key={cap.title}
                  className="group relative rounded-xl border border-[#E2E8F0] bg-white p-6 hover:border-[#F97316]/50 hover:shadow-md transition-all"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#F97316] mb-5 group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-[17px] font-bold text-[#0F172A] mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#475569] mb-5">
                    {cap.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#F97316]"
                  >
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
            <SectionHeading
              eyebrow="OUR PRODUCTS"
              title="Our Hydraulic Products"
              description="We manufacture and supply a complete range of hydraulic equipment, all engineered to perform reliably in demanding industrial conditions."
            />
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0F172A] hover:text-[#F97316] transition-colors whitespace-nowrap"
            >
              View all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group rounded-xl border border-[#E2E8F0] bg-white overflow-hidden hover:shadow-lg hover:border-[#F97316]/40 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#F8FAFC]">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-heading text-[17px] font-bold text-[#0F172A] mb-2 group-hover:text-[#F97316] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-[#64748B] mb-4 line-clamp-2">
                    {p.shortDescription}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#F97316]">
                    View Details <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TECH CAPABILITIES (dark) */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden py-16 md:py-24">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container-x relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-4 text-[#F97316]">
              <span className="h-px w-6 bg-[#F97316]/50" />
              TECHNICAL CAPABILITIES
            </div>
            <h2 className="font-heading text-[32px] md:text-[40px] lg:text-[44px] font-bold leading-[1.1] text-white">
              Engineering & Testing Capabilities
            </h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-white/70">
              In-house design and testing for flow rates up to 750 LPM and
              pressures up to 1,200 BAR — built to handle the most demanding
              industrial hydraulic applications.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {TECH_STATS.map((s, i) => (
              <div
                key={s.label}
                className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
              >
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#F97316] mb-3">
                  0{i + 1}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-heading text-[36px] md:text-[44px] font-extrabold text-white leading-none">
                    {s.value}
                  </span>
                  <span className="font-heading text-[18px] md:text-[22px] font-bold text-[#F97316]">
                    {s.unit}
                  </span>
                </div>
                <div className="mt-2 text-[13px] text-white/60">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <Link
              to="/products/hydraulic-test-bench"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-5 py-3 text-[14px] font-semibold text-white hover:bg-[#EA580C] transition-colors"
            >
              Explore Test Benches <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-[14px] font-semibold text-white hover:bg-white/5 transition-colors"
            >
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
            <SectionHeading
              eyebrow="OUR SERVICES"
              title="Complete Hydraulic Services"
              description="Factory-trained expertise for repair, overhaul, commissioning and maintenance of all major hydraulic brands."
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0F172A] hover:text-[#F97316] transition-colors whitespace-nowrap"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-xl border border-[#E2E8F0] bg-white p-5 hover:shadow-md hover:border-[#F97316]/40 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#F97316]">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[#94A3B8] group-hover:text-[#F97316] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="font-heading text-[15.5px] font-bold text-[#0F172A] mb-1.5 leading-snug group-hover:text-[#F97316] transition-colors">
                  {s.name}
                </h3>
                <p className="text-[13px] leading-relaxed text-[#64748B] line-clamp-3">
                  {s.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="WHY HSM"
            title="Why Choose HSM?"
            description="We combine engineering depth, manufacturing control and service responsiveness to be a reliable long-term hydraulic partner."
          />

          <div className="mt-10 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {WHY_CHOOSE.map((w) => (
              <div
                key={w.number}
                className="relative rounded-xl border border-[#E2E8F0] bg-white p-6 md:p-7 hover:border-[#0F172A]/20 hover:shadow-sm transition-all"
              >
                <div className="font-heading text-[40px] font-extrabold text-[#F97316]/15 leading-none mb-4">
                  {w.number}
                </div>
                <h3 className="font-heading text-[17px] font-bold text-[#0F172A] mb-2">
                  {w.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#475569]">
                  {w.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
            <SectionHeading
              eyebrow="INFRASTRUCTURE"
              title="Inside HSM"
              description="A look into our Bangalore manufacturing facility — shop floor, assembly areas, and in-house testing."
            />
            <Link
              to="/infrastructure"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0F172A] hover:text-[#F97316] transition-colors whitespace-nowrap"
            >
              Explore Our Infrastructure <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group">
              <img
                src={INFRASTRUCTURE[0].image}
                alt={INFRASTRUCTURE[0].title}
                loading="lazy"
                className="w-full h-full min-h-[280px] md:min-h-[480px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                <div className="text-[11.5px] font-semibold uppercase tracking-wide text-[#F97316] mb-1">
                  01
                </div>
                <h3 className="font-heading text-[20px] md:text-[24px] font-bold">
                  {INFRASTRUCTURE[0].title}
                </h3>
                <p className="mt-1 text-[13px] text-white/75 max-w-md">
                  {INFRASTRUCTURE[0].description}
                </p>
              </div>
            </div>
            {INFRASTRUCTURE.slice(1, 4).map((g, i) => (
              <div
                key={g.title}
                className="relative rounded-xl overflow-hidden group col-span-1"
              >
                <img
                  src={g.image}
                  alt={g.title}
                  loading="lazy"
                  className="w-full h-[180px] md:h-[230px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="text-[10.5px] font-semibold uppercase tracking-wide text-[#F97316] mb-0.5">
                    0{i + 2}
                  </div>
                  <h3 className="font-heading text-[15px] font-bold leading-tight">
                    {g.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="INDUSTRIES WE SERVE"
            title="Trusted Across Key Industrial Sectors"
            description="Our hydraulic solutions are at work across a broad cross-section of Indian and global industries."
            align="center"
            className="text-center mx-auto"
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind}
                className="flex flex-col items-center justify-center text-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 md:p-5 hover:border-[#F97316]/40 hover:bg-white hover:shadow-sm transition-all"
              >
                <Factory className="h-6 w-6 text-[#F97316] mb-3" />
                <div className="text-[12.5px] md:text-[13px] font-semibold text-[#0F172A] leading-snug">
                  {ind}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container-x relative py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-4 text-[#F97316]">
                <span className="h-px w-6 bg-[#F97316]/50" />
                GET IN TOUCH
              </div>
              <h2 className="font-heading text-[32px] md:text-[40px] font-bold leading-[1.15] text-white">
                Need a Hydraulic Solution?
              </h2>
              <p className="mt-4 text-[15px] md:text-[16px] text-white/70 max-w-2xl leading-relaxed">
                Talk to the HSM engineering team about your hydraulic system,
                component, repair or service requirement. We'll work with you
                from concept through commissioning.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-6 py-3.5 text-[14.5px] font-semibold text-white hover:bg-[#EA580C] transition-colors w-full lg:w-auto lg:min-w-[200px] justify-center"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-[14.5px] font-semibold text-white hover:bg-white/10 transition-colors w-full lg:w-auto lg:min-w-[200px] justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="CONTACT US"
            title="Get in Touch With HSM"
            description="Reach out to our Bangalore head office or Pune branch for enquiries, service, or quotes."
          />

          <div className="mt-10 grid lg:grid-cols-5 gap-6">
            {/* Info cards */}
            <div className="lg:col-span-2 space-y-4">
              {OFFICES.map((o) => (
                <div
                  key={o.type}
                  className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 md:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-[#F97316] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[12px] font-semibold uppercase tracking-wide text-[#64748B] mb-0.5">
                        {o.type}
                      </div>
                      <div className="text-[14px] text-[#334155] leading-relaxed">
                        {o.address}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-2">
                    <Phone className="h-4 w-4 text-[#F97316] mt-0.5 flex-shrink-0 ml-0.5" />
                    <div className="text-[13.5px] text-[#334155] space-y-0.5">
                      {o.phones.map((p) => (
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
                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-[#F97316] mt-0.5 flex-shrink-0 ml-0.5" />
                    <div className="text-[13.5px] text-[#334155] space-y-0.5">
                      {o.emails.map((e) => (
                        <a
                          key={e}
                          href={`mailto:${e}`}
                          className="block hover:text-[#F97316] transition-colors break-all"
                        >
                          {e}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#F97316] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[12px] font-semibold uppercase tracking-wide text-[#64748B] mb-0.5">
                      Quick Enquiry
                    </div>
                    <div className="text-[14px] text-[#334155] leading-relaxed">
                      We typically respond to enquiries within one working day.
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0F172A] px-5 py-3 text-[14px] font-semibold text-white hover:bg-[#1E293B] transition-colors"
              >
                <Send className="h-4 w-4" />
                Send an Enquiry
              </Link>
            </div>

            {/* Map */}
            <div className="lg:col-span-3 rounded-xl overflow-hidden border border-[#E2E8F0] min-h-[350px] lg:min-h-[520px]">
              <iframe
                title="HSM Hydro Control Bangalore Location"
                src="https://www.google.com/maps?q=Peenya+2nd+Stage+Bangalore+560058&output=embed"
                width="100%"
                height="100%"
                className="border-0 w-full h-full min-h-[350px] lg:min-h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
