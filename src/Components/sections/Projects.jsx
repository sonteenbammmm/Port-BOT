import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from 'react-router-dom';

const cardClass =
  "glass p-6 rounded-xl border border-gray-300 hover:border-blue-500  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all";

export const Projects = () => {
  const projects = [
    {
      title: "Web Application for Generating Three-Dimensional Antenna Gain",
      description:
        "A web app for plotting Antenna 3D Gain from MSI files. It processes antenna parameters from user-uploaded files to generate 2D and 3D antenna patterns for visualization.",
      tech: [
        "Next.js", "Django", "PostgreSQL", "REST API", "Plotly", "Javascript",
        "Python", "Tailwind CSS", "Matplotlib", "scikit-learn", "scipy",
      ],
      slug: "web-app",
    },
    {
      title: "Modeling Path Loss in Central Area Thailand",
      description:
        "Presented at TJMW Special Session at IEICE General Conference 2025 – Tokyo City University, Japan.",
      tech: [
        "Python", "Pandas", "Machine learning", "K-Means clustering technique",
        "PostgreSQL", "Matplotlib", "scikit-learn", "scipy",
      ],
      slug: "Modeling",
    },
    {
      title: "Detecting Anomalous Antenna Coverage Using Distance Rate",
      description:
        "Received the Young Researcher Encouragement Award from Thailand-Japan Microwave 2024 at KMITL.",
      tech: [
        "Mobile Network Optimization", "Python", "Pandas", "Matplotlib",
        "scikit-learn", "scipy",
      ],
      slug: "Detecting",
    },
    {
      title: "Ranked 7th (Cloud Track) in Huawei ICT Competition Thailand 2024",
      description:
        "Ranked 7th out of 50 teams in the Huawei ICT Competition Thailand 2024, scoring over 1,000 points.",
      tech: ["Cloud Computing"],
      slug: "onCloud",
    },
    {
      title: "Seed for the Future Huawei Bootcamp 2024",
      description:
        "Pitched a project showcasing technical skills, creativity, and teamwork to solve real-world challenges.",
      tech: [
        "Presentation & Public Speaking", "Pitching", "Innovation & Creativity",
        "Teamwork", "Analysis", "Design Thinking",
      ],
      slug: "seed",
    },
    {
      title: "Singha Ultimate Challenge - Doer Force the Future Program (2024)",
      description:
        "Developed the innovation plan 'Turning Malt Waste into Value' and ranked in the top 15 of 150 teams.",
      tech: [
        "Presentation & Public Speaking", "Pitching", "Innovation & Creativity",
        "Teamwork", "Analysis", "Design Thinking",
      ],
      slug: "Singha",
    },
    {
      title: "HCIA-Cloud Service v3.5 Exam Tutorial Program – Huawei Technologies (Thailand) (2024)",
      description:
        "Completed the course and gained expertise in cloud services and Huawei technologies.",
      tech: ["Cloud Computing"],
      slug: "HCIA",
    },
    {
      title: "Other Activities",
      description:
        "GUI simulation of data transmission in the physical layer using 5G technology, supporting text, graphics, and more.",
      tech: [,
      ],
      slug: "Other",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            My Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className={cardClass}>
                <h3 className="text-xl font-bold mb-2 text-black">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-0">**Click below <strong>"View Project→ "</strong> Button**</p>
                <div className="flex justify-between items-center">
                <Link to={`/port-BOT/${project.slug}`}>
                  <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-xl/20 hover:bg-gray-100 transition-colors my-4 cursor-pointer">
                    View Project →
                  </button>
                </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
