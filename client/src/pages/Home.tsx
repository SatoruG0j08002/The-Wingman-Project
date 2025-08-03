import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-24 lg:py-40 overflow-hidden">
        {/* Quantum-inspired background pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-16 left-12 w-24 h-24 border-2 border-white rounded-full animate-quantum-wave"></div>
          <div className="absolute top-40 right-24 w-16 h-16 border-2 border-white rounded-full animate-quantum-wave" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-24 left-1/4 w-20 h-20 border-2 border-white rounded-full animate-quantum-wave" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-48 right-1/3 w-32 h-32 border-2 border-white rounded-full animate-quantum-wave" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-12 h-12 border-2 border-white rounded-full animate-quantum-wave" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-10">
            <div className="text-7xl mb-6 animate-pulse-quantum text-quantum">⟨Q⟩</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            QubitMinded Teen Quantum Physics Challenge 2025
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light max-w-4xl mx-auto text-purple-100 leading-relaxed">
            Dive deep into peer-reviewed quantum research and present your findings through creative slideshows and posters
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/about"
              className="glass bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 shadow-2xl inline-block text-center border border-white/30"
              data-testid="button-learn-more"
            >
              Learn More
            </Link>
            <Link
              href="/submission"
              className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl inline-block text-center animate-glow"
              data-testid="button-submit-entry"
            >
              Submit Your Entry
            </Link>
          </div>
        </div>
      </section>

      {/* Competition Highlights */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Why Join the Challenge?</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore cutting-edge quantum research through peer-reviewed articles and showcase your understanding through creative presentations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-8 rounded-3xl glass bg-card/50 hover:bg-card/80 transition-all duration-300 border border-border/50 hover:border-primary/20 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-secondary to-primary text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold">|0⟩</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Research Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dive into peer-reviewed quantum physics articles and develop critical analysis skills valued by universities
              </p>
            </div>
            
            <div className="text-center p-8 rounded-3xl glass bg-card/50 hover:bg-card/80 transition-all duration-300 border border-border/50 hover:border-primary/20 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-accent to-quantum text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold">|1⟩</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Creative Expression</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transform complex quantum concepts into engaging slideshows and posters that communicate science effectively
              </p>
            </div>
            
            <div className="text-center p-8 rounded-3xl glass bg-card/50 hover:bg-card/80 transition-all duration-300 border border-border/50 hover:border-primary/20 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-quantum to-accent text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold">|+⟩</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Expert Evaluation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get feedback from undergraduate and graduate students in the Quantum Coalition's university chapters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Categories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Competition Categories</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Choose your quantum specialty and explore peer-reviewed research in your area of interest
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="glass bg-card/60 p-8 rounded-3xl border border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-secondary to-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center mr-6 mt-1 shadow-lg">
                    <i className="fas fa-microchip text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-foreground mb-3">Quantum Computation</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Explore quantum circuits, qubits, algorithms, cryptography, and computational applications
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20">Quantum Circuits</span>
                      <span className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20">Qubits</span>
                      <span className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20">Algorithms</span>
                      <span className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20">Cryptography</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass bg-card/60 p-8 rounded-3xl border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-accent to-quantum text-white w-16 h-16 rounded-2xl flex items-center justify-center mr-6 mt-1 shadow-lg">
                    <i className="fas fa-atom text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-foreground mb-3">Quantum Physics</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Investigate quantum hardware design, Feynman's path integral, QED, superposition, and entanglement
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20">Hardware Design</span>
                      <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20">Path Integral</span>
                      <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20">QED</span>
                      <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20">Entanglement</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-3xl border border-primary/20">
                <h3 className="font-bold text-xl text-foreground mb-4">Judged by Quantum Coalition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your presentations will be evaluated by undergraduate and graduate students from quantum computing clubs across universities in the Quantum Coalition network.
                </p>
              </div>
            </div>
            
            <div className="glass bg-card/60 p-10 rounded-3xl border border-border/50 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <i className="fas fa-rocket text-3xl text-white"></i>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Explore?</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Start your quantum research journey by diving into cutting-edge peer-reviewed articles and creating compelling presentations.
                </p>
                <Link
              href="/submission"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 inline-block text-center shadow-xl hover:shadow-2xl"
                  data-testid="button-start-research"
                >
                  Start Your Entry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
