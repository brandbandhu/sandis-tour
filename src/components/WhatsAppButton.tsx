import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const WhatsAppButton = () => (
  <a
    href={getWhatsAppUrl()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-20 md:bottom-6 right-4 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-primary-foreground" />
  </a>
);

export default WhatsAppButton;
