import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do I need prior experience in quantum physics?",
    answer: "No prior experience is required! We encourage students from all backgrounds to participate. Resources and guidance materials are provided to help you get started."
  },
  {
    question: "Can I work with a mentor?",
    answer: "Yes! We encourage students to work with teachers, professors, or other mentors. However, the work must be primarily yours, and you must acknowledge all assistance received."
  },
  {
    question: "What file formats are accepted?",
    answer: "We accept PDF documents, PowerPoint presentations, and video files (MP4). Maximum file size is 50MB. For larger projects, please provide a link to cloud storage."
  },
  {
    question: "How are projects evaluated?",
    answer: "Projects are evaluated by a panel of quantum physics experts based on creativity, scientific accuracy, clarity of presentation, and depth of understanding demonstrated."
  },
  {
    question: "Are international students eligible?",
    answer: "Absolutely! The competition is open to high school students worldwide. All submissions must be in English, but we welcome participants from all countries."
  }
];

export default function Contact() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact & FAQ</h1>
          <p className="text-xl text-gray-600">Get in touch with our team or find answers to frequently asked questions</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Support</h3>
                  <p className="text-gray-600">info@quantumchallenge.org</p>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone Support</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 9AM-5PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-quantum text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office Address</h3>
                  <p className="text-gray-600">
                    123 Science Drive<br />
                    University City, UC 12345
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Follow Our Updates</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-secondary hover:text-blue-800 text-2xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-secondary hover:text-blue-800 text-2xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-secondary hover:text-blue-800 text-2xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-secondary hover:text-blue-800 text-2xl">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{faq.question}</span>
                      <i className={`fas fa-chevron-down transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}></i>
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="p-4 pt-0 text-gray-600">
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
