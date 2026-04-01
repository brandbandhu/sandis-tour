import { Link, useParams } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Tag, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { allPackages } from "@/lib/data";
import { destinationImages } from "@/lib/images";
import { getWhatsAppServiceUrl } from "@/lib/whatsapp";

const PackageDetail = () => {
  const { slug } = useParams();
  const pkg = allPackages.find((item) => item.slug === slug);

  if (!pkg) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Package Not Found</h1>
            <p className="text-muted-foreground mb-6">The trip you're looking for isn't available. Explore all packages instead.</p>
            <Link to="/packages" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              View Packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px]">
        <img
          src={destinationImages[pkg.image]}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/45 to-transparent" />
        <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-end pb-10">
          <div className="max-w-2xl">
            <p className="text-accent-foreground/80 text-sm uppercase tracking-widest mb-2">{pkg.type} package</p>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-3">{pkg.title}</h1>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-4">{pkg.destination}</p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-3 py-1.5 rounded-full text-sm">
                <Calendar className="w-4 h-4" /> {pkg.duration}
              </span>
              <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4" /> {pkg.price}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1.6fr_0.8fr] gap-8">
          <div>
            <SectionHeading label="Overview" title="Trip Summary" subtitle={pkg.overview} />
            <div className="flex flex-wrap gap-2 mb-8">
              {pkg.highlights.map((highlight) => (
                <span key={highlight} className="text-xs bg-teal-light text-primary px-3 py-1 rounded-full">
                  {highlight}
                </span>
              ))}
            </div>

            <SectionHeading label="Itinerary" title="Day Wise Plan" />
            <div className="grid gap-4 mb-10">
              {pkg.itinerary.map((day) => (
                <div key={day.day} className="bg-card border border-border rounded-xl p-4 shadow-card">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-semibold">{day.day}</span>
                    <h3 className="font-display text-base font-semibold text-foreground">{day.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{day.description}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-10">
              <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                <h3 className="font-display text-base font-bold text-foreground mb-3">What's Included</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pkg.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                <h3 className="font-display text-base font-bold text-foreground mb-3">What's Not Included</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pkg.exclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                <h3 className="font-display text-sm font-semibold text-foreground mb-2">Stay</h3>
                <p className="text-sm text-muted-foreground">{pkg.stay}</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                <h3 className="font-display text-sm font-semibold text-foreground mb-2">Transfers</h3>
                <p className="text-sm text-muted-foreground">{pkg.transfers}</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                <h3 className="font-display text-sm font-semibold text-foreground mb-2">Best Time to Visit</h3>
                <p className="text-sm text-muted-foreground">{pkg.bestTime}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-10">
              <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                <h3 className="font-display text-base font-bold text-foreground mb-3">Ideal For</h3>
                <div className="flex flex-wrap gap-2">
                  {pkg.idealFor.map((item) => (
                    <span key={item} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                <h3 className="font-display text-base font-bold text-foreground mb-3">Travel Notes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pkg.notes.map((note) => (
                    <li key={note} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <section className="py-8">
              <div className="bg-gradient-sand rounded-xl p-6 md:p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Need This Trip Customized?</h3>
                <p className="text-muted-foreground text-sm mb-5">Share your dates, hotel preferences, and budget. We'll tailor the perfect plan for you.</p>
                <EnquiryForm compact />
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 h-fit">
            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">Package Snapshot</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{pkg.destination}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-primary" />
                  <span>Starting from {pkg.price}</span>
                </div>
              </div>
              <a
                href={getWhatsAppServiceUrl(pkg.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block text-center bg-primary text-primary-foreground py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Enquire Now
              </a>
              <Link
                to="/contact"
                className="mt-3 block text-center border border-border py-2.5 rounded-md text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                Request Call Back
              </Link>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              <h3 className="font-display text-lg font-bold text-foreground mb-3">Why Book With Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Local experts and curated stays</li>
                <li>24/7 assistance during travel</li>
                <li>Flexible customizations</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default PackageDetail;
