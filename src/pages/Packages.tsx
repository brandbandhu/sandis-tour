import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { packages } from "@/lib/data";
import { getWhatsAppServiceUrl } from "@/lib/whatsapp";
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

const filters = ["all", "domestic", "international"] as const;

const Packages = () => {
  const [filter, setFilter] = useState<string>("all");
  const filtered = filter === "all" ? packages : packages.filter((p) => p.type === filter);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading label="Tour Packages" title="Explore Our Destinations" subtitle="Choose from our curated collection of domestic and international packages." />

          <div className="flex justify-center gap-3 mb-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
