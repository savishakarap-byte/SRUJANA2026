import { useParams, useNavigate } from "react-router-dom";
//import HeroSlider from "@/components/HeroSlider";/

const EVENTS: any = {
  "working-model": {
    title: "Working Model Exhibition",
    subtitle: "Showcase innovation through real-world prototypes",
    highlights: [
      "Team Size: Max 4",
      "Hardware Based",
      "Judged on Innovation",
    ],
    rules: [
      "Model must be original and fully functional.",
      "Maximum 4 members per team.",
      "Participants must explain working clearly to judges.",
      "Power supply will be provided if required.",
      "Judges decision will be final.",
    ],
  },

  "paper-presentation": {
    title: "Paper Presentation",
    subtitle: "Present your research to experts",
    highlights: [
      "Team Size: 2",
      "8 Minutes + 2 Q&A",
      "IEEE Format",
    ],
    rules: [
      "Abstract submission is mandatory.",
      "Paper must follow IEEE format.",
      "Plagiarism will lead to rejection.",
      "Presentation time strictly limited.",
      "Judges decision will be final.",
    ],
  },

  "poster-presentation": {
    title: "Poster Presentation",
    subtitle: "Communicate ideas visually and effectively",
    highlights: [
      "Team Size: 2",
      "Visual Communication",
      "Research Based",
    ],
    rules: [
      "Poster must be original work.",
      "Maximum size as per event guidelines.",
      "Clear explanation required during evaluation.",
      "Plagiarism not allowed.",
      "Judges decision will be final.",
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
    rules: [
      "Participants must bring their own laptops.",
      "Internet will be provided.",
      "Solutions must be developed during the event.",
      "Pre-built projects are not allowed.",
      "Judges decision will be final.",
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
    rules: [
      "Participants must register in advance.",
      "Professional conduct is mandatory.",
      "Questions must be relevant to session topics.",
      "Session timings must be followed strictly.",
      "Organizing committee decisions are final.",
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
    <div className="relative min-h-screen text-white">

      {/* Background Slider */}
{/* <HeroSlider /> */}
<div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto pt-32 px-6">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm opacity-70 hover:opacity-100"
        >
          ← Back to Events
        </button>

        {/* Glass Container */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8">

          <h1 className="text-4xl font-bold">{event.title}</h1>
          <p className="opacity-80 mt-2">{event.subtitle}</p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3 mt-6">
            {event.highlights.map((h: string, i: number) => (
              <span
                key={i}
                className="bg-white/20 px-4 py-1 rounded-full text-sm"
              >
                {h}
              </span>
            ))}
          </div>

          {/* Rules Section */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Rules & Regulations
          </h2>

          <div className="grid gap-3">
            {event.rules.map((rule: string, i: number) => (
              <div
                key={i}
                className="bg-black/30 rounded-lg p-3"
              >
                {rule}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex gap-4 flex-wrap">
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
