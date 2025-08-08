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
            Tutor Qualification Checklist
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
                <span className="group-hover:text-primary transition-colors">You are proficient at the subject(s) you want to teach (must have an A in that class)</span>
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
                <span className="group-hover:text-primary transition-colors">You have applied to tutor a subject that you have ALREADY taken in the past; you cannot tutor for a subject you are currently taking.</span>
              </label>
            </div>
          </div>
        </div>

        {/* Google Form Integration */}
        <div className="glass bg-card/60 border border-border/50 rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl animate-pulse-quantum">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="text-3xl font-bold text-primary mb-4">Sign Up Today!</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Sign up as a prospective leadership member, tutor, or student and join The Wingman Project community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Tutor Signup */}
            <div className="glass bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-6 rounded-3xl text-center">
              <h4 className="text-xl font-bold text-primary mb-4">Tutor Signup</h4>
              <Button
                onClick={() => window.open("https://forms.gle/YOUR_TUTOR_FORM_LINK", "_blank")}
                className="bg-primary text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-primary/90 shadow"
              >
                Start Teaching
              </Button>
            </div>

            {/* Leadership Application */}
            <div className="glass bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 p-6 rounded-3xl text-center">
              <h4 className="text-xl font-bold text-accent mb-4">Leadership Application</h4>
              <Button
                onClick={() => window.open("https://forms.gle/YOUR_LEADERSHIP_FORM_LINK", "_blank")}
                className="bg-accent text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-accent/90 shadow"
              >
                Apply Now
              </Button>
            </div>

            {/* Student Signup */}
            <div className="glass bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 p-6 rounded-3xl text-center">
              <h4 className="text-xl font-bold text-secondary mb-4">Student Signup</h4>
              <Button
                onClick={() => window.open("https://forms.gle/YOUR_STUDENT_FORM_LINK", "_blank")}
                className="bg-secondary text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-secondary/90 shadow"
              >
                Start Learning
              </Button>
            </div>
          </div>
        </div>


        {/* Support Information */}
        <div className="mt-16 glass bg-card/60 p-10 rounded-3xl border border-border/50">
          <h3 className="text-3xl font-bold text-primary mb-10 text-center">Need Assistance?</h3>

          <div className="flex justify-center items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <i className="fas fa-laptop-code text-2xl text-white"></i>
              </div>
              <h4 className="font-bold text-xl mb-3 text-foreground">Class Rescheduling</h4>
              <p className="text-muted-foreground mb-4 leading-relaxed text-lg">Please reschedule at least 24 hours before your previously scheduled session.</p>
              <p className="text-accent font-bold text-xl">academic@TWP.org</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
