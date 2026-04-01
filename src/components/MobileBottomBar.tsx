import { Phone, MessageCircle, FileText } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Link } from "react-router-dom";

const MobileBottomBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border">
    <div className="grid grid-cols-3 h-14">
      <a href="tel:+919999999999" className="flex flex-col items-center justify-center gap-0.5 text-primary">
        <Phone className="w-5 h-5" />
        <span className="text-[10px] font-medium">Call</span>
      </a>
      <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-0.5 text-[#25D366]">
        <MessageCircle className="w-5 h-5" />
        <span className="text-[10px] font-medium">WhatsApp</span>
      </a>
      <Link to="/contact" className="flex flex-col items-center justify-center gap-0.5 text-accent">
        <FileText className="w-5 h-5" />
        <span className="text-[10px] font-medium">Enquiry</span>
      </Link>
    </div>
  </div>
);

export default MobileBottomBar;
