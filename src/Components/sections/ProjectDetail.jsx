import { useParams } from 'react-router-dom';

const projects = [
    {
        title: "Web Application for Generating Three-Dimensional Antenna Gain",
        description:
          "A web app for plotting Antenna 3D Gain from MSI files. It processes antenna parameters from user-uploaded files to generate 2D and 3D antenna patterns for visualization.",
        tech: [
          "Next.js",
          "Django",
          "PostgreSQL",
          "REST API",
          "Plotly",
          "Javascript",
          "Python",
          "Tailwind CSS",
          "Matplotlib",
          "scikit-learn",
          "scipy",
  
        ],
        slug: "web-app",
      },
      {
        title: "Modeling Path Loss in Central Area Thailand",
        description:
          "Presented at TJMW Special Session at IEICE General Conference 2025 – Tokyo City University, Japan.",
        tech: [
          "Python",
          "Pandas",
          "Machine learning",
          "K-Means clustering technique",
          "PostgreSQL",
          "Matplotlib",
          "scikit-learn",
          "scipy",
        ],
        slug: "Modeling",
        
      },
      {
        title: "Detecting Anomalous Antenna Coverage Using Distance Rate",
        description:
          "Received the Young Researcher Encouragement Award from Thailand-Japan Microwave 2024 at KMITL.",
        tech: [
          "Mobile Network Optimization",
          "Python",
          "Pandas",
          "Matplotlib",
          "scikit-learn",
          "scipy",
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
          "Presentation & Public Speaking",
          "Pitching",
          "Innovation & Creativity",
          "Teamwork",
          "Analysis",
          "Design Thinking",
        ],
        slug: "seed"
      },
      {
        title:
          "Singha Ultimate Challenge - Doer Force the Future Program (2024)",
        description:
          "Developed the innovation plan 'Turning Malt Waste into Value' and ranked in the top 15 of 150 teams.",
        tech: [
          "Presentation & Public Speaking",
          "Pitching",
          "Innovation & Creativity",
          "Teamwork",
          "Analysis",
          "Design Thinking",
        ],
        slug: "Singha"
      },
      {
        title:
          "HCIA-Cloud Service v3.5 Exam Tutorial Program – Huawei Technologies (Thailand) (2024)",
        description:
          "Completed the course and gained expertise in cloud services and Huawei technologies.",
        tech: ["Cloud Computing"],
        slug: "HCIA",
        
      },
      {
        title: "Data Transmission Simulation via 5G with Python (2023)",
        description:
          "GUI simulation of data transmission in the physical layer using 5G technology, supporting text, graphics, and more.",
        tech: [
          "Python",
          "Pandas",
          "Matplotlib",
          "scikit-learn",
          "scipy",
          "Tkinter",
        ],
        slug: "Data"
      },
  
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-8 text-center text-red-500">Project not found</div>;
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
