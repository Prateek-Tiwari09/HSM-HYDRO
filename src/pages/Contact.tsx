import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { OFFICES } from "../data/company";

type FormState = {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  fullName: "",
  company: "",
  phone: "",
  email: "",
  interest: "",
  message: "",
};

const INTEREST_OPTIONS = [
  "Hydraulic Power Unit",
  "Hydraulic Cylinder",
  "Hydraulic Components",
  "Hydraulic Test Bench",
  "Lube Oil & Filtration System",
  "Manifold Blocks",
  "Pump Repair",
  "Motor Repair",
  "Cylinder Repair",
  "AMC",
  "Installation & Commissioning",
  "Retrofit / Upgradation",
  "Troubleshooting",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^[+\d\s-]{7,}$/.test(form.phone.trim()))
      e.phone = "Enter a valid phone number";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Enter a valid email address";
    if (!form.interest) e.interest = "Please select an interest";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    // Note: This is a front-end only demo. In production, submit to a backend / form service.
    setSubmitted(true);
    setForm(INITIAL_FORM);
  }

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
              CONTACT
            </div>
            <h1 className="font-heading text-[38px] md:text-[48px] font-extrabold leading-[1.05] text-white">
              Let's Build Your Hydraulic Solution
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-white/75 max-w-2xl">
              Have a requirement, repair request or hydraulic system problem?
              Talk to our engineering team — we'll help you specify, design or
              service the right solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact layout */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* LEFT: Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="font-heading text-[22px] font-bold text-[#0F172A] mb-2">
                  Contact Information
                </h2>
                <p className="text-[14.5px] text-[#64748B] leading-relaxed">
                  Reach us at our Bangalore head office or Pune branch. We
                  respond to enquiries within one working day.
                </p>
              </div>

              {OFFICES.map((o) => (
                <div
                  key={o.type}
                  className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 md:p-6"
                >
                  <div className="flex items-start gap-3 mb-4">
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
                  <div className="flex items-start gap-3 mb-2 ml-0.5">
                    <Phone className="h-4 w-4 text-[#F97316] mt-0.5 flex-shrink-0" />
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
                  <div className="flex items-start gap-3 ml-0.5">
                    <Mail className="h-4 w-4 text-[#F97316] mt-0.5 flex-shrink-0" />
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
                      Response Time
                    </div>
                    <div className="text-[14px] text-[#334155] leading-relaxed">
                      We typically respond to enquiries within one working day.
                      For urgent service requests, please call us directly.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm">
                <h2 className="font-heading text-[22px] font-bold text-[#0F172A] mb-2">
                  Send an Enquiry
                </h2>
                <p className="text-[14.5px] text-[#64748B] mb-6">
                  Fill in the form and our team will get back to you.
                </p>

                {submitted ? (
                  <div className="rounded-xl border border-green-200 bg-green-50 p-6 flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading text-[17px] font-bold text-green-900">
                        Thank you for your enquiry
                      </h3>
                      <p className="mt-1 text-[14px] text-green-800/80 leading-relaxed">
                        We have received your message and will respond within
                        one working day. For urgent matters, please call us at{" "}
                        <a
                          href="tel:+919740392560"
                          className="font-semibold underline"
                        >
                          +91 97403 92560
                        </a>
                        .
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#0F172A] hover:text-[#F97316]"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
                  >
                    <Field
                      label="Full Name"
                      required
                      error={errors.fullName}
                      value={form.fullName}
                      onChange={(v) => update("fullName", v)}
                      placeholder="e.g. Ramesh Kumar"
                    />
                    <Field
                      label="Company Name"
                      value={form.company}
                      onChange={(v) => update("company", v)}
                      placeholder="Your company"
                    />
                    <Field
                      label="Phone Number"
                      required
                      type="tel"
                      error={errors.phone}
                      value={form.phone}
                      onChange={(v) => update("phone", v)}
                      placeholder="+91 98765 43210"
                    />
                    <Field
                      label="Email Address"
                      required
                      type="email"
                      error={errors.email}
                      value={form.email}
                      onChange={(v) => update("email", v)}
                      placeholder="you@company.com"
                    />

                    <div className="sm:col-span-2">
                      <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                        Interested In <span className="text-[#F97316]">*</span>
                      </label>
                      <select
                        value={form.interest}
                        onChange={(e) => update("interest", e.target.value)}
                        className={`w-full rounded-md border bg-white px-3.5 py-3 text-[14px] text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-colors appearance-none ${
                          errors.interest
                            ? "border-red-400"
                            : "border-[#CBD5E1] hover:border-[#94A3B8]"
                        }`}
                      >
                        <option value="">— Select an option —</option>
                        {INTEREST_OPTIONS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                      {errors.interest && (
                        <div className="mt-1.5 flex items-center gap-1 text-[12px] text-red-600">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.interest}
                        </div>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
                        Message <span className="text-[#F97316]">*</span>
                      </label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Briefly describe your requirement, application or service needed."
                        className={`w-full rounded-md border bg-white px-3.5 py-3 text-[14px] text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-colors resize-y min-h-[120px] ${
                          errors.message
                            ? "border-red-400"
                            : "border-[#CBD5E1] hover:border-[#94A3B8]"
                        }`}
                      />
                      {errors.message && (
                        <div className="mt-1.5 flex items-center gap-1 text-[12px] text-red-600">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.message}
                        </div>
                      )}
                    </div>

                    <div className="sm:col-span-2 pt-2">
                      <button
                        type="submit"
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-[#F97316] px-6 py-3.5 text-[14.5px] font-semibold text-white hover:bg-[#EA580C] transition-colors shadow-sm"
                      >
                        <Send className="h-4 w-4" />
                        Send Enquiry
                      </button>
                      <p className="mt-3 text-[12.5px] text-[#64748B]">
                        By submitting this form, you agree to be contacted by
                        the HSM Hydro Control team regarding your enquiry.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 bg-white">
        <div className="container-x">
          <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] h-[380px]">
            <iframe
              title="HSM Hydro Control Bangalore Location"
              src="https://www.google.com/maps?q=Peenya+2nd+Stage+Bangalore+560058&output=embed"
              width="100%"
              height="100%"
              className="border-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  required,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-[13px] font-semibold text-[#0F172A] mb-1.5">
        {label} {required && <span className="text-[#F97316]">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-md border bg-white px-3.5 py-3 text-[14px] text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-colors ${
          error ? "border-red-400" : "border-[#CBD5E1] hover:border-[#94A3B8]"
        }`}
      />
      {error && (
        <div className="mt-1.5 flex items-center gap-1 text-[12px] text-red-600">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </div>
      )}
    </div>
  );
}
