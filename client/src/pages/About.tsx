export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">About the Challenge</h1>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            The Teen Quantum Physics Challenge empowers high school students to explore cutting-edge quantum research through peer-reviewed articles and express their understanding through creative slideshows and posters.
          </p>
        </div>

        {/* Competition Details */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Competition Rules</h2>
            <div className="space-y-8">
              <div className="glass bg-card/60 p-8 rounded-3xl border border-border/50">
                <h3 className="font-bold text-xl mb-4 flex items-center text-foreground">
                  <i className="fas fa-user-graduate text-secondary mr-4 text-2xl"></i>
                  Eligibility Requirements
                </h3>
                <ul className="text-muted-foreground space-y-3 leading-relaxed">
                  <li>• Must be enrolled in high school (grades 9-12)</li>
                  <li>• Ages 13-18 at time of submission</li>
                  <li>• <strong className="text-foreground">Individual entries only</strong> - showcase your personal research skills</li>
                  <li>• Open to students worldwide</li>
                </ul>
              </div>
              
              <div className="glass bg-card/60 p-8 rounded-3xl border border-border/50">
                <h3 className="font-bold text-xl mb-4 flex items-center text-foreground">
                  <i className="fas fa-microscope text-accent mr-4 text-2xl"></i>
                  Research Format
                </h3>
                <ul className="text-muted-foreground space-y-3 leading-relaxed">
                  <li>• Read and analyze peer-reviewed quantum physics articles</li>
                  <li>• Create a slideshow OR poster presentation</li>
                  <li>• Demonstrate understanding of complex concepts</li>
                  <li>• Include proper citations and references</li>
                </ul>
              </div>
              
              <div className="glass bg-card/60 p-8 rounded-3xl border border-border/50">
                <h3 className="font-bold text-xl mb-4 flex items-center text-foreground">
                  <i className="fas fa-balance-scale text-quantum mr-4 text-2xl"></i>
                  Academic Integrity
                </h3>
                <ul className="text-muted-foreground space-y-3 leading-relaxed">
                  <li>• All analysis and presentation must be original</li>
                  <li>• Proper citation of peer-reviewed sources required</li>
                  <li>• Mentorship and guidance is encouraged</li>
                  <li>• AI assistance must be declared and documented</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Guidelines & Timeline</h2>
            <div className="space-y-8">
              <div className="glass bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-3xl border border-primary/20">
                <h3 className="font-bold text-xl mb-6 text-foreground">Important Deadlines</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                    <span className="text-foreground font-medium">Registration Opens</span>
                    <span className="font-bold text-secondary">January 15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                    <span className="text-foreground font-medium">Early Registration Ends</span>
                    <span className="font-bold text-secondary">February 15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                    <span className="text-foreground font-medium">Final Submission Deadline</span>
                    <span className="font-bold text-destructive">March 30, 2024</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                    <span className="text-foreground font-medium">Results Announced</span>
                    <span className="font-bold text-accent">May 15, 2024</span>
                  </div>
                </div>
              </div>
              
              <div className="glass bg-gradient-to-br from-accent/5 to-quantum/5 p-8 rounded-3xl border border-accent/20">
                <h3 className="font-bold text-xl mb-6 text-foreground">Competition Categories</h3>
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-background/50 border border-secondary/20">
                    <h4 className="font-bold text-secondary text-lg mb-2">Quantum Computation</h4>
                    <p className="text-muted-foreground leading-relaxed">Explore quantum circuits, qubits, algorithms, cryptography, and computational applications through peer-reviewed research</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-background/50 border border-accent/20">
                    <h4 className="font-bold text-accent text-lg mb-2">Quantum Physics</h4>
                    <p className="text-muted-foreground leading-relaxed">Investigate quantum hardware design, Feynman's path integral, QED, superposition, and entanglement concepts</p>
                  </div>
                </div>
              </div>

              <div className="glass bg-gradient-to-br from-quantum/5 to-primary/5 p-8 rounded-3xl border border-quantum/20">
                <h3 className="font-bold text-xl mb-4 text-foreground">Judged by Quantum Coalition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your presentations will be evaluated by undergraduate and graduate students from quantum computing clubs across universities in the Quantum Coalition network, providing expert feedback from the next generation of quantum researchers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white p-12 rounded-3xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-8 w-16 h-16 border border-white rounded-full animate-quantum-wave"></div>
            <div className="absolute bottom-8 right-8 w-20 h-20 border border-white rounded-full animate-quantum-wave" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Awards & Recognition</h2>
            <p className="text-xl text-purple-100 text-center mb-12 max-w-3xl mx-auto">
              Outstanding research presentations are recognized with scholarships and opportunities in the quantum science community
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center glass bg-white/10 p-8 rounded-3xl border border-white/20">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <i className="fas fa-trophy text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-3">1st Place</h3>
                <p className="text-purple-100 leading-relaxed">$5,000 scholarship + mentorship with quantum researchers</p>
              </div>
              
              <div className="text-center glass bg-white/10 p-8 rounded-3xl border border-white/20">
                <div className="bg-gradient-to-br from-gray-400 to-gray-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <i className="fas fa-medal text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-3">2nd Place</h3>
                <p className="text-purple-100 leading-relaxed">$3,000 scholarship + quantum research lab visit</p>
              </div>
              
              <div className="text-center glass bg-white/10 p-8 rounded-3xl border border-white/20">
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <i className="fas fa-award text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-3">3rd Place</h3>
                <p className="text-purple-100 leading-relaxed">$1,500 scholarship + certificate of excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
