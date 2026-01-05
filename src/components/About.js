import React from 'react';

const About = () => {
  const services = [
    {
      icon: 'monitor',
      title: 'Website Development',
      description: 'Creating responsive and modern websites using the latest technologies and best practices.'
    },
    {
      icon: 'smartphone',
      title: 'App Development',
      description: 'Building cross-platform mobile applications with intuitive user interfaces and smooth performance.'
    },
    {
      icon: 'dns',
      title: 'Website Hosting',
      description: 'Providing reliable hosting solutions and deployment services for web applications.'
    }
  ];



  return (
    <section id="about" className="py-20 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Side - Services */}
        <div className="lg:col-span-5 relative pl-8 border-l border-gray-300 dark:border-gray-700 space-y-12">
          {/* Timeline Dots */}
          <div className="absolute -left-[5px] top-0 bottom-0 flex flex-col justify-between py-2">
            <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
          </div>

          {/* Service Items */}
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-6 group cursor-pointer">
              <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md group-hover:shadow-primary/20 transition-all">
                <span className="material-icons-outlined text-3xl text-primary">{service.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - About Content */}
        <div className="lg:col-span-7 space-y-8">
          <h2 className="text-4xl font-bold">About me</h2>
          
          {/* About Text */}
          <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I started my software journey  Seeing my seniors create stunning visual stories inspired me 
              to explore the creative possibilities of technology. This sparked my curiosity about how digital tools could 
              be used to build and create meaningful experiences.
            </p>
            
            <p>
              My programming journey began with that initial inspiration and has evolved into a passion for crafting 
              clean, efficient code and user-friendly applications. I enjoy tackling complex problems and turning 
              ideas into functional, beautiful digital solutions.
            </p>
            
            <p>
              When I'm not coding, I enjoy playing video games, which actually helps me understand user experience 
              from a different perspective. I also continue to explore photography and digital creativity, as I believe 
              that diverse interests fuel innovation in software development.
            </p>
            
            <p>
              I'm particularly drawn to projects that combine technical excellence with creative problem-solving, 
              whether it's building responsive web applications, optimizing user interfaces, or developing tools 
              that make people's digital experiences more enjoyable and efficient.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;