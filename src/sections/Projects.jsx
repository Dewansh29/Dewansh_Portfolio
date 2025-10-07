import React, { useState } from 'react'; // FIX: useState was missing
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from 'framer-motion'; // FIX: Corrected 'useSpring' typo

const Projects = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 100, damping: 20 });
    const springY = useSpring(y, { stiffness: 100, damping: 20 });

    const handleMouseMove = (e) => {
        // Offset the image position so it doesn't flicker under the cursor
        x.set(e.clientX + 25);
        y.set(e.clientY - 60); // Nudge it up slightly
    };

    const [preview, setPreview] = useState(null);

    return (
        <section id="projects"
            onMouseMove={handleMouseMove}
            className="relative c-space section-spacing"
        >
            <h2 className="text-heading">My Selected Projects</h2>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
            
            {myProjects.map((project) => (
                <Project key={project.id} {...project} setPreview={setPreview} />
            ))}

            {/* FIX: Conditionally render the image and connect its 'src' to the 'preview' state */}
            {preview && (
                <motion.img
                    src={preview}
                    alt="Project preview"
                    className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-96"
                    style={{ x: springX, y: springY }}
                />
            )}
        </section>
    );
};

export default Projects;