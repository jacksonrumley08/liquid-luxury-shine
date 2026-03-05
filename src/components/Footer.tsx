import { Phone, Mail, Globe, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="font-display text-2xl tracking-[0.2em] text-foreground">
              P<span className="text-primary">U</span>RE
            </span>
            <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mt-1">
              Water Innovations
            </p>
            <p className="font-body text-sm text-muted-foreground mt-2">
              Whole Home Water Filtration Systems
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 font-body text-sm text-muted-foreground">
            <a href="tel:8327668624" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> 832-766-8624
            </a>
            <a href="mailto:jasonpondant@pure-wi.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> jasonpondant@pure-wi.com
            </a>
            <a href="https://www.pure-wi.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Globe className="w-4 h-4" /> pure-wi.com
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Facebook className="w-4 h-4" /> Facebook
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Pure Water Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
