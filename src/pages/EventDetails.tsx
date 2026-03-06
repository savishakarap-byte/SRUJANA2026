import { useParams, useNavigate } from "react-router-dom";

const EVENTS: any = {
  "working-model": {
    title: "Working Model Exhibition",
    subtitle: "Showcase innovation through real-world prototypes",

    highlights: [
      "Team Size: Max 4",
      "Hardware Based",
      "Individual or Team",
    ],

    registration: {
      eligibility: [
        "Open to Diploma,Undergraduate (B.Tech), and Postgraduate (M.Tech) students.",
        "Individual and team participation allowed.",
        "Interdisciplinary teams are encouraged."
      ],
      process: [
        "Complete the online registration form.",
        "Pay the registration fee (non-refundable).",
        "Receive confirmation email with Participant ID."
      ],
      important: [
        "Only registered teams will be allowed to exhibit.",
        "Spot registrations are not guaranteed.",
        "One team can present only one model."
      ]
    },

    requirements: {
      description:
        "This is a Working Model Exhibition, not a chart display competition.",
      must: [
        "Model must be fully functional (live demonstration required).",
        "Must solve a real-world problem in the given domains.",
        "Clear technical explanation required.",
        "Should show innovation or improvement."
      ],
      include: [
        "Project Title Display",
        "Working Demonstration",
        "Technical Explanation",
        "Components List",
        "Cost Estimation",
        "Future Scope"
      ],
      recommended: [
        "Block Diagram",
        "Circuit Diagram / Architecture",
        "Flowchart",
        "Live data or real-time results"
      ],
      note: "Pure theoretical projects will not be evaluated."
    },

    rules: [
      "Model must be original.",
      "Maximum 4 members per team.",
      "Power supply will be provided if required.",
      "Judges decision will be final."
    ],
  },

  "paper-presentation": {
    title: "Paper Presentation",
    subtitle: "Present your research to experts",

    highlights: [
      "Team Size: 3",
      "8 Minutes + 2 Q&A",
      "IEEE Format Required",
    ],

    registration: {
      eligibility: [
        "Open to Diploma, B-Tech, and M-Tech students.",
        "Maximum 4 members per team."
      ],
      process: [
        "Fill details of Students",
        "Provide Title",
        "Pay registration fee.",
        "confirmation email."
      ],
      important: [
        "Plagiarism leads to immediate rejection.",
        "Time limit strictly enforced."
      ]
    },

    requirements: {
      description: "Research-based technical presentation evaluated by experts.",
      must: [
        "Paper must follow IEEE format.",
        "Original research only.",
        "Clear methodology and results."
      ],
      include: [
        "Abstract",
        "Introduction",
        "Methodology",
        "Results",
        "Conclusion"
      ],
      recommended: [
        "Graphs and charts",
        "Proper references and citations"
      ],
      note: ""
    },

    rules: [
      "Maximum 4 members per team.",
      "Presentation time strictly limited.",
      "Judges decision will be final."
    ],
  },

  "poster-presentation": {
    title: "Poster Presentation",
    subtitle: "Communicate ideas visually and effectively",

    highlights: [
      "Team Size: 3",
      "Research Based",
      "Visual Communication",
    ],

    registration: {
      eligibility: [
        "Open to Diploma, B-Tech, and M-Tech students.",
        "Maximum 4 members per team."
      ],
      process: [
        "Submit poster Title.",
        "Pay registration fee."
      ],
      important: [
        "Original work only.",
        "Plagiarism not allowed."
      ]
    },

    requirements: {
      description: "Visual representation of research or innovative ideas.",
      must: [
        "Poster must be original.",
        "Clear explanation during evaluation."
      ],
      include: [
        "Title",
        "Problem Statement",
        "Methodology",
        "Results",
        "Conclusion"
      ],
      recommended: [
        "Neat layout",
        "Readable fonts",
        "Proper diagrams"
      ],
      note: ""
    },

    rules: [
      "Maximum 3 members per team.",
      "Poster size as per guidelines.",
      "Judges decision will be final."
    ],
  },

  hackathon: {
    title: "Hackathon",
    subtitle: "Code. Build. Compete.",

    highlights: [
      "24 Hours",
      "Team Size: Max 4",
      "Real-world Problems",
    ],

    registration: {
      eligibility: [
        "Open to Diploma ,B-Tech and M-Tech students.",
        "Maximum 4 members per team."
      ],
      process: [
        "Register team online.",
        "Submit team details.",
        "Pay registration fee."
      ],
      important: [
        "Teams must report on time.",
        "Late entries will not be allowed."
      ]
    },

    requirements: {
      description: "Participants must develop solutions during the event duration.",
      must: [
        "Bring your own laptops.",
        "Develop solution during hackathon only.",
        "No pre-built projects allowed."
      ],
      include: [
        "Working Solution",
        "Problem explanation",
        "Demo presentation"
      ],
      recommended: [
        "Clean UI/UX",
        "Scalable solution",
        "Practical feasibility"
      ],
      note: ""
    },

    rules: [
      "Internet will be provided.",
      "Fair play must be maintained.",
      "Judges decision will be final."
    ],
  },

  "industry-interaction": {
    title: "Industry–Institute Interaction",
    subtitle: "Connect with industry leaders and experts",

    highlights: [
      "Interactive Sessions",
      "Career Guidance",
      "Live Discussions",
    ],

    registration: {
      eligibility: [
        "Open to Diploma, B-Tech and M-Tech students and Startups.",
      ],
      process: [
        "Register online.",
        "Pay registration fee.",
        "Receive session confirmation."
      ],
      important: [
        "Professional conduct mandatory.",
        "Follow session timings strictly."
      ]
    },

    requirements: {
      description: "Interactive knowledge-sharing session with industry experts.",
      must: [
        "Attend full session.",
        "Participate actively."
      ],
      include: [
        "Relevant questions",
        "Professional interaction"
      ],
      recommended: [
        "Bring notepad for notes",
        "Prepare career-related questions"
      ],
      note: ""
    },

    rules: [
      "Maintain discipline.",
      "Organizing committee decisions are final."
    ],
  },
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
          </div>

          <div className="flex flex-wrap gap-3">
            {event.highlights.map((h: string, i: number) => (
              <span key={i} className="bg-white/20 px-4 py-1 rounded-full text-sm">
                {h}
              </span>
            ))}
          </div>

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
