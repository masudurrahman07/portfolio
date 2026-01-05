import React from 'react';

const ProjectDetail = ({ project, onBack }) => {
  if (!project) return null;

  return (
    <div className="min-h-screen py-20 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center text-primary hover:text-primary-hover transition-colors mb-8 group"
        >
          <span className="material-symbols-outlined mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Projects
        </button>

        {/* Project Header */}
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden mb-8">
          {/* Project Image */}
          <div className="relative h-64 md:h-80 bg-gray-800 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.name}</h1>
              <p className="text-lg opacity-90">{project.mainTech}</p>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Technologies */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">Project Links</h3>
                <div className="space-y-3">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined mr-2">launch</span>
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined mr-2">code</span>
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Project Description</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {project.detailedDescription}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Challenges and Improvements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenges */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 p-8">
            <h3 className="text-xl font-bold mb-6 text-primary flex items-center">
              <span className="material-symbols-outlined mr-2">psychology</span>
              Challenges Faced
            </h3>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-3 mt-1 text-sm">check_circle</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Improvements */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 p-8">
            <h3 className="text-xl font-bold mb-6 text-primary flex items-center">
              <span className="material-symbols-outlined mr-2">trending_up</span>
              Future Improvements
            </h3>
            <ul className="space-y-4">
              {project.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-3 mt-1 text-sm">lightbulb</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {improvement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:-translate-y-1 flex items-center justify-center shadow-lg shadow-primary/25"
          >
            <span className="material-symbols-outlined mr-2">launch</span>
            View Live Project
          </a>
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
          >
            <span className="material-symbols-outlined mr-2">code</span>
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;