import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi, I'm ${form.name}.\nService: ${form.service}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`;
    window.open(getWhatsAppUrl(whatsappMsg), "_blank");
    toast({ title: "Enquiry Sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">Contact Us</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">Have a question or ready to plan your trip? We'd love to hear from you.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative -mt-8 z-10 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: Phone, title: "Call Us", value: "+91 99999 99999", href: "tel:+919999999999" },
              { icon: Mail, title: "Email Us", value: "info@sandistours.com", href: "mailto:info@sandistours.com" },
              { icon: MessageCircle, title: "WhatsApp", value: "Chat with us", href: getWhatsAppUrl() },
              { icon: Clock, title: "Working Hours", value: "Mon-Sat, 9:30 AM - 7 PM", href: undefined },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-5 shadow-premium text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-display font-semibold text-foreground text-sm mb-1">{item.title}</p>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-muted-foreground text-xs hover:text-primary transition-colors">{item.value}</a>
                ) : (
                  <p className="text-muted-foreground text-xs">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Send Us an Enquiry</h3>
              <p className="text-muted-foreground text-sm mb-6">Fill in the form below and our travel experts will get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" required placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="tel" required placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <input type="email" required placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select Service</option>
                  {["Tours & Travels", "Air Tickets", "Bus Booking", "Train Booking", "Visa Services", "Hotel Booking", "Holiday Packages", "Travel Insurance", "Forex Services", "Other"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <textarea required placeholder="Your Message / Travel Requirements" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                <button type="submit" className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <Send className="w-4 h-4" /> Send Enquiry
                </button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Find Us</h3>
              <p className="text-muted-foreground text-sm mb-6">Visit our office or reach us through any of the channels above.</p>
              <div className="space-y-4 mb-6">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Head Office</p>
                    <p className="text-muted-foreground text-sm">123 Travel Street, Andheri West, Mumbai, Maharashtra 400058, India</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden h-80 border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sandis Tours Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
