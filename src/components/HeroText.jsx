import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  // CONTENT CHANGE: Updated FlipWords to reflect AI/ML and Web Dev skills
  const words = ["Intelligent", "Responsive", "Data-Driven"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    // POSITION CHANGE: Moved further right with md:ml-20
    <div className="z-10 mt-16 text-center md:mt-32 md:ml-20 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        {/* NAME CHANGE: Updated name to Dewansh */}
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Dewansh
        </motion.h1>
        <div className="flex flex-col items-start">
          {/* CONTENT CHANGE: Updated text to be more specific */}
          <motion.p
            className="text-5xl font-medium text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            I Build & Engineer
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web & AI Solutions
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        {/* NAME CHANGE: Updated name to Dewansh */}
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Dewansh
        </motion.p>
        <div>
          {/* CONTENT CHANGE: Updated text for mobile */}
          <motion.p
            className="text-5xl font-black text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            AI & Web Apps
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;