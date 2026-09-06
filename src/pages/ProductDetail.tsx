import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Wrench,
  FileText,
  Cog,
  Share2,
} from "lucide-react";
import { PRODUCTS } from "../data/company";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return <Navigate to="/products" replace />;

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <main>
      {/* Breadcrumb */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container-x py-4">
          <nav className="text-[12.5px] text-[#64748B]">
            <Link to="/" className="hover:text-[#F97316]">Home</Link>
            <span className="mx-2 text-[#CBD5E1]">/</span>
            <Link to="/products" className="hover:text-[#F97316]">Products</Link>
            <span className="mx-2 text-[#CBD5E1]">/</span>
            <span className="text-[#0F172A] font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white border-b border-[#E2E8F0]">
        <div className="container-x py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-4 text-[#F97316]">
                <span className="h-px w-6 bg-current opacity-50" />
                PRODUCT
              </div>
              <h1 className="font-heading text-[34px] md:text-[44px] font-extrabold leading-[1.1] text-[#0F172A]">
                {product.name}
              </h1>
              <p className="mt-5 text-[16px] leading-relaxed text-[#475569] max-w-xl">
                {product.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-6 py-3.5 text-[14px] font-semibold text-white hover:bg-[#EA580C] transition-colors"
                >
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#E2E8F0] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0F172A] hover:border-[#0F172A]/30 transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  Download Catalogue
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] md:h-[440px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      {product.features && product.features.length > 0 && (
        <section className="py-16 bg-[#F8FAFC]">
          <div className="container-x">
            <div className="max-w-2xl mb-10">
              <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-4 text-[#F97316]">
                <span className="h-px w-6 bg-current opacity-50" />
                KEY FEATURES
              </div>
              <h2 className="font-heading text-[30px] md:text-[36px] font-bold leading-tight text-[#0F172A]">
                Built for Reliable Industrial Service
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-white p-5"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-[14.5px] text-[#334155] leading-relaxed">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specifications */}
      {product.specifications && product.specifications.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-x">
            <div className="max-w-2xl mb-10">
              <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-4 text-[#F97316]">
                <span className="h-px w-6 bg-current opacity-50" />
                TECHNICAL SPECIFICATIONS
              </div>
              <h2 className="font-heading text-[30px] md:text-[36px] font-bold leading-tight text-[#0F172A]">
                Technical Specifications
              </h2>
            </div>
            <div className="overflow-hidden rounded-xl border border-[#E2E8F0]">
              <table className="w-full text-left">
                <tbody>
                  {product.specifications.map((s, i) => (
                    <tr
                      key={s.label}
                      className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
                    >
                      <td className="py-4 px-5 md:px-6 text-[14px] font-semibold text-[#0F172A] w-1/2 md:w-2/5 border-b border-[#E2E8F0] last:border-0">
                        {s.label}
                      </td>
                      <td className="py-4 px-5 md:px-6 text-[14px] text-[#334155] font-medium border-b border-[#E2E8F0] last:border-0">
                        {s.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[13px] text-[#64748B]">
              * Specifications are indicative and can be customized to specific
              application requirements.
            </p>
          </div>
        </section>
      )}

      {/* Applications */}
      <section className="py-16 bg-[#0F172A] text-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-4 text-[#F97316]">
                <span className="h-px w-6 bg-[#F97316]/50" />
                APPLICATIONS
              </div>
              <h2 className="font-heading text-[30px] md:text-[36px] font-bold leading-tight text-white">
                Typical Applications
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70 max-w-lg">
                Our {product.name.toLowerCase()} are deployed across a wide
                range of industries and applications including:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Industrial Hydraulics",
                "Presses & Machine Tools",
                "Steel Plants",
                "Power Plants",
                "Material Handling",
                "Marine & Offshore",
                "Mining Equipment",
                "Defence",
              ].map((a) => (
                <div
                  key={a}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-[13.5px] text-white/80"
                >
                  <Cog className="h-4 w-4 text-[#F97316] flex-shrink-0" />
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-heading text-[26px] md:text-[32px] font-bold text-[#0F172A]">
              Related Products
            </h2>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0F172A] hover:text-[#F97316]"
            >
              All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/products/${r.slug}`}
                className="group rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-md hover:border-[#F97316]/40 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#F8FAFC]">
                  <img
                    src={r.image}
                    alt={r.name}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
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
          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-8 md:p-12 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-3 text-[#F97316]">
                <Share2 className="h-3.5 w-3.5" />
                GET IN TOUCH
              </div>
              <h2 className="font-heading text-[26px] md:text-[30px] font-bold leading-tight text-[#0F172A]">
                Need a custom specification?
              </h2>
              <p className="mt-2 text-[14.5px] text-[#475569] leading-relaxed">
                Talk to our engineering team about custom designs, bulk
                requirements, or specific application needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-5 py-3 text-[14px] font-semibold text-white hover:bg-[#EA580C] transition-colors"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#E2E8F0] bg-white px-5 py-3 text-[14px] font-semibold text-[#0F172A] hover:border-[#0F172A]/30 transition-colors"
              >
                <Wrench className="h-4 w-4" />
                Related Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
