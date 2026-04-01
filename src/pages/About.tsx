import { motion } from "framer-motion";
import { Award, Users, Globe, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Travellers" },
  { icon: Globe, value: "50+", label: "Destinations" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Shield, value: "100%", label: "Satisfaction" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const About = () => (
  <Layout>
    <section className="py-20 bg-gradient-sand">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading label="About Us" title="Your Trusted Travel Partner Since 2014" />
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Sandis Tours has been helping families, couples, and groups create unforgettable travel memories for over a decade. Based in Mumbai, we specialize in providing complete travel solutions — from flight bookings and hotel reservations to visa assistance and fully curated tour packages.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Our team of experienced travel consultants works tirelessly to ensure every detail of your trip is perfect. We believe travel should be stress-free, affordable, and memorable. That's why thousands of travellers trust us year after year.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-card rounded-xl p-6 text-center shadow-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="bg-card rounded-xl p-8 md:p-12 shadow-premium">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">Our Promise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Best Prices", desc: "We guarantee the most competitive rates across all our services." },
              { title: "Expert Guidance", desc: "Our seasoned travel experts provide personalized recommendations." },
              { title: "Hassle-Free Experience", desc: "From planning to return, we handle everything for you." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h4 className="font-display font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
