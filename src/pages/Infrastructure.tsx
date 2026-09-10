import { Link } from "react-router-dom";
import {
  ArrowRight,
  Factory,
  Cog,
  ShieldCheck,
  Droplets,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { INFRASTRUCTURE, MACHINES, INSTRUMENTS } from "../data/company";

const facilityHighlights = [
  {
    icon: Factory,
    title: "Industrial Engineering Facility",
    description:
      "Machining, fabrication, repair, inspection and testing capabilities listed in the company profile.",
  },
  {
    icon: Cog,
    title: "Machining & Fabrication",
    description:
      "Boring, lathe, VMC, plano milling, welding and component repair capability.",
  },
  {
    icon: Droplets,
    title: "Hydraulic Test Bench",
    description:
      "1000 litres with 10 micron filters and pressure of 350 bar.",
  },
  {
    icon: ShieldCheck,
    title: "Inspection & Testing",
    description:
      "Strict inspection criteria, testing methods and acceptance norms.",
  },
];

export default function Infrastructure() {
  return (
    <main>
      {/* Hero */}
      <section className="blueprint-grid text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container-x relative py-4 md:py-10"> {/*changed backgroundSize */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold tracking-[0.14em] uppercase mb-1.5 text-[#F97316]">
              <span className="h-px w-6 bg-[#F97316]/60" />
              INFRASTRUCTURE
            </div>
            <h1 className="font-heading text-[20px] md:text-[38px] lg:text-[22px]  font-extrabold leading-[1.05] text-white">
              Our Manufacturing Facility
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-white/75 max-w-2xl">
              Shri Ramraj Engineering supports design consultation, machining,
              repair, metalizing, inspection and testing for heavy industrial
              machine parts.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilityHighlights.map((h) => (
              <div
                key={h.title}
                className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#F97316] mb-4">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-[16px] font-bold text-[#0F172A] mb-1.5">
                  {h.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#64748B]">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="FACILITY TOUR"
            title="Machines & Facilities"
            description="The machinery and facilities listed in the Shri Ramraj Engineering company profile."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
            {/* Large: Shop Floor */}
            <div className="md:col-span-4 rounded-xl overflow-hidden relative group">
              <img
                src={INFRASTRUCTURE[0].image}
                alt={INFRASTRUCTURE[0].title}
                loading="lazy"
                className="w-full h-[280px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-[#F97316] mb-1">
                  01
                </div>
                <h3 className="font-heading text-[22px] md:text-[26px] !text-white font-bold ">
                  {INFRASTRUCTURE[0].title}
                </h3>
                <p className="mt-1 text-[13.5px] text-white max-w-md">
                  {INFRASTRUCTURE[0].description}
                </p>
              </div>
            </div>

            {/* Vertical: Assembly Area */}
            <div className="md:col-span-2 rounded-xl overflow-hidden relative group">
              <img
                src={INFRASTRUCTURE[1].image}
                alt={INFRASTRUCTURE[1].title}
                loading="lazy"
                className="w-full h-[280px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-[#F97316] mb-1">
                  02
                </div>
                <h3 className="font-heading text-[20px] font-bold !text-white">
                  {INFRASTRUCTURE[1].title}
                </h3>
                <p className="mt-1 text-[13px] text-white">
                  {INFRASTRUCTURE[1].description}
                </p>
              </div>
            </div>

            {/* Testing */}
            <div className="md:col-span-3 rounded-xl overflow-hidden relative group">
              <img
                src={INFRASTRUCTURE[2].image}
                alt={INFRASTRUCTURE[2].title}
                loading="lazy"
                className="w-full h-[240px] md:h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-[#F97316] mb-1">
                  03
                </div>
                <h3 className="font-heading text-[20px] font-bold !text-white">
                  {INFRASTRUCTURE[2].title}
                </h3>
                <p className="mt-1 text-[13px] text-white">
                  {INFRASTRUCTURE[2].description}
                </p>
              </div>
            </div>

            {/* Manufacturing */}
            <div className="md:col-span-3 rounded-xl overflow-hidden relative group">
              <img
                src={INFRASTRUCTURE[3].image}
                alt={INFRASTRUCTURE[3].title}
                loading="lazy"
                className="w-full h-[240px] md:h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-[#F97316] mb-1">
                  04
                </div>
                <h3 className="font-heading text-[20px] font-bold !text-white">
                  {INFRASTRUCTURE[3].title}
                </h3>
                <p className="mt-1 text-[13px] text-white">
                  {INFRASTRUCTURE[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities list */}
      <section className="py-16 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <SectionHeading
              eyebrow="FACILITY CAPABILITIES"
              title="What We Build & Service In-House"
              description="Our facility supports the complete product lifecycle — from design and prototyping through manufacturing, assembly, testing and ongoing service."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MACHINES.map((c) => (
                <div
                  key={c}
                  className="flex items-start gap-2 rounded-lg border border-[#E2E8F0] bg-white p-4"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#F97316] mt-0.5 flex-shrink-0" />
                  <span className="text-[13.5px] text-[#334155]">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-x">
          <SectionHeading eyebrow="INSTRUMENTS" title="Measurement & Inspection Instruments" description="Instrument sizes, makes and quantities listed in the company profile." />
          <div className="mt-8 overflow-x-auto rounded-xl border border-[#E2E8F0]">
            <table className="min-w-[640px] w-full text-left text-[13px]">
              <thead className="bg-[#F8FAFC] text-[#0F172A]"><tr><th className="p-3 font-semibold">Instrument</th><th className="p-3 font-semibold">Size</th><th className="p-3 font-semibold">Make</th><th className="p-3 font-semibold">Qty</th></tr></thead>
              <tbody>{INSTRUMENTS.map(([instrument, size, make, quantity]) => <tr key={`${instrument}-${size}`} className="border-t border-[#E2E8F0] text-[#475569]"><td className="p-3">{instrument}</td><td className="p-3">{size}</td><td className="p-3">{make}</td><td className="p-3">{quantity}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="container-x py-14 md:py-16 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-[28px] md:text-[36px] font-bold leading-tight text-[#0F172A]">
            Want to visit our facility?
          </h2>
          <p className="mt-4 text-[15px] text-[#475569] leading-relaxed">
            We welcome customers for factory acceptance tests and facility
            visits. Reach out to schedule an appointment.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-6 py-3.5 text-[14.5px] font-semibold text-white hover:bg-[#EA580C] transition-colors"
            >
              Schedule a Visit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#E2E8F0] bg-white px-6 py-3.5 text-[14.5px] font-semibold text-[#0F172A] hover:border-[#0F172A]/30 transition-colors"
            >
              About Shri Ramraj Engineering
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
