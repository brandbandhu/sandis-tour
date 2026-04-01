import { motion } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { domesticPackages, internationalPackages } from "@/lib/data";
import { getWhatsAppServiceUrl } from "@/lib/whatsapp";
import { destinationImages } from "@/lib/images";

const allPackages = [...domesticPackages.map(p => ({ ...p, type: "domestic" })), ...internationalPackages.map(p => ({ ...p, type: "international" }))];
const filters = ["all", "domestic", "international"] as const;

const Packages = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") || "all";
  const [filter, setFilter] = useState<string>(initialType);

  const filtered = filter === "all" ? allPackages : allPackages.filter((p) => p.type === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">Tour Packages</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Choose from our curated collection of domestic and international packages, each designed for an unforgettable experience.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-16 bg-card/95 backdrop-blur-md z-30">
        <div className="container mx-auto px-4 lg:px-8 flex justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-semibold capitalize transition-colors ${
                filter === f ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {f === "all" ? "All Packages" : f}
            </button>
          ))}
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 group border border-border"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={destinationImages[pkg.image]} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={768} height={512} />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                    {pkg.type}
                  </span>
                  <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {pkg.price}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-foreground mb-1">{pkg.title}</h3>
                  <p className="text-muted-foreground text-xs mb-1">{pkg.destination}</p>
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

      {/* Enquiry Section */}
      <section className="py-14 bg-gradient-sand">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto bg-card rounded-xl p-8 shadow-premium">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2 text-center">Can't Find What You're Looking For?</h3>
            <p className="text-muted-foreground text-sm text-center mb-6">Tell us your dream destination and we'll create a custom package just for you.</p>
            <EnquiryForm compact />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
