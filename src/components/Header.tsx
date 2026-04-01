import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Holidays",
    path: "/packages",
    submenu: [
      { label: "Domestic Packages", path: "/packages?type=domestic" },
      { label: "International Packages", path: "/packages?type=international" },
    ],
  },
  { label: "Travel Services", path: "/services" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-9 text-xs">
          <div className="flex items-center gap-6">
            <a href="mailto:info@sandistours.com" className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
              <Mail className="w-3 h-3" /> info@sandistours.com
            </a>
            <a href="tel:+919999999999" className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
              <Phone className="w-3 h-3" /> +91 99999 99999
            </a>
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-accent font-semibold hover:opacity-80 transition-opacity"
          >
            Send Query →
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="font-display text-primary-foreground font-bold text-xl">S</span>
            </div>
            <div className="leading-tight">
              <span className="font-display text-lg font-bold text-foreground block">Sandis Tours</span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Crafting Memorable Experiences</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.path + link.label} className="relative group">
                <Link
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                    location.pathname === link.path ? "text-primary bg-primary/5" : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="w-3 h-3" />}
                </Link>
                {link.submenu && (
                  <div className="absolute top-full left-0 pt-1 hidden group-hover:block">
                    <div className="bg-card rounded-lg shadow-premium border border-border py-2 min-w-[200px]">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Enquiry Now
            </a>
          </div>

          <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path + link.label}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-base font-medium py-2.5 px-3 rounded-md ${
                      location.pathname === link.path ? "text-primary bg-primary/5" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-accent-foreground px-5 py-3 rounded-lg text-sm font-semibold text-center mt-3"
                >
                  Enquiry Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
