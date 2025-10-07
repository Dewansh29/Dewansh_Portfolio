import React from 'react';
import { twMerge } from "tailwind-merge";
import { Marquee } from "../components/Marquee";
import { achievements } from "../constants";

const certsToDisplay = achievements.filter(cert => !cert.name.includes("Coursera"));
const courseraLink = achievements.find(cert => cert.name.includes("Coursera"));

const AchievementCard = ({ href, name, issuer, date }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative block h-full p-px mr-4 overflow-hidden rounded-xl group"
    >
      <figure
        className={twMerge(
          "relative flex flex-col justify-between h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          "border-purple-400/20 bg-purple-950/20 transition-colors duration-300 group-hover:bg-purple-900/30 group-hover:border-purple-400"
        )}
      >
        <div className="relative z-10">
          <div className="flex flex-col">
            <figcaption className="text-base font-medium text-white">
              {name}
            </figcaption>
            <p className="text-sm font-medium text-white/40">{issuer}</p>
          </div>
        </div>
        <p className="relative z-10 mt-2 text-sm text-cyan-400">{date}</p>
      </figure>
    </a>
  );
};

const Achievements = () => {
  const firstRow = certsToDisplay.slice(0, certsToDisplay.length / 2);
  const secondRow = certsToDisplay.slice(certsToDisplay.length / 2);

  return (
    <section className="c-space section-spacing" id="achievements">
      <h2 className="text-heading">Certifications & Achievements</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden group">
        <Marquee pauseOnHover className="[--duration:35s] [--gap:1rem]">
          {firstRow.map((cert) => (
            <AchievementCard key={cert.name} {...cert} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:35s] [--gap:1rem]">
          {secondRow.map((cert) => (
            <AchievementCard key={cert.name} {...cert} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-midnight to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-midnight to-transparent"></div>
      </div>

      {/* --- This is the new "Magic" Glow Button --- */}
      {courseraLink && (
        <div className="flex justify-center mt-12">
          <a
            href={courseraLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center p-px overflow-hidden font-bold text-white rounded-full group"
          >
            {/* Spinning gradient for the border */}
            <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#58E6D9_0%,#333582_50%,#58E6D9_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Inner content part */}
            <span className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 transition-colors duration-300 rounded-full bg-purple-900/30 group-hover:bg-navy">
              {courseraLink.name}
            </span>
          </a>
        </div>
      )}
      {/* --- End of new button code --- */}
      
    </section>
  );
};

export default Achievements;