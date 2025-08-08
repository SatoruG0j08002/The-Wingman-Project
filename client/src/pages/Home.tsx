import { Link } from "wouter";

import Screenshot_2025_08_06_10_05_59_PM from "@assets/Screenshot 2025-08-06 10.05.59 PM.png";

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
            <img src={Screenshot_2025_08_06_10_05_59_PM} alt="The Wingman Project" className="w-24 h-24 mx-auto mb-6 rounded-2xl animate-pulse-quantum shadow-2xl" />
          </div>
          <h1 className="md:text-7xl font-bold mb-8 tracking-tight text-[96px] text-[#000000]">The Wingman Project</h1>
          <p className="text-xl md:text-2xl mb-10 font-light max-w-4xl mx-auto leading-relaxed text-[#000000]">Student-led tutoring for underserved youth. Together, we rise.</p>
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
              data-testid="button-get-started"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      {/* Competition Highlights */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Why Choose The Wingman Project?</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Student-led, peer-to-peer tutoring that creates lasting connections and builds confidence in learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-8 rounded-3xl glass bg-card/50 hover:bg-card/80 transition-all duration-300 border border-border/50 hover:border-primary/20 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-secondary to-primary text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold">🤝</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Peer-to-Peer Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn from fellow students who understand your challenges and speak your language
              </p>
            </div>
            
            <div className="text-center p-8 rounded-3xl glass bg-card/50 hover:bg-card/80 transition-all duration-300 border border-border/50 hover:border-primary/20 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-accent to-quantum text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold">💡</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Personalized Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get one-on-one attention tailored to your learning style and academic needs
              </p>
            </div>
            
            <div className="text-center p-8 rounded-3xl glass bg-card/50 hover:bg-card/80 transition-all duration-300 border border-border/50 hover:border-primary/20 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-quantum to-accent text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold">🌟</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Building Confidence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Develop academic confidence and life skills through supportive, encouraging mentorship
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Tutoring Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Tutoring Services</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive academic support across core subjects, designed to meet students where they are
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="glass bg-card/60 p-8 rounded-3xl border border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-secondary to-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center mr-6 mt-1 shadow-lg">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-foreground mb-3">Core Academics</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Comprehensive support in essential subjects to build strong foundations for academic success.
                    </p>
                    <p className="text-sm text-muted-foreground/80 mb-2 font-medium">Subject Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20">Mathematics</span>
                      <span className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20">English</span>
                      <span className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20">Science</span>
                      <span className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20">History</span>
                      <span className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20">Electives</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass bg-card/60 p-8 rounded-3xl border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-accent to-quantum text-white w-16 h-16 rounded-2xl flex items-center justify-center mr-6 mt-1 shadow-lg">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-foreground mb-3">Test Preparation (Planned for Fall 2026)</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Fresh insight and focused study sessions to help students excel on standardized tests and important exams led by Seniors who've been through this exact process.
                    </p>
                    <p className="text-sm text-muted-foreground/80 mb-2 font-medium">Test Support:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20">SAT/ACT</span>
                      <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20">College Admissions Prep/Essays</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="glass bg-card/60 p-10 rounded-3xl border border-border/50 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Excel?</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Join our supportive community of student tutors and start your journey toward academic success today.
                </p>
                <Link
              href="/submission"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 inline-block text-center shadow-xl hover:shadow-2xl"
                  data-testid="button-get-tutoring"
                >
                  Get Tutoring
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
