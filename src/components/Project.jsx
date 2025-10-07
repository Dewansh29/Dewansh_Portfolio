import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';

const Project = ({ 
  title, 
  description, 
  subDescription, 
  href, 
  image, 
  tags,
  setPreview // This prop is for the hover preview effect
}) => {
  // This state controls the pop-up modal for project details
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        // These handlers control the floating image preview on hover
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        // This is the main container for each project in the list
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        
        {/* This button opens the detailed modal when clicked */}
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" alt="right arrow" className="w-5" />
        </button>
      </div> 
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      
      {/* This conditionally renders the modal when 'isModalOpen' is true */}
      {isModalOpen && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Project;