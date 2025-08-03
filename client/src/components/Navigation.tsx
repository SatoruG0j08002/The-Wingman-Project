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
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center" onClick={closeMobileMenu}>
              <i className="fas fa-atom text-2xl text-accent mr-3"></i>
              <span className="text-xl font-bold text-primary">Teen Quantum Challenge</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              href="/submission"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/submission")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Submit
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive("/")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive("/about")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              href="/submission"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive("/submission")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Submit
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive("/contact")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
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
