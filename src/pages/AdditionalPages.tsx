import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AlertCircle, ArrowRight, CheckCircle2, ChevronDown, Send } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { COMPANY, PRIMARY_EMAIL, PRIMARY_PHONE, PRODUCTS, SERVICES } from "../data/company";

const articles = [
  {
    slug: "choosing-a-hydraulic-power-unit",
    title: "Choosing a Hydraulic Power Unit for an Industrial Application",
    summary: "A practical overview of the application details that shape a dependable hydraulic power unit design.",
    date: "Engineering guide",
    sections: [
      "A suitable power unit starts with the machine cycle, required force or torque, duty pattern and available installation space. Capturing these details early helps the design team select a practical pump, reservoir and control arrangement.",
      "Pressure, flow, filtration and heat management should be considered together rather than as isolated specifications. The final arrangement should also allow access for inspection, commissioning and future maintenance.",
      "For a project-specific assessment, share the application requirements with the HSM engineering team through the enquiry form.",
    ],
  },
  {
    slug: "hydraulic-system-maintenance",
    title: "Planning Maintenance for Hydraulic Systems",
    summary: "Simple maintenance considerations that support reliable operation and quicker fault finding.",
    date: "Service note",
    sections: [
      "Clean fluid, suitable filtration and regular inspection are central to hydraulic system reliability. Maintenance records should include fluid condition, filter status, visible leaks and unusual noise or temperature.",
      "When a fault occurs, document the machine condition and operating symptoms before changing settings or components. This gives service engineers useful context and reduces unnecessary replacement work.",
      "HSM provides inspection, repair, troubleshooting and maintenance support for industrial hydraulic systems.",
    ],
  },
];

function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-white">
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="container-x relative py-16 md:py-20">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#F97316]"><span className="h-px w-6 bg-[#F97316]/60" />{eyebrow}</div>
          <h1 className="font-heading text-[38px] font-extrabold leading-[1.05] text-white md:text-[48px]">{title}</h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/75 md:text-[17px]">{description}</p>
        </div>
      </div>
    </section>
  );
}

function ContentShell({ children }: { children: React.ReactNode }) {
  return <main className="bg-white"><div className="container-x py-16 md:py-20">{children}</div></main>;
}

export function FAQ() {
  const questions = [
    ["What products does HSM supply?", "HSM supplies hydraulic components, power units, cylinders, test benches, lube oil and filtration systems, manifolds and related industrial hydraulic equipment."],
    ["Can systems be customized?", "Yes. Product and system arrangements can be designed around the application, process requirements, space, capacity and operating conditions provided by the customer."],
    ["Which services are available?", "Services include engineering, installation, commissioning, troubleshooting, repair, reconditioning, retrofitting and maintenance support."],
    ["How can I request a quotation?", "Use the enquiry form or contact the team by phone or email with the application details and the product or service required."],
    ["Where does HSM operate?", "HSM has its corporate office and manufacturing plant in Bangalore and a branch office in Pune, with support for customers across India and overseas."],
  ];
  return <><PageHero eyebrow="FAQ" title="Answers to Common Questions" description="Practical information about HSM products, engineering support and enquiry process." /><ContentShell><SectionHeading eyebrow="FREQUENTLY ASKED" title="How can we help?" description="Select a question to view the answer." /><div className="mx-auto mt-10 max-w-3xl space-y-3">{questions.map(([question, answer]) => <details key={question} className="group rounded-lg border border-[#E2E8F0] bg-white p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-[16px] font-bold text-[#0F172A]"><span>{question}</span><ChevronDown className="h-5 w-5 flex-shrink-0 text-[#F97316] transition-transform group-open:rotate-180" /></summary><p className="mt-4 text-[14.5px] leading-relaxed text-[#475569]">{answer}</p></details>)}</div></ContentShell></>;
}

export function Testimonials() {
  return <><PageHero eyebrow="CUSTOMER EXPERIENCE" title="Built Around Reliable Support" description="HSM focuses on practical engineering, quality workmanship and responsive service throughout the equipment lifecycle." /><ContentShell><div className="mx-auto max-w-3xl rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 text-center md:p-12"><SectionHeading align="center" eyebrow="TESTIMONIALS" title="Customer references available on request" description="Verified customer testimonials are not published in the current source material. Contact our team for relevant project discussions and references where available." /><Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#F97316] px-6 py-3 text-[14px] font-semibold text-white hover:bg-[#EA580C]">Discuss your requirement <ArrowRight className="h-4 w-4" /></Link></div></ContentShell></>;
}

export function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({ name: "", company: "", email: "", phone: "", interest: "", message: "" });
  const update = (key: string, value: string) => setValues((current) => ({ ...current, [key]: value }));
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!/^[+\d][\d\s().-]{7,}$/.test(values.phone)) next.phone = "Enter a valid phone number.";
    if (!values.interest) next.interest = "Select a product or service.";
    if (values.message.trim().length < 10) next.message = "Please provide at least 10 characters.";
    setErrors(next);
    if (!Object.keys(next).length) setSubmitted(true);
  };
  return <><PageHero eyebrow="ENQUIRY" title="Tell Us About Your Requirement" description="Share the application details and our team can review the appropriate product or service pathway." /><ContentShell><div className="mx-auto max-w-3xl rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm md:p-8">{submitted ? <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-6"><CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" /><div><h2 className="font-heading text-[20px] font-bold text-green-900">Enquiry details validated</h2><p className="mt-2 text-[14px] leading-relaxed text-green-800/80">Your details are ready to share with the HSM team. This static form does not transmit or store messages yet. Please email {PRIMARY_EMAIL} or call {PRIMARY_PHONE} to submit the requirement.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-4 text-[13px] font-semibold text-[#0F172A] underline">Submit another enquiry</button></div></div> : <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2"><Field label="Name" value={values.name} onChange={(v) => update("name", v)} error={errors.name} required /><Field label="Company" value={values.company} onChange={(v) => update("company", v)} /><Field label="Email" type="email" value={values.email} onChange={(v) => update("email", v)} error={errors.email} required /><Field label="Phone" type="tel" value={values.phone} onChange={(v) => update("phone", v)} error={errors.phone} required /><label className="sm:col-span-2"><span className="mb-1.5 block text-[13px] font-semibold text-[#0F172A]">Product / Service <b className="text-[#F97316]">*</b></span><select value={values.interest} onChange={(e) => update("interest", e.target.value)} className={`w-full rounded-md border bg-white px-3.5 py-3 text-[14px] ${errors.interest ? "border-red-400" : "border-[#CBD5E1]"}`}><option value="">Select an option</option>{[...PRODUCTS.map((item) => item.name), ...SERVICES.map((item) => item.name)].map((item) => <option key={item}>{item}</option>)}</select>{errors.interest && <Error text={errors.interest} />}</label><label className="sm:col-span-2"><span className="mb-1.5 block text-[13px] font-semibold text-[#0F172A]">Message <b className="text-[#F97316]">*</b></span><textarea rows={6} value={values.message} onChange={(e) => update("message", e.target.value)} className={`w-full resize-y rounded-md border px-3.5 py-3 text-[14px] ${errors.message ? "border-red-400" : "border-[#CBD5E1]"}`} placeholder="Describe your application or service requirement." />{errors.message && <Error text={errors.message} />}</label><button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#F97316] px-6 py-3.5 text-[14px] font-semibold text-white hover:bg-[#EA580C] sm:w-fit"><Send className="h-4 w-4" />Validate Enquiry</button></form>}</div></ContentShell></>;
}

function Field({ label, value, onChange, error, type = "text", required = false }: { label: string; value: string; onChange: (value: string) => void; error?: string; type?: string; required?: boolean }) {
  return <label><span className="mb-1.5 block text-[13px] font-semibold text-[#0F172A]">{label} {required && <b className="text-[#F97316]">*</b>}</span><input type={type} value={value} onChange={(e) => onChange(e.target.value)} className={`w-full rounded-md border px-3.5 py-3 text-[14px] ${error ? "border-red-400" : "border-[#CBD5E1]"}`} />{error && <Error text={error} />}</label>;
}
function Error({ text }: { text: string }) { return <span className="mt-1.5 flex items-center gap-1 text-[12px] text-red-600"><AlertCircle className="h-3.5 w-3.5" />{text}</span>; }

export function Blog() { return <><PageHero eyebrow="INSIGHTS" title="Hydraulic Engineering Insights" description="Practical notes about hydraulic equipment, system care and industrial applications." /><ContentShell><div className="grid gap-5 md:grid-cols-2">{articles.map((article) => <article key={article.slug} className="rounded-xl border border-[#E2E8F0] bg-white p-6"><p className="text-[12px] font-semibold uppercase tracking-wide text-[#F97316]">{article.date}</p><h2 className="mt-3 font-heading text-[21px] font-bold text-[#0F172A]">{article.title}</h2><p className="mt-3 text-[14.5px] leading-relaxed text-[#64748B]">{article.summary}</p><Link to={`/blog/${article.slug}`} className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#F97316]">Read article <ArrowRight className="h-4 w-4" /></Link></article>)}</div></ContentShell></>; }

export function BlogDetail() { const { slug } = useParams(); const article = articles.find((item) => item.slug === slug); if (!article) return <ContentShell><h1 className="font-heading text-3xl font-bold text-[#0F172A]">Article not found</h1><Link to="/blog" className="mt-6 inline-flex text-[#F97316]">Back to insights</Link></ContentShell>; return <><PageHero eyebrow={article.date} title={article.title} description={article.summary} /><ContentShell><article className="mx-auto max-w-3xl space-y-5 text-[15px] leading-relaxed text-[#475569]">{article.sections.map((section) => <p key={section}>{section}</p>)}<Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-[#F97316]">Back to insights <ArrowRight className="h-4 w-4" /></Link></article></ContentShell></>; }

function LegalPage({ title, children }: { title: string; children: React.ReactNode }) { return <><PageHero eyebrow="INFORMATION" title={title} description={`${title} for ${COMPANY.name}.`} /><ContentShell><article className="mx-auto max-w-3xl space-y-6 text-[15px] leading-relaxed text-[#475569]">{children}</article></ContentShell></>; }
export function PrivacyPolicy() { return <LegalPage title="Privacy Policy"><p>HSM Hydro Control Pvt. Ltd. respects the privacy of visitors to this website. This site is primarily an informational website and does not currently provide an account system or online payment service.</p><h2 className="font-heading text-xl font-bold text-[#0F172A]">Information you provide</h2><p>If you contact HSM by phone, email or the enquiry form, use only the information needed to respond to your request. The current static enquiry form validates details in your browser and does not transmit or store them.</p><h2 className="font-heading text-xl font-bold text-[#0F172A]">Contact</h2><p>For questions about this policy, contact <a className="text-[#F97316]" href={`mailto:${PRIMARY_EMAIL}`}>{PRIMARY_EMAIL}</a>.</p></LegalPage>; }
export function TermsOfService() { return <LegalPage title="Terms of Service"><p>The content on this website is provided for general information about HSM Hydro Control Pvt. Ltd., its products and services. Technical suitability, pricing, delivery and project terms are confirmed separately for each enquiry.</p><h2 className="font-heading text-xl font-bold text-[#0F172A]">Use of content</h2><p>Please do not rely on general website information as a substitute for application-specific engineering review. Product availability and specifications may vary according to the confirmed requirement.</p><h2 className="font-heading text-xl font-bold text-[#0F172A]">Contact</h2><p>For clarification, contact the HSM team through the details on the <Link className="text-[#F97316]" to="/contact">Contact page</Link>.</p></LegalPage>; }