import { Phone, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, PRIMARY_PHONE } from "../data/company";

export default function FloatingCTAs() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1FB958] transition-all hover:scale-105"
      >
        <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
      </a>
      <a
        href={`tel:${PRIMARY_PHONE.replace(/\s/g, "")}`}
        aria-label="Call Shri Ramraj Engineering"
        className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#F97316] text-white shadow-lg hover:bg-[#EA580C] transition-all hover:scale-105 md:hidden"
      >
        <Phone className="h-5 w-5 md:h-6 md:w-6" />
      </a>
    </div>
  );
}
