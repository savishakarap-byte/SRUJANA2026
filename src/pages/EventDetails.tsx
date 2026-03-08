import { useParams, useNavigate } from "react-router-dom";

const EVENTS: Record<string, any> = {
  "working-model": {
    title: "Working Model Exhibition",
    subtitle: "Showcase innovation through real-world prototypes",
    description:
      "Participants are invited to demonstrate functional engineering models that address real-world challenges through innovation, creativity, and practical implementation.",

    highlights: ["Team Size: Max 4", "Hardware Based", "Individual or Team"],

    registration: {
      eligibility: [
        "Open to Diploma, Undergraduate (B.Tech), and Postgraduate (M.Tech) students.",
        "Individual and team participation allowed.",
        "Interdisciplinary teams are encouraged.",
      ],
      process: [
        "Complete the online registration form.",
        "Provide Working Model title and team member details.",
        "Pay the registration fee (non-refundable).",
        "Receive confirmation email with Participant ID.",
      ],
      important: [
        "Only registered teams will be allowed to exhibit.",
        "Spot registrations are not guaranteed.",
        "One team can present only one model.",
      ],
    },

    requirements: {
      description:
        "This is a Working Model Exhibition, not a chart display competition.",
      must: [
        "Model must be fully functional (live demonstration required).",
        "Must solve a real-world problem in the given domains.",
        "Clear technical explanation required.",
        "The project should demonstrate innovation or improvement.",
      ],
      include: [
        "Project Title Display",
        "Working Demonstration",
        "Technical Explanation",
        "Components List",
        "Cost Estimation",
        "Future Scope",
      ],
      recommended: [
        "Block Diagram",
        "Circuit Diagram / Architecture",
        "Flowchart",
        "Live data or real-time results",
      ],
      note: "Pure theoretical projects will not be evaluated.",
      evaluation: [
        "Innovation & Creativity",
        "Technical Implementation",
        "Practical Application",
        "Demonstration Quality",
        "Clarity of Explanation",
      ],
    },

    rules: [
      "Model must be original.",
      "Maximum 4 members per team.",
      "Power supply will be provided if required.",
      "Judges decision will be final.",
    ],
  },

  "paper-presentation": {
    title: "Paper Presentation",
    subtitle: "Present your research to experts",
    description:
      "Participants are invited to present innovative research ideas and technical studies in various engineering and technology domains.",

    highlights: ["Team Size: 4", "8 Minutes + 2 Q&A", "IEEE Format Required"],

    registration: {
      eligibility: [
        "Open to Diploma, Undergraduate (B.Tech), and Postgraduate (M.Tech) students.",
        "Individual and team participation allowed.",
        "Maximum 4 members per team.",
      ],
      process: [
        "Complete the online registration form.",
        "Provide paper title and team member details.",
        "Pay the registration fee (non-refundable).",
        "Receive a confirmation email with Participant ID.",
      ],
      important: [
        "Plagiarism will lead to immediate rejection.",
        "Presentation time will be strictly enforced.",
        "Participants must submit their paper in IEEE format before the presentation.",
      ],
    },

    requirements: {
      description:
        "This event focuses on research-based technical presentations evaluated by experts.",
      must: [
        "Paper must follow IEEE format.",
        "The research must be original.",
        "The presentation must clearly explain the problem, methodology, and results.",
      ],
      include: [
        "Abstract",
        "Introduction",
        "Methodology",
        "Results / Analysis",
        "Conclusion",
      ],
      recommended: [
        "Graphs and charts for data representation",
        "Proper references and citations",
      ],
      note: "",
      evaluation: [
        "Research originality",
        "Technical depth",
        "Presentation clarity",
        "Quality of analysis",
        "Response to questions",
      ],
    },

    rules: [
      "Maximum 4 members per team.",
      "Presentation time limit must be followed strictly.",
      "Participants must bring their presentation (PPT/PDF) on the day of the event.",
      "Judges’ decision will be final and binding.",
    ],
  },

  "poster-presentation": {
    title: "Poster Presentation",
    subtitle: "Communicate ideas visually and effectively",
    description:
      "Participants are invited to present research concepts, innovative ideas, and technical solutions through visually engaging posters.",

    highlights: [
      "Team Size: 3",
      "Research / Concept-based Poster",
      "Visual communication of technical ideas",
    ],

    registration: {
      eligibility: [
        "Open to Diploma, Undergraduate (B.Tech), and Postgraduate (M.Tech) students.",
        "Individual and team participation allowed.",
        "Maximum 3 members per team.",
      ],
      process: [
        "Complete the online registration form.",
        "Submit the poster title and team member details.",
        "Pay the registration fee (non-refundable).",
        "Receive a confirmation email with Participant ID.",
      ],
      important: [
        "Only original work is allowed.",
        "Plagiarism is strictly prohibited and will lead to disqualification.",
        "Participants must present and explain their poster during evaluation.",
      ],
    },

    requirements: {
      description:
        "The poster must visually represent research work or innovative technical ideas in a clear and structured format.",
      must: [
        "Poster must be original and created by the participants.",
        "Participants must provide a clear explanation during evaluation.",
      ],
      include: [
        "Title",
        "Problem Statement",
        "Methodology",
        "Results",
        "Conclusion",
      ],
      recommended: [
        "Neat and organized layout",
        "Readable fonts and proper spacing",
        "Diagrams, charts, and illustrations",
      ],
      note: "",
      evaluation: [
        "Clarity of Visual Presentation",
        "Technical Understanding",
        "Innovation / Idea Quality",
        "Poster Design & Structure",
        "Explanation during Evaluation",
      ],
    },

    rules: [
      "Maximum 3 members per team.",
      "Poster size must follow event guidelines (A1/A0) or PDF/PPT.",
      "Participants must bring their printed poster or soft copy on the event day.",
      "Judges’ decision will be final and binding.",
    ],
  },

  hackathon: {
    title: "Hackathon",
    subtitle: "Code. Build. Compete.",
    description:
      "A high-energy innovation challenge where participants develop technological solutions for real-world problems within 24 hours.",

    highlights: [
      "24 Hours",
      "Team Size: Max 4",
      "Real-world Problem Solving",
    ],

    focusthemes: {
      description:
        "The hackathon focuses on selected Sustainable Development Goals (SDGs):",
      themes: [
        "Good Health and Well-Being",
        "Sustainable Cities and Communities",
        "Affordable and Clean Energy",
        "Industry, Innovation and Infrastructure",
      ],
    },

    registration: {
      eligibility: [
        "Open to Diploma, Undergraduate (B.Tech), and Postgraduate (M.Tech) students.",
        "Individual and team participation allowed.",
        "Maximum 4 members per team.",
      ],
      process: [
        "Register your team through the online registration form.",
        "Submit team member details.",
        "Pay the registration fee (non-refundable).",
        "Receive a confirmation email with Participant ID.",
      ],
      important: [
        "Teams must report on time for the hackathon kickoff.",
        "Late entries will not be allowed.",
        "Participants must develop their solutions during the hackathon duration only.",
      ],
    },

    requirements: {
      description:
        "Participants must design and develop a functional solution addressing a real-world problem.",
      must: [
        "Participants must bring their own laptops.",
        "Solutions must be developed during the hackathon.",
        "Pre-built projects are not allowed.",
      ],
      include: [
        "Working Solution",
        "Problem Statement Explanation",
        "Demo Presentation",
      ],
      recommended: [
        "Clean UI/UX design",
        "Scalable solution",
        "Practical feasibility",
      ],
      note: "",
      evaluation: [
        "Innovation and Creativity",
        "Technical Implementation",
        "Relevance to Hackathon Theme",
        "Practical Impact",
        "Quality of Presentation and Demo",
      ],
    },

    rules: [
      "Internet connectivity will be provided.",
      "Participants must maintain fair play and ethical conduct.",
      "Any form of plagiarism or unfair practices will lead to disqualification.",
      "Judges’ decision will be final and binding.",
    ],
  },
   hackathon: {
    title: "Hackathon",
    subtitle: "Code. Build. Compete.",
    description:
      "A high-energy innovation challenge where participants develop technological solutions for real-world problems within 24 hours.",

    highlights: [
      "24 Hours",
      "Team Size: Max 4",
      "Real-world Problem Solving",
    ],},
};

export default function EventDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const event = EVENTS[slug || ""];

  if (!event)
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        Event not found
      </div>
    );

  return (
    <div className="relative min-h-screen text-white bg-black">
      <div className="max-w-4xl mx-auto pt-32 px-6 pb-20">

        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm opacity-70 hover:opacity-100"
        >
          ← Back to Events
        </button>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-10">

          <div>
            <h1 className="text-4xl font-bold">{event.title}</h1>
            <p className="opacity-80 mt-2">{event.subtitle}</p>
            {event.description && (
              <p className="opacity-70 mt-2">{event.description}</p>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {event.highlights.map((h: string, i: number) => (
              <span key={i} className="bg-white/20 px-4 py-1 rounded-full text-sm">
                {h}
              </span>
            ))}
          </div>

          {event.focusthemes && (
            <div className="bg-black/30 p-6 rounded-lg space-y-3">
              <h2 className="text-2xl font-semibold">Focus Themes</h2>
              <p>{event.focusthemes.description}</p>
              <ul className="list-disc pl-6 space-y-1">
                {event.focusthemes.themes.map((t: string, i: number) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Registration */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Registration Instructions</h2>

            <div className="space-y-6 bg-black/30 p-6 rounded-lg">
              <div>
                <h3 className="font-semibold mb-2">Eligibility</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {event.registration.eligibility.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Registration Process</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {event.registration.process.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Important</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {event.registration.important.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Requirements</h2>

            <div className="space-y-6 bg-black/30 p-6 rounded-lg">

              {event.requirements.description && (
                <p className="font-medium">{event.requirements.description}</p>
              )}

              <div>
                <h3 className="font-semibold mb-2">Must</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {event.requirements.must.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Must Include</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {event.requirements.include.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Strongly Recommended</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {event.requirements.recommended.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {event.requirements.evaluation && (
                <div>
                  <h3 className="font-semibold mb-2">Evaluation Criteria</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {event.requirements.evaluation.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {event.requirements.note && (
                <p className="text-red-400 font-semibold">
                  ⚠ {event.requirements.note}
                </p>
              )}
            </div>
          </div>

          {/* Rules */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Rules & Regulations</h2>
            <div className="grid gap-3">
              {event.rules.map((rule: string, i: number) => (
                <div key={i} className="bg-black/30 rounded-lg p-3">
                  {rule}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => navigate("/register")}
              className="bg-primary px-6 py-2 rounded-lg font-medium"
            >
              Register Now
            </button>

            <button
              onClick={() => navigate(-1)}
              className="border border-white/40 px-6 py-2 rounded-lg"
            >
              Back
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
