import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="glass backdrop-blur-xl bg-card/80 border-b border-border/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center" onClick={closeMobileMenu}>
              <span className="text-3xl text-primary mr-3 animate-pulse-quantum">☀️</span>
              <span className="text-xl font-bold text-primary">The Wingman Project</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                isActive("/")
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                isActive("/about")
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
            >
              About
            </Link>
            <Link
              href="/submission"
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                isActive("/submission")
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
            >
              Submit
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                isActive("/contact")
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
            >
              Contact
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground/80 hover:text-primary focus:outline-none transition-colors duration-300"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass backdrop-blur-xl bg-card/90 border-t border-border/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg mx-2 ${
                isActive("/")
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg mx-2 ${
                isActive("/about")
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
            >
              About
            </Link>
            <Link
              href="/submission"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg mx-2 ${
                isActive("/submission")
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
            >
              Submit
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg mx-2 ${
                isActive("/contact")
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
