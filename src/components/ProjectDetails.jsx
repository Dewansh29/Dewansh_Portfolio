import {motion} from 'framer-motion';

import React, { useEffect } from 'react';

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    // The main overlay
    <div className="fixed inset-0 z-50 w-full h-full p-4 overflow-y-auto backdrop-blur-sm">
      
      {/* Close button is now a sibling to the content box, positioned relative to the screen */}
      <button onClick={closeModal} className="absolute z-20 p-2 rounded-full top-8 right-8 bg-black/40 backdrop-blur-sm hover:bg-white/20">
        <img src="assets/close.svg" className="w-6 h-6" alt="Close button" />
      </button>

      {/* 'items-center' was removed and 'my-8' ensures a consistent margin from the top */}
      <div className="flex justify-center w-full">
        <motion.div className="relative z-10 max-w-2xl my-8 border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}>
          
          <img src={image} alt={title} className="w-full h-auto rounded-t-2xl" />
          
          <div className="p-6">
            <h5 className="mb-2 text-3xl font-bold text-white">{title}</h5>
            <p className="mb-4 font-normal text-gray-300">{description}</p>
            
            <ul className="pl-5 mb-6 space-y-2 list-disc text-gray-400">
              {subDescription.map((subDesc, index) => (
                <li key={index}>{subDesc}</li>
              ))}
            </ul>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <img 
                    key={tag.id} 
                    src={tag.path} 
                    alt={tag.name} 
                    title={tag.name} 
                    // FIX: This className now dynamically includes any custom class from your data
                    className={`rounded-lg size-10 hover-animation ${tag.className || ''}`}
                  />
                ))}
              </div>
              
              <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-cyan-400 cursor-pointer hover-animation">
                View Project <img src="assets/arrow-up.svg" className="size-4" alt="External link arrow"/>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;