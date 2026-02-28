import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Register", path: "/register" },
  { label: "Poster", path: "/poster" },
  { label: "Brochure", path: "/brochure" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
         <div className="flex items-center gap-3">
  {/* LEFT LOGOS */}
   <img src="/logo3.png" className="h-11" />
            {/* Text Logo */}
  <Link to="/" className="font-heading text-xl md:text-2xl font-bold tracking-tight">
    <span className="gradient-text">SRUJANA</span>
    <span className="text-muted-foreground ml-1 text-sm font-normal">2026</span>
  </Link>
</div>
  <img src="/logo1.png" className="h-10" />
  <img src="/logo2.png" className="h-10" />

 

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/register"
              className="ml-2 px-5 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground glow-button"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
        <div className="relative flex flex-col items-center gap-2 pt-8 px-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className={`w-full text-center py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/register"
            className="w-full text-center mt-4 px-5 py-3 rounded-lg text-lg font-semibold bg-primary text-primary-foreground glow-button"
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
