import React from "react";

const problems = [
  {
    title: "MRI-Based Cancer Detection System",
    problem:
      "Manual analysis of MRI scans is time-consuming and requires high expertise, leading to delays and inconsistencies in early cancer detection.",
    solution: [
      "Process MRI images for tumor detection",
      "Use AI/ML for classification & segmentation",
      "Highlight anomalies with confidence levels",
      "Provide explainable outputs for doctors",
    ],
    impact: [
      "Early detection of cancer",
      "Reduced workload for radiologists",
      "Improved diagnostic accuracy",
    ],
  },
  {
    title: "Rule-Based Fault Detection Engine",
    problem:
      "Industrial failures go unnoticed due to complex vibration data that is hard to interpret across domains.",
    solution: [
      "Analyze accelerometer data (time, frequency, spectrogram)",
      "Extract features like peaks & harmonics",
      "Detect faults like imbalance & bearing issues",
      "Provide explainable rule-based outputs",
    ],
    impact: [
      "Predictive maintenance",
      "Reduced downtime",
      "Improved safety",
    ],
  },
  {
    title: "Offline LLM with Avatar Interface",
    problem:
      "Most AI systems depend on internet connectivity, raising privacy and accessibility issues.",
    solution: [
      "Run LLM fully offline",
      "Add customizable avatar (voice + visual)",
      "Support multilingual interaction",
      "Ensure privacy with local memory",
    ],
    impact: [
      "Accessible AI in rural areas",
      "Privacy-first systems",
      "Personalized assistants",
    ],
  },
  {
    title: "AR/VR Naval Ship Simulation",
    problem:
      "Lack of immersive tools for training and understanding complex naval systems.",
    solution: [
      "3D modeling of naval ships",
      "Interactive AR/VR exploration",
      "Simulate real-world scenarios",
      "Training modules in immersive environments",
    ],
    impact: [
      "Better defense training",
      "Reduced risks",
      "Improved system understanding",
    ],
  },
  {
    title: "Automated Compliance Interpreter",
    problem:
      "Complex legal regulations are difficult to interpret, causing compliance risks.",
    solution: [
      "Convert policies into actionable steps",
      "Map rules to workflows",
      "Detect violations",
      "Provide explainable outputs",
    ],
    impact: [
      "Reduced legal risks",
      "Better governance",
      "Time savings",
    ],
  },
  {
    title: "Context-Aware Notification Filter",
    problem:
      "Too many notifications reduce productivity and cause distraction.",
    solution: [
      "Understand user context",
      "Filter and prioritize alerts",
      "Adaptive learning system",
      "User control over notifications",
    ],
    impact: [
      "Better focus",
      "Reduced digital overload",
      "Improved productivity",
    ],
  },
  {
    title: "Personalized Financial Analyzer",
    problem:
      "People lack insights into their financial behavior.",
    solution: [
      "Analyze spending patterns",
      "Detect risky habits",
      "Suggest savings & investments",
      "Provide forecasts",
    ],
    impact: [
      "Better financial planning",
      "Improved savings",
      "Reduced stress",
    ],
  },
  {
    title: "Behavioral Habit Correction Engine",
    problem:
      "People struggle to maintain positive habits consistently.",
    solution: [
      "Track behavior patterns",
      "Detect negative trends",
      "Provide smart nudges",
      "Adaptive improvement strategies",
    ],
    impact: [
      "Better lifestyle",
      "Habit consistency",
      "Personal growth",
    ],
  },
];

const ProblemStatements = () => {
  return (
    <div className="min-h-screen bg-white px-6 md:px-16 py-12">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-10">
        SRUJANA 2026 – Problem Statements
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {problems.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-orange-500 mb-3">
              {item.title}
            </h2>

            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Problem:</span> {item.problem}
            </p>

            <div className="mb-4">
              <p className="font-semibold text-gray-800">What to Build:</p>
              <ul className="list-disc ml-5 text-gray-600">
                {item.solution.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Impact:</p>
              <ul className="list-disc ml-5 text-gray-600">
                {item.impact.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemStatements;
