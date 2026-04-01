import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";
import { getWhatsAppServiceUrl } from "@/lib/whatsapp";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Services = () => (
  <Layout>
    <section className="py-20 bg-gradient-sand">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading label="Our Services" title="Complete Travel Solutions" subtitle="From booking your flight to arranging your visa, we've got everything covered." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group"
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
                className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:underline"
              >
                Enquiry Now →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
