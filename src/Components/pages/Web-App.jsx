import { Navbar2 } from "../NavBar2";
import { RevealOnScroll } from "../RevealOnScroll";

const WebApp = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <Navbar2/>
      <div className="flex flex-col items-center px-4 md:px-12 py-8 space-y-6">

          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Web Application for Generating Three-Dimensional Antenna Gain
          </h2>

          <div className="w-full max-w-4xl rounded-xl p-8 border border-gray-300 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
            <p className="text-gray-700 text-center">
            "A web app for plotting Antenna 3D Gain from MSI files using Next.js (frontend), Django (backend), PostgreSQL (database), and REST API. It processes antenna parameters from user-uploaded files to generate 2D and 3D antenna patterns for visualization on the web application. This tool is designed to support planning in telecommunication networks by helping engineers assess and optimize antenna coverage."
            </p>
          </div>


          <div className="p-6 rounded-xl border border-gray-300 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-blue-800"> Signal Strength Monitoring System in Each Area </h3>
              <div className="w-full max-w-4xl">
                <video
                  className="w-full h-auto bg-contain bg-center rounded-lg"
                  controls
                >
                  <source
                    src="/assets/ระบบ plot antenna.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          
          <div className="p-6 rounded-xl border border-gray-300 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-blue-800"> Search MSI file System </h3>
              <div className="w-full max-w-4xl">
                <video
                  className="w-full h-auto bg-contain bg-center rounded-lg"
                  controls
                >
                  <source
                    src="/assets/ระบบค้นหาmsi file table.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-300 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-blue-800"> Signal Strength Monitoring System in Each Area </h3>
              <div className="w-full max-w-4xl">
                <video
                  className="w-full h-auto bg-contain bg-center rounded-lg"
                  controls
                >
                  <source
                    src="/assets/ระบบตรวจสอบความแรงของสัญญาณในแต่ละพื้นที่.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

      </div>
    </section>

  );
};

export default WebApp;
