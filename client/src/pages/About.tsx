export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">About The Wingman Project</h1>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
           We are a student-led tutoring program designed to provide academic support and build confidence in underserved youth. Our mission is to empower students through peer-to-peer mentorship, creating a supportive learning environment that fosters academic success and personal growth. We believe in a buddy system that helps students and tutors learn from each other for a productive and enjoyable experience. 
          </p>
          
          <div className="mt-8 glass bg-primary/10 border border-primary/20 p-6 rounded-3xl max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Student-Led Excellence</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our tutoring program is designed and led by high-achieving students who understand the challenges faced by their peers. Through peer-to-peer mentorship, we create supportive learning environments that build both academic skills and personal confidence.
              </p>
            </div>
          </div>
          
          <div className="mt-8 glass bg-quantum/10 border border-quantum/20 p-6 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-quantum mb-4 text-center">What makes us different</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">Buddy system</div>
                <p className="text-muted-foreground">Adolescents tutor adolescents for a more relatable learning experience.</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">Free 1:1 Sessions</div>
                <p className="text-muted-foreground">The Wingman Project is a volunteer organization. All students have to worry about is getting the academic assistance they deserve.</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Flexibility is our priority</div>
                <p className="text-muted-foreground">We want students to learn at their own pace, on their own time. Class strucutres are designed to work around everyone's schedules.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Partner Section */}
        <div className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white p-12 rounded-3xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-8 w-16 h-16 border border-white rounded-full animate-quantum-wave"></div>
            <div className="absolute bottom-8 right-8 w-20 h-20 border border-white rounded-full animate-quantum-wave" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Partners: Sponsor 1 and Sponsor 2</h2>
            <p className="text-xl text-purple-100 leading-relaxed">
              This year we are partnering with <strong>Sponsor 1</strong> and <strong>Sponsor 2</strong> to serve their students with our tutoring services. Learn more about <strong>Sponsor 1</strong> and <strong>Sponsor 2</strong> using the links below!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
