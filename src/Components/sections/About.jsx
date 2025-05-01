import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const HardSkills = [
    "Python",
    "Pandas",
    "Javascript",
    "RESTful API",
    "PostgreSQL",
    "Git","Django",

  ];

  const SoftSkills = ["Communication", "Problem-solving",

  "Critical thinking",
  
  "Time management",
  
  "Adaptability",
  
  "Attention to detail",
  
  "Teamwork",
  
  "Customer focus"];

  return (
<section
  id="about"
  className="min-h-screen flex items-center justify-center py-16 px-4"
>
  <RevealOnScroll>
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-5 rounded-xl p-6 border border-gray-300 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 mb-6">
        <div className="w-40 h-32 md:w-100 md:h-54 bg-[url('/pic.png')] bg-contain bg-center bg-no-repeat rounded-lg border" />
        <p className="text-gray-700 text-sm md:text-base text-center md:text-left md:content-center">
          "Passionate about data analysis and system design, with a strong drive to deliver effective business solutions and collaborate across teams—while continuously growing in software development to build reliable and scalable systems."
        </p>
      </div>

      <div className="rounded-xl p-6 border border-gray-300 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hard Skills */}
          <div>
            <h3 className="text-blue-800 text-lg font-bold mb-4">Hard Skills</h3>
            <div className="flex flex-wrap gap-2">
              {HardSkills.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-800 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-blue-800 text-lg font-bold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {SoftSkills.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-800 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education and Work */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-xl border border-gray-300 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-bold mb-4 text-blue-800">🏫 Education</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
            <li>
              <strong>Bachelor’s Degree in Telecommunication and Engineering</strong> – King Mongkut’s Institute of Technology Ladkrabang (2021–2025)
            </li>
            <li>
              <strong>Relevant Coursework:</strong> Computer Networks, Network Security, Cloud Computing Fundamentals, Data Communication Systems, Scripting for System Administration (e.g., Python, Bash)
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl border border-gray-300 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-bold mb-4 text-blue-800">💼 Work Experience</h3>
          <div className="space-y-4 text-gray-600 text-sm">
            <div>
              <h4 className="font-semibold">AIS Internship (2024)</h4>
              <p>
                Developed a Planning Tool for internal use. Leveraged machine learning and AI to optimize data analysis and improve departmental decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </RevealOnScroll>
</section>
  );
};
