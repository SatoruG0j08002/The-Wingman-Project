import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Submission() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(8).fill(false));

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const openGoogleForm = () => {
    // Replace with actual Google Form URL
    window.open("https://forms.google.com/your-actual-form-url", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">Are you ready to learn or to teach? Sign up here!</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">The Wingman Project is happy to welcome new students as well as tutors who have fresh, diverse perspectives to offer. </p>
        </div>

        {/* Pre-submission Checklist */}
        <div className="glass bg-gradient-to-br from-accent/5 to-quantum/5 border border-accent/20 p-10 mb-12 rounded-3xl">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <span className="mr-4 text-accent text-3xl">📋</span>
            Entry Submission Checklist
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="flex items-start text-foreground cursor-pointer group" data-testid="checkbox-quantum-concepts">
                <input
                  type="checkbox"
                  className="mr-4 mt-1 text-accent scale-125"
                  checked={checkedItems[0]}
                  onChange={() => handleCheckboxChange(0)}
                />
                <span className="group-hover:text-primary transition-colors">Your presentation analyzes peer-reviewed quantum physics articles</span>
              </label>
              <label className="flex items-start text-foreground cursor-pointer group" data-testid="checkbox-citations">
                <input
                  type="checkbox"
                  className="mr-4 mt-1 text-accent scale-125"
                  checked={checkedItems[1]}
                  onChange={() => handleCheckboxChange(1)}
                />
                <span className="group-hover:text-primary transition-colors">All peer-reviewed sources are properly cited</span>
              </label>
              <label className="flex items-start text-foreground cursor-pointer group" data-testid="checkbox-original">
                <input
                  type="checkbox"
                  className="mr-4 mt-1 text-accent scale-125"
                  checked={checkedItems[2]}
                  onChange={() => handleCheckboxChange(2)}
                />
                <span className="group-hover:text-primary transition-colors">Analysis and presentation are your original work</span>
              </label>
              <label className="flex items-start text-foreground cursor-pointer group" data-testid="checkbox-category">
                <input
                  type="checkbox"
                  className="mr-4 mt-1 text-accent scale-125"
                  checked={checkedItems[3]}
                  onChange={() => handleCheckboxChange(3)}
                />
                <span className="group-hover:text-primary transition-colors">You've selected either Quantum Computation or Quantum Physics category</span>
              </label>
            </div>
            <div className="space-y-4">
              <label className="flex items-start text-foreground cursor-pointer group" data-testid="checkbox-format">
                <input
                  type="checkbox"
                  className="mr-4 mt-1 text-accent scale-125"
                  checked={checkedItems[4]}
                  onChange={() => handleCheckboxChange(4)}
                />
                <span className="group-hover:text-primary transition-colors">Submission is either a slideshow OR poster presentation</span>
              </label>
              <label className="flex items-start text-foreground cursor-pointer group" data-testid="checkbox-individual">
                <input
                  type="checkbox"
                  className="mr-4 mt-1 text-accent scale-125"
                  checked={checkedItems[5]}
                  onChange={() => handleCheckboxChange(5)}
                />
                <span className="group-hover:text-primary transition-colors">This is an individual submission (no teams)</span>
              </label>
              <label className="flex items-start text-foreground cursor-pointer group" data-testid="checkbox-age">
                <input
                  type="checkbox"
                  className="mr-4 mt-1 text-accent scale-125"
                  checked={checkedItems[6]}
                  onChange={() => handleCheckboxChange(6)}
                />
                <span className="group-hover:text-primary transition-colors">You meet age requirements (13-18, high school student)</span>
              </label>
              <label className="flex items-start text-foreground cursor-pointer group" data-testid="checkbox-understanding">
                <input
                  type="checkbox"
                  className="mr-4 mt-1 text-accent scale-125"
                  checked={checkedItems[7]}
                  onChange={() => handleCheckboxChange(7)}
                />
                <span className="group-hover:text-primary transition-colors">Your presentation demonstrates deep understanding of quantum concepts</span>
              </label>
            </div>
          </div>
        </div>

        {/* Submission Format Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass bg-card/60 p-8 rounded-3xl border border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-secondary to-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Slideshow Presentation</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">Create an engaging slideshow that walks through your quantum research analysis with clear explanations and visual aids.</p>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-center"><span className="text-secondary mr-3">✓</span>PowerPoint, Google Slides, or PDF format</li>
              <li className="flex items-center"><span className="text-secondary mr-3">✓</span>10-20 slides recommended</li>
              <li className="flex items-center"><span className="text-secondary mr-3">✓</span>Include visuals and diagrams</li>
              <li className="flex items-center"><span className="text-secondary mr-3">✓</span>Tell a clear research story</li>
            </ul>
          </div>
          
          <div className="glass bg-card/60 p-8 rounded-3xl border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-accent to-quantum w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">📄</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Research Poster</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">Design a comprehensive poster that summarizes your quantum research findings in an academic conference style.</p>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-center"><span className="text-accent mr-3">✓</span>Single page, high-resolution format</li>
              <li className="flex items-center"><span className="text-accent mr-3">✓</span>Standard academic poster layout</li>
              <li className="flex items-center"><span className="text-accent mr-3">✓</span>Include graphs and equations</li>
              <li className="flex items-center"><span className="text-accent mr-3">✓</span>Professional scientific design</li>
            </ul>
          </div>
        </div>

        {/* Google Form Integration */}
        <div className="glass bg-card/60 border border-border/50 rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl animate-pulse-quantum">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="text-3xl font-bold text-primary mb-4">Official Submission Portal</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Submit your quantum entry through our submission portal for QubitMinded 2025
            </p>
          </div>
          
          <div className="glass bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-3xl p-10 text-center">
            <div className="mb-8">
              <span className="text-4xl text-primary mb-6 block">📤</span>
              <h4 className="text-2xl font-bold text-foreground mb-6">Ready to Submit?</h4>
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                The submission form includes sections for your research presentation, category selection, and academic information.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="text-left">
                <h5 className="font-bold text-foreground mb-3">What You'll Upload:</h5>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-secondary mr-3"></i>Slideshow or poster file (PDF/PowerPoint)</li>
                  <li className="flex items-center"><i className="fas fa-check text-secondary mr-3"></i>List of peer-reviewed sources analyzed</li>
                  <li className="flex items-center"><i className="fas fa-check text-secondary mr-3"></i>Brief research summary</li>
                </ul>
              </div>
              <div className="text-left">
                <h5 className="font-bold text-foreground mb-3">Required Information:</h5>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-accent mr-3"></i>Category selection (Computation/Physics)</li>
                  <li className="flex items-center"><i className="fas fa-check text-accent mr-3"></i>Student and school contact details</li>
                  <li className="flex items-center"><i className="fas fa-check text-accent mr-3"></i>Competition terms agreement</li>
                </ul>
              </div>
            </div>
            
            <Button
              onClick={openGoogleForm}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl animate-glow"
              data-testid="button-open-form"
            >
              <i className="fas fa-external-link-alt mr-3"></i>
              Open Submission Form
            </Button>
          </div>
        </div>

        {/* Support Information */}
        <div className="mt-16 glass bg-card/60 p-10 rounded-3xl border border-border/50">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Need Assistance?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <i className="fas fa-laptop-code text-2xl text-white"></i>
              </div>
              <h4 className="font-bold text-lg mb-3 text-foreground">Technical Support</h4>
              <p className="text-muted-foreground mb-4 leading-relaxed">Having trouble with the submission form or file uploads?</p>
              <p className="text-secondary font-bold text-lg">tech-support@quantumchallenge.org</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-quantum rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <i className="fas fa-graduation-cap text-2xl text-white"></i>
              </div>
              <h4 className="font-bold text-lg mb-3 text-foreground">Academic Questions</h4>
              <p className="text-muted-foreground mb-4 leading-relaxed">Questions about research requirements or categories?</p>
              <p className="text-accent font-bold text-lg">academic@quantumchallenge.org</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
