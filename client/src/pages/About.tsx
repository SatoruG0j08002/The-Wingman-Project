export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">About The Wingman Project</h1>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            QubitMinded Teen Quantum Physics Challenge empowers high school students to explore cutting-edge quantum research through peer-reviewed articles and express their understanding through creative slideshows and posters.
          </p>
          
          <div className="mt-8 glass bg-accent/10 border border-accent/20 p-6 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-accent mb-3 flex items-center justify-center">
              <span className="text-3xl mr-3">🏴󠁵󠁳󠁴󠁸󠁿</span>
              2025 Texas Pilot Program
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              This year we are piloting QubitMinded in Texas high schools to establish our foundation and refine the competition experience. We're excited to expand nationwide for the 2026 challenge, bringing quantum education opportunities to students across America.
            </p>
          </div>
          
          <div className="mt-8 glass bg-primary/10 border border-primary/20 p-6 rounded-3xl max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Student-Led Excellence</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our tutoring program is designed and led by high-achieving students who understand the challenges faced by their peers. Through peer-to-peer mentorship, we create supportive learning environments that build both academic skills and personal confidence.
              </p>
            </div>
          </div>
          
          <div className="mt-8 glass bg-quantum/10 border border-quantum/20 p-6 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-quantum mb-4 text-center">Important Deadlines</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">September 15, 2025</div>
                <p className="text-muted-foreground">Accepting Submissions</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">November 15, 2025</div>
                <p className="text-muted-foreground">Submission Deadline</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">February 2026</div>
                <p className="text-muted-foreground">Results Announced</p>
              </div>
            </div>
          </div>
        </div>

        {/* Competition Details */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Competition Rules</h2>
            <div className="space-y-8">
              <div className="glass bg-card/60 p-8 rounded-3xl border border-border/50">
                <h3 className="font-bold text-xl mb-4 flex items-center text-foreground">
                  <span className="text-secondary mr-4 text-3xl">⟨ψ|</span>
                  Eligibility Requirements
                </h3>
                <ul className="text-muted-foreground space-y-3 leading-relaxed">
                  <li>• Must be enrolled in high school (grades 9-12)</li>
                  <li>• Ages 13-18 at time of submission</li>
                  <li>• <strong className="text-foreground">Individual entries only</strong> - showcase your personal research skills</li>
                  <li>• <strong className="text-accent">2025 Texas Pilot:</strong> Open to Texas high school students</li>
                  <li>• <strong className="text-primary">2026 Expansion:</strong> Nationwide competition planned</li>
                </ul>
              </div>
              
              <div className="glass bg-card/60 p-8 rounded-3xl border border-border/50">
                <h3 className="font-bold text-xl mb-4 flex items-center text-foreground">
                  <span className="text-accent mr-4 text-3xl">|ψ⟩</span>
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
                  <span className="text-quantum mr-4 text-3xl">⊗</span>
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
                    <span className="font-bold text-secondary">September 15, 2025</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                    <span className="text-foreground font-medium">Registration Deadline</span>
                    <span className="font-bold text-secondary">September 30, 2025</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                    <span className="text-foreground font-medium">Final Submission Deadline</span>
                    <span className="font-bold text-destructive">November 20, 2025</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                    <span className="text-foreground font-medium">Results Announced</span>
                    <span className="font-bold text-accent">February, 2025 (Exact Date TBD)</span>
                  </div>
                </div>
              </div>
              
              <div className="glass bg-gradient-to-br from-accent/5 to-quantum/5 p-8 rounded-3xl border border-accent/20">
                <h3 className="font-bold text-xl mb-6 text-foreground">Thanks to our Sponsors!</h3>
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-background/50 border border-secondary/20">
                    <h4 className="font-bold text-secondary text-lg mb-2">(Sponsor 1)</h4>
                    <p className="text-muted-foreground leading-relaxed">[insert logo].</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-background/50 border border-accent/20">
                    <h4 className="font-bold text-accent text-lg mb-2">Sponsor 2</h4>
                    <p className="text-muted-foreground leading-relaxed">[insert logo].</p>
                  </div>
                </div>
              </div>

              <div className="glass bg-gradient-to-br from-quantum/5 to-primary/5 p-8 rounded-3xl border border-quantum/20">
                <h3 className="font-bold text-xl mb-4 text-foreground">And lastly... Have a great competition!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your presentations are an oppurtunity to dive headfirst into real-world research. While the process can be challenging, have fun, and explore the interesting applications of quantum physics!
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
              Outstanding research presentations are recognized with valuable networking opportunities within the quantum science community
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center glass bg-white/10 p-8 rounded-3xl border border-white/20">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-4xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Top 5</h3>
                <p className="text-purple-100 leading-relaxed">Your win will be posted on our website, and you'll be able to ccess to real quantum hardware with (Sponsor's) advanced tier. You'll also be invited to a networking session with undergraduate and graduate students of top research universities working in quantum computing, physics, and more!</p>
              </div>
              
              <div className="text-center glass bg-white/10 p-8 rounded-3xl border border-white/20">
                <div className="bg-gradient-to-br from-gray-400 to-gray-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-4xl">🥈</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Top 20</h3>
                <p className="text-purple-100 leading-relaxed"> You'll be invited to a networking session with undergraduate and graduate students of top research universities working in quantum. Also, you'll recieve a Certificate of Excellence and a mention on our website!</p>
              </div>
              
              <div className="text-center glass bg-white/10 p-8 rounded-3xl border border-white/20">
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-4xl">🥉</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Honrable Mentions (Usually 5 extraordinary submissions that didn't qualify for Top 5 or 20).</h3>
                <p className="text-purple-100 leading-relaxed">You'll recieve a Certificate of Excellence + Mention on our website!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
