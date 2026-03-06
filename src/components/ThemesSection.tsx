import { Cpu, Leaf, Shield, Zap, HeartPulse, Factory, Car, HardHat, Recycle, Lightbulb } from "lucide-react";

export default function ThemesSection() {

const themes = [
{
title: "Agricultural Technology",
icon: Leaf,
desc: "Smart farming, irrigation systems, greenhouse automation, aquaculture, food technology and rainwater harvesting innovations."
},

{
title: "Computational Intelligence",
icon: Cpu,
desc: "Artificial Intelligence, Machine Learning, Computer Vision, Blockchain, and Data Science based innovations."
},

{
title: "Defence & Cyber Security",
icon: Shield,
desc: "Cyber security systems, defence surveillance technologies, secure communication and data privacy solutions."
},

{
title: "Energy",
icon: Zap,
desc: "Renewable energy technologies, smart grids, energy storage systems and energy efficient devices."
},

{
title: "Healthcare & Medical Technology",
icon: HeartPulse,
desc: "Medical devices, biomedical electronics, telemedicine systems and healthcare monitoring technologies."
},

{
title: "Industrial Automation",
icon: Factory,
desc: "Robotics, Industry 4.0 systems, IoT automation, instrumentation and automated material handling."
},

{
title: "Smart Mobility",
icon: Car,
desc: "Electric vehicles, battery management systems, charging infrastructure, drones and autonomous mobility."
},

{
title: "Safety Technologies",
icon: HardHat,
desc: "Industrial safety, disaster prevention systems, worker safety equipment and monitoring technologies."
},

{
title: "Sustainable Infrastructure",
icon: HardHat,
desc: "Smart cities, disaster resistant structures, civil engineering innovations and sustainable infrastructure systems."
},

{
title: "Waste Management",
icon: Recycle,
desc: "Waste-to-energy systems, recycling technologies, pollution control devices and biodegradable materials."
},

{
title: "Open Innovation",
icon: Lightbulb,
desc: "Innovative ideas that may not fall under the above themes but demonstrate strong technical creativity."
}

]

return (

<section className="bg-slate-50 py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center text-gray-900">
SRUJANA 2026 Themes
</h2>

<p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
Participants can present their projects under the following themes for
Working Model Exhibition, Poster Presentation and Paper Presentation.
</p>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

{themes.map((theme,index)=>{

const Icon = theme.icon

return(

<div
key={index}
className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
>

<Icon size={36} className="text-orange-500"/>

<h3 className="text-xl font-semibold mt-4">
{theme.title}
</h3>

<p className="text-gray-600 mt-3 text-sm">
{theme.desc}
</p>

</div>

)

})}

</div>

</div>

</section>

)

}
