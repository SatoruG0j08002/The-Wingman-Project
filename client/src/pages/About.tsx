export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About the Challenge</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            The Teen Quantum Physics Challenge is designed to inspire and engage the next generation of quantum scientists through hands-on problem solving and creative exploration.
          </p>
        </div>

        {/* Competition Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Competition Rules</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  Eligibility Requirements
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Must be enrolled in high school (grades 9-12)</li>
                  <li>• Ages 13-18 at time of submission</li>
                  <li>• Individual or team entries (max 3 members)</li>
                  <li>• Open to students worldwide</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <i className="fas fa-file-alt text-blue-500 mr-3"></i>
                  Submission Requirements
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Original work completed during competition period</li>
                  <li>• Written report (5-15 pages) or creative presentation</li>
                  <li>• Bibliography citing all sources</li>
                  <li>• Must include physics concepts and mathematical analysis</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <i className="fas fa-gavel text-purple-500 mr-3"></i>
                  Academic Integrity
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• All work must be original and properly cited</li>
                  <li>• Collaboration with mentors is encouraged</li>
                  <li>• Plagiarism will result in disqualification</li>
                  <li>• AI assistance must be declared and documented</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Guidelines & Timeline</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="font-semibold text-lg mb-3">Important Deadlines</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Registration Opens</span>
                    <span className="font-semibold text-secondary">January 15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Early Registration Ends</span>
                    <span className="font-semibold text-secondary">February 15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Final Submission Deadline</span>
                    <span className="font-semibold text-red-600">March 30, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Results Announced</span>
                    <span className="font-semibold text-green-600">May 15, 2024</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-accent">
                <h3 className="font-semibold text-lg mb-3">Project Categories</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-accent">Theoretical Research</h4>
                    <p className="text-sm text-gray-600">Explore quantum phenomena through mathematical analysis</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent">Experimental Design</h4>
                    <p className="text-sm text-gray-600">Propose or conduct experiments to test quantum principles</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent">Educational Content</h4>
                    <p className="text-sm text-gray-600">Create materials to teach quantum concepts to peers</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent">Applications</h4>
                    <p className="text-sm text-gray-600">Investigate practical applications of quantum technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-medal text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">1st Place</h3>
              <p className="text-blue-100">$5,000 scholarship + mentorship program</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-medal text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">2nd Place</h3>
              <p className="text-blue-100">$3,000 scholarship + physics lab visit</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-medal text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">3rd Place</h3>
              <p className="text-blue-100">$1,500 scholarship + certificate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
