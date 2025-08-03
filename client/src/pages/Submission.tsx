import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Submission() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(6).fill(false));

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
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Submit Your Entry</h1>
          <p className="text-xl text-gray-600">
            Ready to showcase your quantum physics knowledge? Complete the form below to submit your competition entry.
          </p>
        </div>

        {/* Pre-submission Checklist */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
            <i className="fas fa-exclamation-triangle mr-3"></i>
            Before You Submit - Checklist
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="flex items-center text-yellow-700 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-3 text-yellow-600"
                  checked={checkedItems[0]}
                  onChange={() => handleCheckboxChange(0)}
                />
                Your project addresses quantum physics concepts
              </label>
              <label className="flex items-center text-yellow-700 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-3 text-yellow-600"
                  checked={checkedItems[1]}
                  onChange={() => handleCheckboxChange(1)}
                />
                All sources are properly cited
              </label>
              <label className="flex items-center text-yellow-700 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-3 text-yellow-600"
                  checked={checkedItems[2]}
                  onChange={() => handleCheckboxChange(2)}
                />
                Work is original and completed during competition period
              </label>
            </div>
            <div className="space-y-2">
              <label className="flex items-center text-yellow-700 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-3 text-yellow-600"
                  checked={checkedItems[3]}
                  onChange={() => handleCheckboxChange(3)}
                />
                Report is 5-15 pages (or equivalent presentation)
              </label>
              <label className="flex items-center text-yellow-700 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-3 text-yellow-600"
                  checked={checkedItems[4]}
                  onChange={() => handleCheckboxChange(4)}
                />
                Team has 3 members or fewer
              </label>
              <label className="flex items-center text-yellow-700 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-3 text-yellow-600"
                  checked={checkedItems[5]}
                  onChange={() => handleCheckboxChange(5)}
                />
                All team members meet age requirements
              </label>
            </div>
          </div>
        </div>

        {/* Submission Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg border">
            <h3 className="text-lg font-semibold text-primary mb-3">Individual Submission</h3>
            <p className="text-gray-600 mb-4">Submit your project as a solo researcher and showcase your individual talents.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Single author credit</li>
              <li>• Faster submission process</li>
              <li>• Individual recognition</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border">
            <h3 className="text-lg font-semibold text-accent mb-3">Team Submission</h3>
            <p className="text-gray-600 mb-4">Collaborate with up to 2 other students for a comprehensive project.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Up to 3 team members</li>
              <li>• Shared recognition and awards</li>
              <li>• Collaborative research experience</li>
            </ul>
          </div>
        </div>

        {/* Google Form Integration */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <i className="fas fa-file-upload text-4xl text-secondary mb-4"></i>
            <h3 className="text-2xl font-semibold text-primary mb-2">Official Submission Form</h3>
            <p className="text-gray-600">Click the button below to access the Google Form for your competition submission</p>
          </div>
          
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <i className="fas fa-external-link-alt text-3xl text-gray-400 mb-4"></i>
            <h4 className="text-lg font-semibold text-gray-600 mb-4">Google Form Integration</h4>
            <p className="text-gray-500 mb-6">
              The official submission form will allow students to:
            </p>
            <ul className="text-left text-gray-500 max-w-md mx-auto mb-6 space-y-2">
              <li>• Upload their project files (PDF, presentations, etc.)</li>
              <li>• Provide team member information</li>
              <li>• Select their project category</li>
              <li>• Submit contact and school details</li>
              <li>• Agree to competition terms</li>
            </ul>
            <Button
              onClick={openGoogleForm}
              className="bg-secondary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Open Submission Form
            </Button>
          </div>
        </div>

        {/* Support Information */}
        <div className="mt-12 bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-primary mb-4">Need Help?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Technical Support</h4>
              <p className="text-gray-600 text-sm mb-2">Having trouble with the submission form?</p>
              <p className="text-secondary font-semibold">tech-support@quantumchallenge.org</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Academic Questions</h4>
              <p className="text-gray-600 text-sm mb-2">Questions about project requirements?</p>
              <p className="text-secondary font-semibold">academic@quantumchallenge.org</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
