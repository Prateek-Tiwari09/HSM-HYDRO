import { Link } from "react-router-dom";
import {
  Award,
  Target,
  ShieldCheck,
  Users,
  Factory,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { COMPANY, WHY_CHOOSE, INFRASTRUCTURE } from "../data/company";

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="blueprint-grid text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container-x relative py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-5 text-[#F97316]">
              <span className="h-px w-6 bg-[#F97316]/60" />
              ABOUT US
            </div>
            <h1 className="font-heading text-[38px] md:text-[48px] lg:text-[54px] font-extrabold leading-[1.05] text-white">
              A Single-Window Partner for All Your Hydraulics Requirements
            </h1>
            <p className="mt-5 text-[16px] md:text-[17px] leading-relaxed text-white/75 max-w-2xl">
              Shri Ramraj Engineering provides design consultation, repairs and
              modifications of hydraulic and pneumatic cylinders, machine parts,
              sealing solutions and spares for hydraulic equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}assets/piston-rod-repair.jpg`}
                alt="Shri Ramraj Engineering industrial engineering capability"
                className="rounded-xl w-full h-[360px] md:h-[460px] object-cover border border-[#E2E8F0]"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -right-5 hidden md:block rounded-xl bg-[#F97316] text-white p-5 shadow-xl">
                <div className="font-heading text-[30px] font-extrabold leading-none">
                  SR
                </div>
                <div className="text-[12px] uppercase tracking-wide mt-1 font-semibold">
                  Engineering
                </div>
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="OUR STORY" title="Engineering and Repair Expertise" />
              {COMPANY.aboutLong.map((p, i) => (
                <p key={i} className="mt-4 text-[15px] leading-relaxed text-[#475569]">
                  {p}
                </p>
              ))}

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                  <ShieldCheck className="h-5 w-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[14px] font-semibold text-[#0F172A]">
                      Quality Focus
                    </div>
                    <div className="text-[12.5px] text-[#64748B] mt-0.5">
                      Inspection Criteria
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                  <Factory className="h-5 w-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[14px] font-semibold text-[#0F172A]">
                      Industrial
                    </div>
                    <div className="text-[12.5px] text-[#64748B] mt-0.5">
                      Manufacturing Facility
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                  <Users className="h-5 w-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[14px] font-semibold text-[#0F172A]">
                      Young Engineering Team
                    </div>
                    <div className="text-[12.5px] text-[#64748B] mt-0.5">
                      Engineers & Technicians
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                  <Target className="h-5 w-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[14px] font-semibold text-[#0F172A]">
                      Heavy Industry
                    </div>
                    <div className="text-[12.5px] text-[#64748B] mt-0.5">
                      Customer Base
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 md:py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="container-x">
          <SectionHeading
            eyebrow="OUR STRENGTHS"
            title="The Pillars of Our Work"
            description="Our operations are anchored in five core strengths that drive every product and service we deliver."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMPANY.strengths.map((s, i) => (
              <div
                key={s}
                className="relative rounded-xl border border-[#E2E8F0] bg-white p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#FFF7ED] text-[#F97316] font-heading font-bold text-lg mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-heading text-[16px] font-bold text-[#0F172A]">
                  {s}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="OUR COMPETENCE"
            title="Capabilities"
            description="From design and manufacturing through to installation and lifetime service — in-house, end-to-end."
          />
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {[
              "Design of Hydraulic Test Rig, Power Pack & Cylinder",
              "Design of Special Manifold Block and Manufacturing",
              "Design of Lubrication System & Filtration Unit",
              "Re-conditioning of Hydraulic Pump, Motor and Cylinder",
              "Retro fitment and up-gradation of hydraulic system",
              "Complete erection, commissioning, AMC and troubleshooting of all makes of hydraulic system",
            ].map((cap) => (
              <div
                key={cap}
                className="flex items-start gap-3 rounded-lg border border-[#E2E8F0] p-5 hover:border-[#F97316]/40 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-[#F97316] mt-0.5 flex-shrink-0" />
                <span className="text-[14.5px] text-[#334155] leading-relaxed">
                  {cap}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 md:py-20 bg-[#0F172A] text-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-4 text-[#F97316]">
              <span className="h-px w-6 bg-[#F97316]/50" />
              WHY CHOOSE SHRI RAMRAJ ENGINEERING
            </div>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold leading-[1.1] text-white">
              A Hydraulic Partner You Can Rely On
            </h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE.map((w) => (
              <div
                key={w.number}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors"
              >
                <div className="font-heading text-[36px] font-extrabold text-[#F97316]/80 leading-none mb-4">
                  {w.number}
                </div>
                <h3 className="font-heading text-[17px] font-bold text-white mb-2">
                  {w.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-white/70">
                  {w.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure teaser */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeading
                eyebrow="INFRASTRUCTURE"
                title="Our Manufacturing Facility"
                description="The company profile lists engineering, repair, machining, metalizing, inspection and testing capabilities for heavy industrial machine parts."
              />
              <div className="mt-8 grid grid-cols-2 gap-3">
                {INFRASTRUCTURE.map((g) => (
                  <div
                    key={g.title}
                    className="flex items-start gap-2 text-[14px] font-semibold text-[#0F172A]"
                  >
                    <Award className="h-4 w-4 text-[#F97316] mt-0.5 flex-shrink-0" />
                    {g.title}
                  </div>
                ))}
              </div>
              <Link
                to="/infrastructure"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#F97316] px-5 py-3 text-[14px] font-semibold text-white hover:bg-[#EA580C] transition-colors"
              >
                Explore Our Facility <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {INFRASTRUCTURE.map((g, i) => (
                <img
                  key={g.title}
                  src={g.image}
                  alt={g.title}
                  loading="lazy"
                  className={`rounded-xl object-cover border border-[#E2E8F0] opacity-90 ${
                    i === 0 ? "col-span-2 h-56" : "h-44"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="container-x py-14 md:py-16 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-[30px] md:text-[38px] font-bold leading-[1.15] text-[#0F172A]">
            Ready to Discuss Your Hydraulic Requirement?
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-[#475569]">
            Talk to our engineering team — we'll help you specify, design,
            manufacture or service the right hydraulic solution.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-6 py-3.5 text-[14.5px] font-semibold text-white hover:bg-[#EA580C] transition-colors"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#E2E8F0] bg-white px-6 py-3.5 text-[14.5px] font-semibold text-[#0F172A] hover:border-[#0F172A]/30 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
