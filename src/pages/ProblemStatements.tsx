import React, { useState } from "react";

const data = [
{
title: "Problem 1: MRI-Based Cancer Detection System",
content: `What’s the Problem?
Early detection of cancer using MRI scans is critical for improving survival rates, but manual analysis by radiologists is time-consuming, prone to variability, and requires high expertise.

What You Need to Design:
Build a system that:
• Processes MRI scan images to detect potential cancerous regions
• Uses advanced image analysis or AI/ML techniques for classification and segmentation
• Identifies patterns, anomalies, or tumor boundaries accurately
• Provides explainable outputs (highlighted regions, confidence levels)
• Assists medical professionals with decision support (not replacement)

Real-World Impact:
• Early and accurate cancer detection
• Reduced workload for radiologists
• Improved diagnostic consistency
• Better patient outcomes through timely intervention`
},

{
title: "Problem 2: Rule-Based Fault Detection Engine Using Multi-Domain Accelerometer Analysis",
content: `What’s the Problem?
Industrial machinery failures often go undetected until significant damage occurs, leading to costly downtime and safety risks. While accelerometer sensors generate rich vibration data, interpreting this data across time-domain, frequency-domain, and spectrogram representations is complex and requires expertise. Existing systems lack transparent, explainable, and real-time fault detection mechanisms.

What You Need to Design:
Build a system that:
• Processes accelerometer sensor data in time-domain, frequency-domain (FFT), and spectrogram representations
• Extracts meaningful features such as peaks, harmonics, and energy distributions
• Implements a rule-based engine to classify different fault types (e.g., imbalance, misalignment, bearing faults)
• Detects early-stage anomalies and differentiates between fault categories
• Provides explainable outputs (why a fault was detected based on rules/features)
• Visualizes signals and analysis (waveforms, spectra, spectrograms) clearly
• Supports real-time or near real-time monitoring

Real-World Impact:
• Enables predictive maintenance in industrial systems
• Reduces downtime and maintenance costs
• Improves safety and operational reliability
• Provides interpretable and transparent fault diagnosis systems`
},

{
title: "Problem 3: Offline LLM with Customizable Avatar Interface",
content: `What’s the Problem?
Most AI systems rely heavily on cloud connectivity, making them inaccessible in low-connectivity environments and raising concerns around privacy, latency, and data security. Additionally, current AI interfaces lack personalization and human-like interaction.

What You Need to Design:
Build a system that:
• Runs a lightweight LLM fully offline on local devices
• Integrates a customizable avatar (visual + voice-based interaction)
• Supports multilingual interaction (including Indian languages)
• Enables users to personalize avatar appearance, tone, and behavior
• Maintains local memory/context while ensuring privacy
• Works efficiently on low-resource hardware

Real-World Impact:
• AI accessibility in rural and low-connectivity areas
• Privacy-first AI systems
• Personalized human-like digital assistants
• Applications in education, healthcare, and governance`
},

{
title: "Problem 4: AR/VR-Based 3D Modeling and Simulation of Indian Naval Ships",
content: `What’s the Problem?
Understanding, training, and maintaining complex naval ship systems is challenging due to lack of immersive visualization tools and real-time simulation environments.

What You Need to Design:
Build an AR/VR application that:
• Creates detailed 3D models of Indian naval ships
• Enables interactive exploration of ship components and systems
• Simulates real-world scenarios (navigation, maintenance, emergency handling)
• Supports training modules for users in immersive environments
• Allows real-time manipulation and visualization of ship structures
• Works across VR headsets or AR-enabled devices

Real-World Impact:
• Enhanced defense training and simulation
• Better understanding of complex naval systems
• Reduced training costs and risks
• Applications in education, defense, and engineering`
},

{
title: "Problem 5: Automated Compliance and Policy Interpreter",
content: `What’s the Problem?
Organizations struggle to interpret and implement complex, frequently changing regulations. Legal documents are often ambiguous, leading to compliance gaps, risks, and inefficiencies.

What You Need to Design:
Create an intelligent system that:
• Translates complex policies into clear, actionable steps
• Maps regulations to business workflows and processes
• Continuously monitors compliance status
• Detects potential violations and alerts stakeholders
• Provides explainable interpretations of rules and requirements

Real-World Impact:
• Reduced legal and compliance risks
• Improved organizational governance
• Significant time and cost savings`
},

{
title: "Problem 6: Context-Aware Notification Filter System",
content: `What’s the Problem?
Users are overwhelmed by excessive notifications across devices and platforms, leading to distraction, reduced productivity, and cognitive fatigue. Current systems lack contextual intelligence.

What You Need to Design:
Create a smart notification management system that:
• Understands user context (time, activity, location, priority)
• Filters, ranks, and schedules notifications dynamically
• Delivers only high-relevance alerts at the right time
• Learns user behavior and adapts continuously
• Provides user control and transparency

Real-World Impact:
• Increased focus and productivity
• Reduced digital overload
• Improved mental well-being`
},

{
title: "Problem 7: Personalized Financial Behavior Analyzer",
content: `What’s the Problem?
Individuals often lack visibility into their financial habits, leading to poor budgeting, overspending, and lack of long-term financial planning.

What You Need to Design:
Create a financial intelligence system that:
• Analyzes spending behavior across categories and time
• Identifies risky financial patterns and anomalies
• Generates personalized savings and investment suggestions
• Provides automated budgeting insights and forecasts
• Encourages better financial decision-making

Real-World Impact:
• Improved financial literacy and awareness
• Better savings and investment habits
• Reduced financial stress`
},

{
title: "Problem 8: Behavioral Habit Correction Engine",
content: `What’s the Problem?
People struggle to build and maintain positive habits due to lack of real-time feedback, accountability, and personalized interventions.

What You Need to Design:
Develop a system that:
• Tracks behavioral patterns through manual or passive inputs
• Detects negative trends or habit deviations
• Triggers context-aware nudges and interventions
• Adapts strategies based on user responses and outcomes
• Provides progress insights and motivation

Real-World Impact:
• Improved health, productivity, and lifestyle
• Sustainable habit formation
• Personalized self-improvement`
}
];

const formatContent = (text) => {
  const sections = text.split("\n\n");

  return sections.map((sec, i) => {
    if (sec.includes("What’s the Problem?")) {
      return (
        <div key={i} className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <p className="font-semibold text-red-600 mb-2">What’s the Problem?</p>
          <p className="text-gray-700">{sec.replace("What’s the Problem?\n", "")}</p>
        </div>
      );
    }

    if (sec.includes("What You Need to Design:")) {
      return (
        <div key={i} className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
          <p className="font-semibold text-blue-600 mb-2">What You Need to Design</p>
          <p className="text-gray-700 whitespace-pre-line">
            {sec.replace("What You Need to Design:\n", "")}
          </p>
        </div>
      );
    }

    if (sec.includes("Real-World Impact:")) {
      return (
        <div key={i} className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <p className="font-semibold text-green-600 mb-2">Real-World Impact</p>
          <p className="text-gray-700 whitespace-pre-line">
            {sec.replace("Real-World Impact:\n", "")}
          </p>
        </div>
      );
    }

    return null;
  });
};

const ProblemStatements = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white px-6 md:px-16 py-12">
      
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-600">
          SRUJANA 2026
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Problem Statements
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-orange-100 rounded-2xl shadow-md hover:shadow-2xl transition duration-300"
          >
            {/* CARD HEADER */}
            <div
              className="p-5 cursor-pointer flex justify-between items-center"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <h2 className="text-lg font-semibold text-orange-500">
                {item.title}
              </h2>

              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* CONTENT */}
            {openIndex === index && (
              <div className="px-5 pb-5 space-y-4 animate-fadeIn">
                {formatContent(item.content)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemStatements;
