type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  eyebrowDark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  eyebrowDark = false,
}: Props) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : ""} ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-4 ${
            eyebrowDark
              ? "text-[#F97316]"
              : "text-[#F97316]"
          }`}
        >
          <span className="h-px w-6 bg-current opacity-50" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-heading text-[32px] md:text-[40px] lg:text-[44px] font-bold leading-[1.1] text-[#0F172A] max-w-3xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 md:mt-5 text-[15px] md:text-[16px] leading-relaxed text-[#475569] max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
