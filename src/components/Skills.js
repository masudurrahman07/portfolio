import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 95, category: 'Frontend' },
    { name: 'CSS3', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 88, category: 'Frontend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'GitHub', level: 88, category: 'Tools' }
  ];

  const categories = ['Frontend', 'Backend', 'Tools'];

  return (
    <div className="w-full bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Skills Banner */}
        <div className="flex flex-wrap justify-between items-center text-gray-400 font-semibold uppercase tracking-widest text-sm md:text-base gap-6 md:gap-0 text-center mb-16">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="w-1/2 md:w-auto hover:text-primary transition-colors cursor-default"
            >
              {skill.name}
            </span>
          ))}
        </div>

        {/* Detailed Skills Section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">My Skills</h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-center">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          {/* Skills by Category */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category} className="bg-white dark:bg-background-dark rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-6 text-center text-primary">{category}</h3>
                <div className="space-y-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-primary-hover h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;