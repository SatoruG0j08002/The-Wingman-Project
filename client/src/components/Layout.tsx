import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>{children}</main>
      <footer className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-16 overflow-hidden">
        {/* Inspiring background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-8 left-12 w-16 h-16 border border-white rounded-full animate-quantum-wave">
            <div className="w-full h-full flex items-center justify-center text-white text-lg">☀️</div>
          </div>
          <div className="absolute top-24 right-20 w-12 h-12 border border-white rounded-full animate-quantum-wave" style={{animationDelay: '1s'}}>
            <div className="w-full h-full flex items-center justify-center text-white text-sm">📚</div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border border-white rounded-full animate-quantum-wave" style={{animationDelay: '2s'}}>
            <div className="w-full h-full flex items-center justify-center text-white text-xl">🤝</div>
          </div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 border border-white rounded-full animate-quantum-wave" style={{animationDelay: '3s'}}>
            <div className="w-full h-full flex items-center justify-center text-white text-xs">🌟</div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-3xl text-quantum mr-3 animate-pulse-quantum">☀️</span>
                <span className="text-xl font-bold">The Wingman Project</span>
              </div>
              <p className="text-orange-100 text-sm leading-relaxed">
                Empowering underserved youth through student-led tutoring and mentorship that builds confidence and academic success.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-orange-100">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/submission" className="hover:text-white transition-colors">
                    Get Started
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-orange-100">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    Math Tutoring
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    English Support
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Test Prep
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Study Skills
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-orange-100 hover:text-white text-xl transition-colors">
                  📱
                </a>
                <a href="#" className="text-orange-100 hover:text-white text-xl transition-colors">
                  📧
                </a>
                <a href="#" className="text-orange-100 hover:text-white text-xl transition-colors">
                  💬
                </a>
                <a href="#" className="text-orange-100 hover:text-white text-xl transition-colors">
                  📍
                </a>
              </div>
              <div className="text-orange-100 text-sm">
                <p>Email: info@wingmanproject.org</p>
                <p>Phone: +1 (555) 987-6543</p>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-400/30 pt-8 mt-8 text-center text-purple-100">
            <p>&copy; 2024 Teen Quantum Physics Challenge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
