import { Trophy, Users, Lightbulb } from "lucide-react";

const highlights = [
  { icon: <Lightbulb size={28} />, value: "10+", label: "Themes" },
  { icon: <Trophy size={28} />, value: "₹1 Lakh+", label: "Prizes" },
  { icon: <Users size={28} />, value: "500+", label: "Participants" },
];

const HighlightsSection = () => (
  <section className="section-fade-in">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {highlights.map((h) => (
        <div
          key={h.label}
          className="glass-card p-8 text-center group hover:border-accent/30 transition-all duration-300"
        >
          <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
            {h.icon}
          </div>
          <div className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">{h.value}</div>
          <div className="text-muted-foreground text-sm uppercase tracking-wider">{h.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default HighlightsSection;
