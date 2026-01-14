import { skills } from "../skillsdata";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" py-28"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-16">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6
                         hover:border-indigo-500/40 transition"
            >
              {/* Icon */}
              <div className="text-4xl text-indigo-400 mb-4">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-white/10 rounded-full">
                <div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>

              {/* Percentage */}
              <p className="text-sm text-gray-400 mt-2">
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
