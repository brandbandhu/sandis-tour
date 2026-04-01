import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
              <span className="font-display font-bold text-lg text-accent-foreground">S</span>
            </div>
            <span className="font-display text-xl font-bold">Sandis Tours</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed mb-6">
            Your complete travel partner. We make dream vacations a reality with personalized service and unbeatable value.
          </p>
          <div className="flex gap-3">
            {[Globe, Globe, Globe, Globe].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2.5">
            {["Home", "Services", "Packages", "About", "Contact"].map((item) => (
              <Link key={item} to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Our Services</h4>
          <div className="flex flex-col gap-2.5">
            {["Tours & Travels", "Air Tickets", "Visa Services", "Hotel Booking", "Holiday Packages"].map((item) => (
              <span key={item} className="text-sm opacity-70">{item}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact Info</h4>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 mt-0.5 opacity-70 shrink-0" />
              <span className="text-sm opacity-70">123 Travel Street, Mumbai, Maharashtra, India</span>
            </div>
            <div className="flex gap-3 items-center">
              <Phone className="w-4 h-4 opacity-70 shrink-0" />
              <a href="tel:+919999999999" className="text-sm opacity-70 hover:opacity-100">+91 99999 99999</a>
            </div>
            <div className="flex gap-3 items-center">
              <Mail className="w-4 h-4 opacity-70 shrink-0" />
              <a href="mailto:info@sandistours.com" className="text-sm opacity-70 hover:opacity-100">info@sandistours.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8 py-5 text-center text-sm opacity-50">
        © {new Date().getFullYear()} Sandis Tours. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
