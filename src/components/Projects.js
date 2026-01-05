import React from 'react';

const Projects = ({ onProjectSelect }) => {
  const projects = [
    {
      id: 1,
      name: 'HERO.IO – Productive Apps Platform',
      image: '/heroio.png',
      description: 'HERO.IO is a modern web application focused on building productive apps that make everyday life simpler, smarter, and more engaging.',
      technologies: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
      mainTech: 'React & Vite',
      liveLink: 'https://apphero01.netlify.app/',
      githubLink: 'https://github.com/masudurrahman07/eighth-assignment',
      challenges: [
        'Creating a clean and intuitive user interface that appeals to productivity-focused users',
        'Optimizing performance with Vite for fast loading and smooth user experience',
        'Implementing responsive design that works seamlessly across all device types',
        'Building a scalable component architecture for future feature additions'
      ],
      improvements: [
        'Add user authentication and personalized app recommendations',
        'Implement progressive web app (PWA) features for offline functionality',
        'Add integration with popular productivity tools and APIs',
        'Create a marketplace for third-party productivity apps and plugins'
      ],
      detailedDescription: 'HERO.IO is a comprehensive platform designed to showcase and provide access to productive applications that enhance daily workflows. The platform features a clean, modern interface built with React and Vite, ensuring fast performance and excellent user experience. The application demonstrates best practices in modern web development with responsive design and clear brand presentation.'
    },
    {
      id: 2,
      name: 'FreelanceHub – Freelance Marketplace Platform',
      image: '/freelancehub.png',
      description: 'FreelanceHub is a full-stack freelance marketplace that enables users to post jobs, apply for projects, and manage freelance work efficiently with secure authentication and full CRUD functionality.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
      mainTech: 'React & Node.js',
      liveLink: 'https://freelance-hub-1dcf2f.netlify.app/',
      githubLink: 'https://github.com/masudurrahman07/tenth-assignment-client',
      challenges: [
        'Implementing secure user authentication and authorization for different user types',
        'Designing a scalable database schema to handle complex job posting and application workflows',
        'Creating an intuitive job matching system that connects freelancers with relevant opportunities',
        'Building real-time features for job applications and communication between users'
      ],
      improvements: [
        'Add real-time messaging system between clients and freelancers',
        'Implement advanced search and filtering capabilities with AI-powered job recommendations',
        'Add payment integration with escrow services for secure transactions',
        'Create a rating and review system for both clients and freelancers'
      ],
      detailedDescription: 'FreelanceHub is a comprehensive marketplace platform that bridges the gap between freelancers and clients. The platform provides a secure environment where users can post jobs, browse opportunities, and manage their freelance careers. Built with a modern tech stack including React frontend and Node.js backend, it offers robust CRUD operations, user authentication, and a responsive interface that works seamlessly across all devices.'
    },
    {
      id: 3,
      name: 'LocalChefBazaar – Role-Based Food Marketplace',
      image: '/localchefbazaar.png',
      description: 'LocalChefBazaar is a food marketplace platform that connects local chefs with customers through role-based user experiences with secure authentication and comprehensive CRUD functionality.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      mainTech: 'React & Node.js',
      liveLink: 'https://local-chef-bazaar01.netlify.app/',
      githubLink: 'https://github.com/masudurrahman07/eleventh-assignment-client',
      challenges: [
        'Implementing complex role-based authentication system with different permissions for chefs, users, and admins',
        'Designing a scalable database architecture to handle multiple user roles and their specific data requirements',
        'Creating secure JWT-based authentication with protected routes for different user access levels',
        'Building an intuitive interface that adapts based on user roles while maintaining consistent user experience'
      ],
      improvements: [
        'Add real-time order tracking and notifications for customers and chefs',
        'Implement advanced search and filtering with cuisine type and dietary preferences',
        'Add payment gateway integration with order management system',
        'Create analytics dashboard for chefs to track their sales and popular dishes'
      ],
      detailedDescription: 'LocalChefBazaar is a sophisticated food marketplace that brings together local chefs and food enthusiasts in a secure, role-based platform. The system features three distinct user experiences: chefs can create and manage their meal offerings, customers can browse and order food while maintaining favorites, and admins oversee platform operations. Built with modern web technologies and JWT authentication, the platform ensures secure data handling and provides a seamless experience for all user types.'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-12 lg:px-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <div className="h-1 w-24 bg-primary rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-center">
            Here are some of the projects I've worked on recently. Each one presented unique challenges and learning opportunities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800 flex flex-col h-full group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto space-y-3">
                  <button 
                    onClick={() => onProjectSelect(project)}
                    className="w-full bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded-lg font-medium transition-all transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-lg mr-2">visibility</span>
                    View Details
                  </button>
                  
                  <div className="flex justify-between items-center border-t border-gray-100 dark:border-gray-800 pt-3">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg mr-1">launch</span>
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg mr-1">code</span>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 flex justify-center">
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center group">
            View All Projects
            <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;