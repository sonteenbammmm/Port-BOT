import { Navbar2 } from "../NavBar2";
import { RevealOnScroll } from "../RevealOnScroll";

const HCIA = () => {
  return (
    <section id="Seed" className="py-20 ">
      <Navbar2 />

      <RevealOnScroll>
        <div className="flex flex-col items-center px-4 md:px-12 space-y-10">

          {/* Title */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          HCIA-Cloud Service v3.5 Exam Tutorial Program
          </h2>

          {/* Description */}
          <div className="w-full max-w-4xl rounded-xl p-8 border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <p className="text-gray-700 text-center">
            "Completed the HCIA-Cloud Service v3.5 Exam Tutorial Program, gaining expertise in cloud services and technologies, offered by Huawei Technologies (Thailand) Co., Ltd., enhancing professional IT skills."
            </p>
          </div>

          {/* Presentation Section */}
          <div className="w-full max-w-6xl p-6 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">
            Completed the HCIA-Cloud Service v3.5 Exam Tutorial Program"
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {[
                "hcaia.png",
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] bg-contain bg-center bg-no-repeat rounded-lg border"
                  style={{ backgroundImage: `url('/assets/${img}')` }}
                ></div>
              ))}
            <p className="text-gray-700 text-center">
            "Organized a study session to help participants prepare for the HCIA-Cloud Service v3.5 certification exam, focusing on key concepts in cloud computing, Huawei cloud architecture, core services, and practical use cases. The session aimed to strengthen foundational knowledge, improve exam readiness, and support professional development in cloud technology.."
            </p>
                
            </div>
          </div>


        </div>
      </RevealOnScroll>
    </section>
  );
};

export default HCIA;
