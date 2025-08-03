import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>{children}</main>
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <i className="fas fa-atom text-2xl text-accent mr-3"></i>
                <span className="text-xl font-bold">Teen Quantum Challenge</span>
              </div>
              <p className="text-blue-200">
                Inspiring the next generation of quantum physicists through educational competition and discovery.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-blue-200">
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
                    Submit
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
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    Competition Rules
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    Study Materials
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Past Winners
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Physics Resources
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-blue-200 hover:text-white text-xl transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-blue-200 hover:text-white text-xl transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-blue-200 hover:text-white text-xl transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-blue-200 hover:text-white text-xl transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="text-blue-200">
                <p>Email: info@quantumchallenge.org</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 mt-8 text-center text-blue-200">
            <p>&copy; 2024 Teen Quantum Physics Challenge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
