import { Cog, FileText, Image, Code2, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EventCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  onClick?: () => void;
}

const EventCard = ({
  icon,
  title,
  description,
  delay = 0,
  onClick,
}: EventCardProps) => (
  <div
    onClick={onClick}
    className="glass-card-hover p-6 md:p-8 group cursor-pointer"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
      <div className="text-primary">{icon}</div>
    </div>

    <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
      {title}
    </h3>

    <p className="text-sm text-muted-foreground leading-relaxed">
      {description}
    </p>

    <p className="text-xs mt-3 opacity-60">Click to view rules →</p>
  </div>
);

const events = [
  {
    slug: "working-model",
    icon: <Cog size={24} />,
    title: "Working Model Exhibition",
    description:
      "Showcase your innovative working prototypes and engineering marvels to a panel of industry experts.",
  },
  {
    slug: "paper-presentation",
    icon: <FileText size={24} />,
    title: "Paper Presentation",
    description:
      "Present your groundbreaking research papers across diverse engineering and technology domains.",
  },
  {
    slug: "poster-presentation",
    icon: <Image size={24} />,
    title: "Poster Presentation",
    description:
      "Visually communicate your ideas through compelling research posters and infographics.",
  },
  {
    slug: "hackathon",
    icon: <Code2 size={24} />,
    title: "Hackathon",
    description:
      "Build, break, and innovate in a high-energy 24-hour coding marathon with real-world challenges.",
  },
  {
    slug: "industry-interaction",
    icon: <Handshake size={24} />,
    title: "Industry–Institute Interaction",
    description:
      "Connect directly with industry experts to explore careers, technologies, and real-world applications.",
  },
];

const EventsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-fade-in">

      <div className="text-center mb-12">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
          Compete & Innovate
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Events
        </h2>
      </div>

      {/* 5 events → 5 columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {events.map((event, i) => (
          <EventCard
            key={event.slug}
            {...event}
            delay={i * 0.1}
            onClick={() => navigate(`/event/${event.slug}`)}
          />
        ))}
      </div>

    </section>
  );
};

export default EventsSection;
