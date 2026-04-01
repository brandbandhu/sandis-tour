import { useState } from "react";
import { Send } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useToast } from "@/hooks/use-toast";

type EnquiryFormProps = {
  compact?: boolean;
  variant?: "grid" | "inline";
};

const EnquiryForm = ({ compact = false, variant = "grid" }: EnquiryFormProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", destination: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name} from ${form.city}.\nI'm interested in travelling to: ${form.destination}\nPhone: ${form.phone}\nEmail: ${form.email}`;
    window.open(getWhatsAppUrl(msg), "_blank");
    toast({ title: "Enquiry Sent!", description: "We'll get back to you shortly via WhatsApp." });
    setForm({ name: "", email: "", phone: "", city: "", destination: "" });
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input required placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-3 py-2.5 rounded-md border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
        <input required type="email" placeholder="Email ID" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-3 py-2.5 rounded-md border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
        <input required type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="px-3 py-2.5 rounded-md border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
        <input placeholder="City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="px-3 py-2.5 rounded-md border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
        <input required placeholder="Holiday Destination" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} className="px-3 py-2.5 rounded-md border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
        <button type="submit" className="bg-accent text-accent-foreground px-4 py-2.5 rounded-md text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          <Send className="w-4 h-4" /> Submit Enquiry
        </button>
      </form>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-wrap items-end gap-2">
        <input required placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="flex-1 min-w-[140px] px-3 py-2.5 rounded-md border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
        <input required type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="flex-1 min-w-[130px] px-3 py-2.5 rounded-md border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
        <input required type="email" placeholder="Email ID" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="flex-1 min-w-[160px] px-3 py-2.5 rounded-md border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
        <input placeholder="Your City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="flex-1 min-w-[130px] px-3 py-2.5 rounded-md border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
        <input required placeholder="Holiday Destination" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} className="flex-[1.2] min-w-[170px] px-3 py-2.5 rounded-md border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
        <button type="submit" className="bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap">
          <Send className="w-4 h-4" /> Enquire
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-6 gap-3 items-end">
      <input required placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-3 py-3 rounded-md border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
      <input required type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="px-3 py-3 rounded-md border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
      <input required type="email" placeholder="Email ID" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-3 py-3 rounded-md border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
      <input placeholder="Your City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="px-3 py-3 rounded-md border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
      <input required placeholder="Holiday Destination" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} className="px-3 py-3 rounded-md border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
      <button type="submit" className="bg-accent text-accent-foreground px-4 py-3 rounded-md text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
        <Send className="w-4 h-4" /> Enquire
      </button>
    </form>
  );
};

export default EnquiryForm;
