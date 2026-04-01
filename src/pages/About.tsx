import { motion } from "framer-motion";
import { Award, Users, Globe, Shield, MapPin, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { whyChooseUs } from "@/lib/data";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Travellers" },
  { icon: Globe, value: "50+", label: "Destinations" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Shield, value: "95%+", label: "Visa Success Rate" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">About Sandis Tours</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">Your trusted travel partner since 2014 — crafting memorable experiences across the globe.</p>
      </div>
    </section>

    {/* Stats */}
    <section className="relative -mt-8 z-10 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-card rounded-xl p-6 text-center shadow-premium">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Company Story */}
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">Our Story</span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-5">Crafting Memorable Experiences Since 2014</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sandis Tours was founded with a simple mission — to make travel accessible, affordable, and memorable for everyone. What started as a small travel desk in Mumbai has grown into one of the most trusted travel consultancies in India.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team of 20+ experienced travel professionals has deep expertise across 50+ destinations. We specialize in customized holidays, ensuring every trip is tailored to our clients' unique preferences, pace, and budget.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From visa processing and passport assistance to flight bookings and complete tour packages — we provide end-to-end travel solutions that our clients trust year after year.
            </p>
            <div className="flex flex-col gap-3">
              {["IATA Accredited Travel Agency", "Ministry of Tourism Recognized", "Member of TAAI (Travel Agents Association of India)", "ISO 9001:2015 Certified"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <div className="grid grid-cols-2 gap-4">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="bg-card p-5 rounded-xl border border-border shadow-card">
                  <h4 className="font-display text-sm font-semibold text-foreground mb-1.5">{item.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Office / Location */}
    <section className="py-16 bg-gradient-sand">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading label="Visit Us" title="Our Office" />
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-card border border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Head Office - Mumbai</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-muted-foreground text-sm">123 Travel Street, Andheri West, Mumbai, Maharashtra 400058, India</p>
              </div>
              <p className="text-muted-foreground text-sm"><strong className="text-foreground">Working Hours:</strong> Mon-Sat, 9:30 AM - 7:00 PM</p>
              <p className="text-muted-foreground text-sm"><strong className="text-foreground">Phone:</strong> +91 99999 99999</p>
              <p className="text-muted-foreground text-sm"><strong className="text-foreground">Email:</strong> info@sandistours.com</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-64 lg:h-auto border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location"
            />
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 bg-gradient-cta">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-accent-foreground mb-3">Ready to Plan Your Next Trip?</h2>
        <p className="text-accent-foreground/80 mb-6">Get in touch with our travel experts for a free consultation.</p>
        <Link to="/contact" className="bg-card text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Contact Us
        </Link>
      </div>
    </section>
  </Layout>
);

export default About;
