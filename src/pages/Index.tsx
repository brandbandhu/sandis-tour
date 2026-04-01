import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Star, ChevronLeft, ChevronRight, Award, Clock, Shield, Heart, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { services, topDestinations, domesticPackages, internationalPackages, testimonials, whyChooseUs, heroSlides, experiences } from "@/lib/data";
import { getWhatsAppUrl, getWhatsAppServiceUrl } from "@/lib/whatsapp";
import { destinationImages, heroImages } from "@/lib/images";

const whyIcons = [Award, Shield, Clock, Heart, Sparkles, Users];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Index = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setHeroIndex((p) => (p + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <Layout>
      {/* Hero Slider */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === heroIndex ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={heroImages[slide.image]}
              alt={slide.title}
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
          </div>
        ))}

        <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              {heroSlides[heroIndex].title}
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8">
              {heroSlides[heroIndex].subtitle}
            </p>
            <div className="flex gap-4">
              <Link
                to="/packages"
                className="bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                {heroSlides[heroIndex].cta} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 px-7 py-3.5 rounded-lg font-semibold backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors"
              >
                Know More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === heroIndex ? "bg-accent w-8" : "bg-primary-foreground/50"}`}
            />
          ))}
        </div>
      </section>

      {/* Plan Your Holiday - Search bar like Odyssey */}
      <section className="relative -mt-16 z-10 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-xl shadow-premium p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-foreground mb-4">Plan Your Holiday</h2>
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Top Destinations - Grid like JK Tours */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading label="Explore" title="Top Destinations" subtitle="Discover our most popular travel destinations across India and abroad." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {topDestinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Link
                  to={`/packages?dest=${dest.name.toLowerCase()}`}
                  className="block relative h-44 md:h-52 rounded-xl overflow-hidden group"
                >
                  <img
                    src={destinationImages[dest.image]}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width={768}
                    height={512}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-lg font-bold text-primary-foreground">{dest.name}</h3>
                    <p className="text-primary-foreground/70 text-xs">{dest.tagline}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Offers Carousel - like Odyssey */}
      <section className="py-16 bg-gradient-sand">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading label="Holidays in India" title="Top Domestic Travel Offers" subtitle="Explore the beauty of incredible India with our curated packages." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {domesticPackages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={destinationImages[pkg.image]} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={768} height={512} />
                  <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {pkg.price}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-foreground mb-1">{pkg.title}</h3>
                  <p className="text-muted-foreground text-xs mb-2">{pkg.destination}</p>
                  <p className="text-muted-foreground text-xs mb-3">{pkg.duration}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {pkg.highlights.map((h) => (
                      <span key={h} className="text-[10px] bg-teal-light text-primary px-2 py-0.5 rounded-full">{h}</span>
                    ))}
                  </div>
                  <a
                    href={getWhatsAppServiceUrl(pkg.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-primary text-primary-foreground py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Enquire Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Offers */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading label="Holidays Abroad" title="Top International Travel Offers" subtitle="From Dubai to Switzerland, discover the world with Sandis Tours." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {internationalPackages.slice(0, 8).map((pkg, i) => (
              <motion.div
                key={pkg.id}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={destinationImages[pkg.image]} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={768} height={512} />
                  <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {pkg.price}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-foreground mb-1">{pkg.title}</h3>
                  <p className="text-muted-foreground text-xs mb-2">{pkg.destination}</p>
                  <p className="text-muted-foreground text-xs mb-3">{pkg.duration}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {pkg.highlights.map((h) => (
                      <span key={h} className="text-[10px] bg-teal-light text-primary px-2 py-0.5 rounded-full">{h}</span>
                    ))}
                  </div>
                  <a
                    href={getWhatsAppServiceUrl(pkg.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-primary text-primary-foreground py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Enquire Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/packages" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              View All Packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-16 bg-gradient-sand">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading label="Travel By Experience" title="Choose Your Experience" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                {...fadeUp}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link
                  to="/packages"
                  className="flex flex-col items-center p-5 bg-card rounded-xl shadow-card hover:shadow-premium hover:-translate-y-1 transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <exp.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5">{exp.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry + Newsletter section like Odyssey */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-premium border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Enquire Now</h3>
              <p className="text-muted-foreground text-sm mb-5">Tell us about your dream holiday and we'll create a customized plan for you.</p>
              <EnquiryForm compact />
            </div>
            <div>
              {/* Why Choose Us */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Why Plan Your Travel With Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.slice(0, 4).map((item, i) => {
                  const Icon = whyIcons[i];
                  return (
                    <motion.div key={i} {...fadeUp} transition={{ duration: 0.3, delay: i * 0.08 }} className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display text-sm font-semibold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <Link to="/about" className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4 hover:underline">
                Learn More About Us <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-sand">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading label="What We Offer" title="Our Travel Services" subtitle="From flights to visas, we handle every aspect of your travel journey." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, i) => (
              <motion.a
                key={service.id}
                href={getWhatsAppServiceUrl(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeUp}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="bg-card rounded-xl p-5 shadow-card hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors">
                  <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground">{service.title}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading label="Client Reviews" title="What Our Clients Say" />
          <div className="max-w-3xl mx-auto relative">
            <motion.div key={testimonialIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-card rounded-xl p-8 md:p-10 shadow-premium text-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-base md:text-lg italic leading-relaxed mb-6">"{testimonials[testimonialIndex].text}"</p>
              <p className="font-display font-bold text-foreground">{testimonials[testimonialIndex].name}</p>
              <p className="text-muted-foreground text-sm">{testimonials[testimonialIndex].location}</p>
            </motion.div>
            <div className="flex justify-center gap-3 mt-6">
              <button onClick={() => setTestimonialIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1))} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIndex(i)} className={`w-2.5 h-2.5 rounded-full my-auto transition-all ${i === testimonialIndex ? "bg-primary w-6" : "bg-border"}`} />
              ))}
              <button onClick={() => setTestimonialIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1))} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 bg-gradient-cta">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Looking for Something Different?
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Tours can be fully customized. Contact our team to create a tour itinerary just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="bg-card text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Chat on WhatsApp
              </a>
              <Link to="/contact" className="border-2 border-accent-foreground text-accent-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-accent-foreground/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
