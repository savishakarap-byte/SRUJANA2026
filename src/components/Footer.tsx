import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold mb-3">
            <span className="gradient-text">SRUJANA 2026</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            A state-level innovation fest organized by Savishkar-Andhra Pradesh.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              <span>savishkarandhrapradesh@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              <span>+91 93919 05274</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              <span>Savishkar-AP, Visakhapatnam</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <a href="/register" className="block hover:text-primary transition-colors">Register</a>
            <a href="/poster" className="block hover:text-primary transition-colors">Poster</a>
            <a href="/brochure" className="block hover:text-primary transition-colors">Brochure</a>
             <div className="pt-3 border-t border-border mt-3 space-y-2">
      <Link
        to="/terms-and-conditions"
        className="block hover:text-primary transition-colors"
      >
        Terms & Conditions
      </Link>

      <Link
        to="/refund-policy"
        className="block hover:text-primary transition-colors"
      >
        Refund Policy
      </Link>
    </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 SRUJANA — Savishkar Andhra Pradesh. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
