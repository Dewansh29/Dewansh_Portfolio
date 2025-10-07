import React, { useState, useEffect } from "react";
import { OrbitingCircles } from "./OrbitalsCircles";

// --- SKILLS REBALANCED INTO TWO ORBITS ---
const outer_skills = [
  // Core Development & AI
  { name: "Python", src: "/assets/logos/Python-logo-notext.svg.png" },
  { name: "React", src: "/assets/logos/react.svg" },
  { name: "Node.js", src: "/assets/logos/icons8-nodejs-48.png" },
  { name: "TensorFlow", src: "/assets/logos/icons8-tensorflow-48.png" },
  { name: "PyTorch", src: "/assets/logos/icons8-pytorch-48.png" },
  { name: "Scikit-learn", src: "/assets/logos/images.png" },
  { name: "LangChain", src: "/assets/logos/Langchain--Streamline-Simple-Icons.svg", className: "scale-200" },
  { name: "OpenAI", src: "/assets/logos/icons8-chatgpt-50.png" },
  { name: "Gemini", src: "/assets/logos/gemini-color.svg", className: "scale-150" },
  { name: "Numpy", src: "/assets/logos/icons8-numpy-48.png" },
  { name: "Pandas", src: "/assets/logos/icons8-pandas-48.png" },
];

const inner_skills = [
  // Web, Tools & Databases
  { name: "JavaScript", src: "/assets/logos/javascript.svg" },
  { name: "Html", src: "/assets/logos/html5.svg" },
  { name: "CSS", src: "/assets/logos/css3.svg", className:"scale-80" },
  { name: "Tailwind CSS", src: "/assets/logos/tailwindcss.svg" },
  { name: "Three.js", src: "/assets/logos/threejs.svg" },
  { name: "MongoDB", src: "/assets/logos/icons8-mongodb-24.png", className:"scale-150"},
  { name: "SQLite", src: "/assets/logos/sqlite.svg" },
  { name: "Power BI", src: "/assets/logos/Microsoft-Power-BI-Symbol.png", className:"scale-150" },
  { name: "Microsoft", src: "/assets/logos/microsoft.svg" },
  { name: "Git", src: "/assets/logos/git.svg" },
  { name: "GitHub", src: "/assets/logos/github.svg" },
];

const Icon = ({ name, src, className = "" }) => (
  <img 
    src={src} 
    className={`duration-200 rounded-sm hover:scale-110 ${className}`} 
    alt={name} 
  />
);

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener("resize", listener);
      return () => window.removeEventListener("resize", listener);
    }
  }, [matches, query]);
  return matches;
}

export function Frameworks() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
      {/* FIX: Changed translate-x for desktop view */}
      <div className="absolute flex h-full w-full items-center justify-center translate-x-1/2 md:translate-x-1/3 -translate-y-28 md:-translate-y-20">
        
        {/* Outer Orbit */}
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={isDesktop ? 200 : 130}
          duration={isDesktop ? 25 : 30}
        >
          {outer_skills.map((skill) => (
            <Icon key={skill.name} name={skill.name} src={skill.src} className={skill.className} />
          ))}
        </OrbitingCircles>

        {/* Inner Orbit */}
        <OrbitingCircles
          className="size-[40px] border-none bg-transparent"
          radius={isDesktop ? 120 : 80}
          duration={isDesktop ? 20 : 25}
          reverse
        >
          {inner_skills.map((skill) => (
            <Icon key={skill.name} name={skill.name} src={skill.src} className={skill.className} />
          ))}
        </OrbitingCircles>
        
      </div>
    </div>
  );
}