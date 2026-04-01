import { motion } from "framer-motion";
import { ArrowRight, Star, ChevronLeft, ChevronRight, Award, Clock, Shield, Heart, Sparkles, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { services, packages, testimonials, whyChooseUs } from "@/lib/data";
import { getWhatsAppUrl, getWhatsAppServiceUrl } from "@/lib/whatsapp";
import heroBg from "@/assets/hero-bg.jpg";
import destIndia from "@/assets/destination-india.jpg";
import destGreece from "@/assets/destination-greece.jpg";
import destBali from "@/assets/destination-bali.jpg";
import destDubai from "@/assets/destination-dubai.jpg";
import destSwitzerland from "@/assets/destination-switzerland.jpg";
import destMaldives from "@/assets/destination-maldives.jpg";

const imageMap: Record<string, string> = {
  "destination-india": destIndia,
  "destination-greece": destGreece,
  "destination-bali": destBali,
  "destination-dubai": destDubai,
  "destination-switzerland": destSwitzerland,
  "destination-maldives": destMaldives,
};

const whyIcons = [Award, Shield, Clock, Heart, Sparkles, Users];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Index = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Beautiful tropical destination" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <span className="inline-block bg-accent/20 text-accent-foreground border border-accent-foreground/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              ✈️ Your Complete Travel Partner
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Explore the World with{" "}
              <span className="text-accent">Sandis Tours</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed">
              Flights, Hotels, Visa & Complete Travel Solutions — crafted with care for unforgettable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-8 py-3.5 rounded-lg font-semibold text-center backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors">
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-sand">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading label="What We Offer" title="Our Premium Services" subtitle="From flights to visas, we handle every aspect of your travel journey." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, i) => (
              <motion.a
                key={service.id}
                href={getWhatsAppServiceUrl(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card rounded-xl p-5 shadow-card hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground">{service.title}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading label="Popular Destinations" title="Trending Tour Packages" subtitle="Handpicked destinations loved by our travellers." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={imageMap[pkg.image]} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={768} height={512} />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full uppercase">
                    {pkg.type}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">{pkg.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{pkg.destination} · {pkg.duration}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-bold text-lg">Starting {pkg.price}</span>
                    <a href={getWhatsAppServiceUrl(pkg.title)} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline">
                      Enquire →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/packages" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              View All Packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-sand">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading label="Why Sandis Tours" title="Why Travellers Trust Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex gap-4 bg-card p-6 rounded-xl shadow-card">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading label="Testimonials" title="What Our Clients Say" />
          <div className="max-w-2xl mx-auto relative">
            <motion.div key={testimonialIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-card rounded-xl p-8 shadow-premium text-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-lg italic mb-6">"{testimonials[testimonialIndex].text}"</p>
              <p className="font-display font-semibold text-foreground">{testimonials[testimonialIndex].name}</p>
              <p className="text-muted-foreground text-sm">{testimonials[testimonialIndex].location}</p>
            </motion.div>
            <div className="flex justify-center gap-3 mt-6">
              <button onClick={() => setTestimonialIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1))} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => setTestimonialIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1))} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-cta">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Ready to Plan Your Dream Vacation?
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Get in touch with our travel experts and receive a personalized quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="bg-card text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Chat on WhatsApp
              </a>
              <Link to="/contact" className="border-2 border-accent-foreground text-accent-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-accent-foreground/10 transition-colors">
                Send Enquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
