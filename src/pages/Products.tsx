import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "../data/company";

export default function Products() {
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
        <div className="container-x relative py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-5 text-[#F97316]">
              <span className="h-px w-6 bg-[#F97316]/60" />
              OUR PRODUCTS
            </div>
            <h1 className="font-heading text-[38px] md:text-[48px] font-extrabold leading-[1.05] text-white">
              Hydraulic Equipment Engineered for Industry
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-white/75 max-w-2xl">
              From compact power packs to high-pressure test benches and
              precision cylinders — all our products are engineered for reliable
              operation in demanding industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group rounded-xl border border-[#E2E8F0] bg-white overflow-hidden hover:shadow-lg hover:border-[#F97316]/40 transition-all flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#F8FAFC] relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-[#0F172A]">
                    Product
                  </div>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-[18px] font-bold text-[#0F172A] mb-2 group-hover:text-[#F97316] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#64748B] mb-4 flex-1">
                    {p.shortDescription}
                  </p>
                  <ul className="mb-5 space-y-1.5">
                    {p.features?.slice(0, 3).map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-[12.5px] text-[#475569]"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#F97316] mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#F97316] mt-auto">
                    View Details <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="container-x py-14 md:py-16">
          <div className="rounded-2xl bg-[#0F172A] text-white p-8 md:p-12 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="font-heading text-[26px] md:text-[32px] font-bold leading-tight text-white">
                  Can't find what you're looking for?
                </h2>
                <p className="mt-3 text-[14.5px] text-white/70 leading-relaxed">
                  We design and build custom hydraulic systems tailored to your
                  specific application. Share your requirement with our
                  engineering team.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-5 py-3 text-[14px] font-semibold text-white hover:bg-[#EA580C] transition-colors"
                >
                  Request Custom Quote <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
