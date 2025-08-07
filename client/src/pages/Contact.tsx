export default function Contact() {

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">Get in touch with our team and meet the leadership behind The Wingman Project</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="glass bg-card/60 p-6 rounded-3xl border border-border/50 hover:border-secondary/30 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-secondary to-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground mb-2">Email Support</h3>
                    <p className="text-muted-foreground mb-1">info@wingmanproject.org</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="glass bg-card/60 p-6 rounded-3xl border border-border/50 hover:border-accent/30 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-accent to-quantum text-white w-16 h-16 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-2xl">🏫</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground mb-2">School Partnerships</h3>
                    <p className="text-muted-foreground mb-1">Working with local schools</p>
                    <p className="text-sm text-muted-foreground">Building community connections</p>
                  </div>
                </div>
              </div>
              
              <div className="glass bg-card/60 p-6 rounded-3xl border border-border/50 hover:border-quantum/30 transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-quantum to-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground mb-2">Phone Support</h3>
                    <p className="text-muted-foreground mb-1">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-5PM EST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 glass bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-3xl border border-primary/20">
              <h3 className="font-bold text-xl text-foreground mb-6">Follow Our Updates</h3>
              <div className="flex space-x-6">
                <a href="#" className="w-12 h-12 bg-secondary hover:bg-secondary/80 text-white rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                  <i className="fab fa-twitter text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-secondary hover:bg-secondary/80 text-white rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                  <i className="fab fa-facebook text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-secondary hover:bg-secondary/80 text-white rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-secondary hover:bg-secondary/80 text-white rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                  <i className="fab fa-youtube text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Our Leadership Team</h2>
            <div className="space-y-6">
              {/* President */}
              <div className="glass bg-card/60 p-6 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    P
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-foreground mb-2">President</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      Leading our mission to provide accessible, peer-to-peer tutoring for underserved youth. Overseeing strategic direction and community partnerships.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">Position available</span> - Contact us to learn more
                    </div>
                  </div>
                </div>
              </div>

              {/* Outreach Coordinator */}
              <div className="glass bg-card/60 p-6 rounded-3xl border border-border/50 hover:border-secondary/30 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    O
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-foreground mb-2">Outreach Coordinator</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      Building connections with schools and communities to identify students who would benefit from our tutoring services. Developing outreach programs and partnerships.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">Position available</span> - Contact us to learn more
                    </div>
                  </div>
                </div>
              </div>

              {/* Web Developer */}
              <div className="glass bg-card/60 p-6 rounded-3xl border border-border/50 hover:border-accent/30 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent to-quantum rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    W
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-foreground mb-2">Web Developer</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      Maintaining and enhancing our digital platform to ensure seamless access to tutoring resources and services for students and volunteers.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">Position available</span> - Contact us to learn more
                    </div>
                  </div>
                </div>
              </div>

              {/* Student-teacher Coordinator */}
              <div className="glass bg-card/60 p-6 rounded-3xl border border-border/50 hover:border-quantum/30 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-quantum to-primary rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    S
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-foreground mb-2">Student-teacher Coordinator</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      Recruiting, training, and supporting our student tutors. Matching tutors with students and ensuring quality educational experiences for all participants.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">Position available</span> - Contact us to learn more
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
