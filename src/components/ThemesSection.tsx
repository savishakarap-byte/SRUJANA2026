import { Leaf, Cpu, Shield, Zap, HeartPulse, Factory, Car, HardHat, Recycle, Lightbulb } from "lucide-react";

interface ThemeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ThemeCard = ({ icon, title, description, delay = 0 }: ThemeCardProps) => (
  <div
    className="glass-card-hover p-6 md:p-8 group"
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
  </div>
);

const themes = [
  {
    icon: <Leaf size={24} />,
    title: "Agricultural Technology",
    description:
      "Smart farming, irrigation systems, greenhouse automation, aquaculture, and rainwater harvesting innovations.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Computational Intelligence",
    description:
      "Artificial Intelligence, Machine Learning, Computer Vision, Blockchain, and Data Science applications.",
  },
  {
    icon: <Shield size={24} />,
    title: "Defence & Cyber Security",
    description:
      "Cyber security systems, secure communication networks, defence surveillance, and data privacy technologies.",
  },
  {
    icon: <Zap size={24} />,
    title: "Energy",
    description:
      "Renewable energy technologies, energy storage systems, smart grids, and energy efficient devices.",
  },
  {
    icon: <HeartPulse size={24} />,
    title: "Healthcare & Medical Technology",
    description:
      "Medical devices, biomedical electronics, telemedicine technologies, and health monitoring systems.",
  },
  {
    icon: <Factory size={24} />,
    title: "Industrial Automation",
    description:
      "Robotics, Industry 4.0 systems, instrumentation, automated material handling, and IoT applications.",
  },
  {
    icon: <Car size={24} />,
    title: "Smart Mobility",
    description:
      "Electric vehicles, battery management systems, charging technologies, drones, and autonomous mobility.",
  },
  {
    icon: <HardHat size={24} />,
    title: "Safety Technologies",
    description:
      "Industrial safety systems, disaster prevention technologies, and worker safety innovations.",
  },
  {
    icon: <HardHat size={24} />,
    title: "Sustainable Infrastructure",
    description:
      "Smart cities, disaster-resistant structures, transportation infrastructure, and sustainable civil engineering.",
  },
  {
    icon: <Recycle size={24} />,
    title: "Waste Management",
    description:
      "Waste-to-energy systems, recycling technologies, pollution control systems, and biodegradable materials.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Open Innovation",
    description:
      "Innovative ideas that may not fall under other themes but demonstrate strong technical creativity.",
  },
];

const ThemesSection = () => {
  return (
    <section className="section-fade-in">

      <div className="text-center mb-12">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
          Innovation Domains
        </p>

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Themes
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {themes.map((theme, i) => (
          <ThemeCard
            key={theme.title}
            {...theme}
            delay={i * 0.08}
          />
        ))}
      </div>

    </section>
  );
};

export default ThemesSection;
