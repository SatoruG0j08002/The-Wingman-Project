import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 lg:py-32 overflow-hidden">
        {/* Quantum-inspired background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 border-2 border-white rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <i className="fas fa-atom text-6xl mb-6 animate-pulse"></i>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Teen Quantum Physics Challenge 2024
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
            Explore the fascinating world of quantum mechanics and compete with brilliant minds from around the globe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-block text-center"
            >
              Learn More
            </Link>
            <Link
              href="/submission"
              className="bg-accent hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg inline-block text-center"
            >
              Submit Your Entry
            </Link>
          </div>
        </div>
      </section>

      {/* Competition Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Participate?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of talented teenagers in exploring the mysteries of quantum physics
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
              <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-trophy text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Prestigious Awards</h3>
              <p className="text-gray-600">
                Win scholarships, recognition, and opportunities to work with leading quantum physicists
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-brain text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intellectual Challenge</h3>
              <p className="text-gray-600">
                Push your understanding of quantum mechanics to new limits with thought-provoking problems
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
              <div className="bg-quantum text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Community</h3>
              <p className="text-gray-600">
                Connect with like-minded peers and mentors from the international physics community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Competition Overview</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-calendar text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Important Dates</h3>
                    <p className="text-gray-600">
                      Registration opens: January 15, 2024<br />
                      Submission deadline: March 30, 2024<br />
                      Results announced: May 15, 2024
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-user-graduate text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Eligibility</h3>
                    <p className="text-gray-600">
                      Open to all high school students aged 13-18 worldwide. No prior quantum physics experience required.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-quantum text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-lightbulb text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Format</h3>
                    <p className="text-gray-600">
                      Solve challenging problems, design experiments, or create educational content about quantum physics concepts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern physics laboratory with quantum computing equipment"
                className="rounded-xl w-full h-64 object-cover mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">Ready to Begin?</h3>
              <p className="text-gray-600 mb-6">
                Take the first step into the quantum realm and showcase your scientific creativity.
              </p>
              <Link
                href="/submission"
                className="w-full bg-primary hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors inline-block text-center"
              >
                Start Your Submission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
