import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, Plane, Hotel, Globe as VisaIcon } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <span className="font-display font-bold text-xl text-accent-foreground">S</span>
            </div>
            <div>
              <span className="font-display text-lg font-bold block">Sandis Tours</span>
              <span className="text-[10px] opacity-50 tracking-widest uppercase">Crafting Memorable Experiences</span>
            </div>
          </div>
          <p className="text-sm opacity-60 leading-relaxed mb-5">
            Your complete travel partner. We make dream vacations a reality with personalized service, expert guidance, and unbeatable value since 2014.
          </p>
          <div className="flex gap-3">
            {["FB", "IG", "TW", "YT"].map((label, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs font-bold hover:bg-accent transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-base font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Domestic Packages", path: "/packages?type=domestic" },
              { label: "International Packages", path: "/packages?type=international" },
              { label: "Services", path: "/services" },
              { label: "Contact Us", path: "/contact" },
            ].map((item) => (
              <Link key={item.label} to={item.path} className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-base font-semibold mb-4">Our Services</h4>
          <div className="flex flex-col gap-2.5">
            {["Tours & Travels", "Air Ticket Booking", "Hotel Booking", "Visa Services", "Holiday Packages", "Bus & Train Booking", "Travel Insurance", "Forex Services"].map((item) => (
              <span key={item} className="text-sm opacity-60">{item}</span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-base font-semibold mb-4">Contact Info</h4>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 mt-0.5 opacity-60 shrink-0" />
              <span className="text-sm opacity-60">123 Travel Street, Andheri West, Mumbai, Maharashtra 400058</span>
            </div>
            <div className="flex gap-3 items-center">
              <Phone className="w-4 h-4 opacity-60 shrink-0" />
              <a href="tel:+919999999999" className="text-sm opacity-60 hover:opacity-100">+91 99999 99999</a>
            </div>
            <div className="flex gap-3 items-center">
              <Mail className="w-4 h-4 opacity-60 shrink-0" />
              <a href="mailto:info@sandistours.com" className="text-sm opacity-60 hover:opacity-100">info@sandistours.com</a>
            </div>
          </div>
          <div className="mt-5 pt-5 border-t border-primary-foreground/10">
            <p className="text-xs opacity-40 mb-2">Working Hours</p>
            <p className="text-sm opacity-60">Mon - Sat: 9:30 AM - 7:00 PM</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs opacity-40">© {new Date().getFullYear()} Sandis Tours & Travels. All rights reserved.</p>
        <div className="flex gap-4 text-xs opacity-40">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Refund Policy</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
