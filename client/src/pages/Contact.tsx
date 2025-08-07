import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do I need prior experience in quantum physics?",
    answer: "No prior experience is required! The competition is designed to encourage students to explore quantum concepts through peer-reviewed research. We provide guidance on how to read and analyze scientific papers."
  },
  {
    question: "Can I work with a mentor?",
    answer: "Yes! We encourage students to work with teachers, professors, or mentors. However, the analysis and presentation must be your original work, and you must acknowledge all assistance received."
  },
  {
    question: "What presentation formats are accepted?",
    answer: "We accept slideshows (PowerPoint, Google Slides, PDF) or research posters. Slideshows should be 10-20 slides, and posters should follow standard academic conference formats."
  },
  {
    question: "Who judges the submissions?",
    answer: "Submissions are evaluated by undergraduate and graduate students from quantum computing clubs across universities in the Quantum Coalition network, providing expert peer review from the next generation of quantum researchers."
  },
  {
    question: "Can teams participate?",
    answer: "No, this competition focuses on individual research skills. We want to see each student's personal ability to analyze complex quantum physics literature and communicate their understanding."
  },
  {
    question: "What are the two competition categories?",
    answer: "Quantum Computation (covering circuits, qubits, algorithms, cryptography) and Quantum Physics (covering hardware design, path integrals, QED, superposition, entanglement). Choose the category that matches your research focus."
  },
  {
    question: "Are international students eligible?",
    answer: "No. For the 2025 year, we are planning to pilot this program for only Texas high school students. We plan to expand this initiaive to all high schoolers across the U.S. in 2026."
  }
];

export default function Contact() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">Contact & FAQ</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">Get in touch with our team or find answers to frequently asked questions about the QubitMinded 2025 competition</p>
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
                    <p className="text-muted-foreground mb-1">info@quantumchallenge.org</p>
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

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="glass bg-card/60 border border-border/50 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 hover:bg-primary/5 transition-all duration-300"
                    data-testid={`faq-question-${index}`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-foreground text-lg pr-4">{faq.question}</span>
                      <i className={`fas fa-chevron-down transform transition-transform duration-300 text-primary ${openFAQ === index ? 'rotate-180' : ''}`}></i>
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed bg-primary/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
