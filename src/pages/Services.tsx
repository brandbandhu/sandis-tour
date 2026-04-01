import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";
import { getWhatsAppServiceUrl } from "@/lib/whatsapp";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">Our Travel Services</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          From booking your flight to arranging your visa — we provide end-to-end travel solutions to make your journey seamless and memorable.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-card rounded-xl p-7 shadow-card hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-teal-light flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.description}</p>
              <a
                href={getWhatsAppServiceUrl(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:underline"
              >
                Enquiry Now <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 bg-gradient-cta">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-accent-foreground mb-3">Need a Custom Service?</h2>
        <p className="text-accent-foreground/80 mb-6">Contact us for personalized travel assistance.</p>
        <Link to="/contact" className="bg-card text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
          Contact Us <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
