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
  
  "Adaptability",
  
  "Attention to detail",
  
  "Teamwork",
  
  "Customer focus"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-3xl font-bold text-blue-500  mb-2 md: mb-4 text-center">
                {" "}
                &lt; About Me &gt;
            </h2>

         <div className=" flex rounded-xl p-8 border border-gray-300 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 mb-6">
            <div className="flex items-center justify-center mb-5">
                <div className="w-32 h-32 md:w-54 h-54 bg-[url('/pic.png')] bg-contain bg-center bg-no-repeat rounded-lg border mr-5" />
            </div>
                
                <p className="text-gray-700 mb-6 content-center ">
                "Passionate about data analysis and system design, with a strong drive to deliver effective business solutions and collaborate across teams—while continuously growing in software development to build reliable and scalable systems."
                </p>
           </div>
          <div className="rounded-xl p-8 border border-gray-300 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-blue-800 text-xl font-bold mb-4"> Hard Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {HardSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-800 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl text-blue-800 font-bold mb-4"> SoftSkills</h3>
                <div className="flex flex-wrap gap-2">
                  {SoftSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-800 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-gray-300 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-800"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong> Bachelor's Degree in Telecommunication and Engineering </strong> - King Mongkut's Institute of Technology Ladkrabang
                  (2021-2025)
                </li>
                <li>
                  <strong>Relevant Coursework:</strong> Computer Networks ,Network Security , Cloud Computing Fundamentals,Data Communication Systems
,Scripting for System Administration (e.g., Python, Bash)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-gray-300 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-800" > 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    AIS Internship (2024){" "}
                  </h4>
                  <p>
                  Develop a Planning Tool used within the department. I used machine learning (ML) and artificial intelligence (AI) to optimize data analysis and improve decision-making.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
