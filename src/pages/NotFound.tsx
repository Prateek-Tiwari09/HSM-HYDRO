import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="container-x py-20 text-center max-w-xl">
        <div className="font-heading text-[80px] md:text-[100px] font-extrabold text-[#F97316] leading-none">
          404
        </div>
        <h1 className="mt-4 font-heading text-[28px] md:text-[34px] font-bold text-[#0F172A]">
          Page Not Found
        </h1>
        <p className="mt-3 text-[15px] text-[#64748B] leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#F97316] px-6 py-3 text-[14px] font-semibold text-white hover:bg-[#EA580C] transition-colors"
        >
          Back to Home <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
