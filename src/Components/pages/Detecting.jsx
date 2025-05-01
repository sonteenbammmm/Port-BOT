import { Navbar2 } from "../NavBar2";
import { RevealOnScroll } from "../RevealOnScroll";

const Detecting = () => {
  return (
    <section id="Detecting" className="py-20 ">
      <Navbar2 />

      <RevealOnScroll>
        <div className="flex flex-col items-center px-4 md:px-12 space-y-10">

          {/* Title */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Detecting Anomalous Antenna Coverage Using Distance Rate
          </h2>

          {/* Description */}
          <div className="w-full max-w-4xl rounded-xl p-8 border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <p className="text-gray-700 text-center">
            This study analyzes path loss in Thailand's Central region, considering factors like geography, building density, and user
distribution. By clustering regions based on antenna 3D gain, building density, and height, the research develops precise equations for
each cluster, enhancing communication system performance and reliability in varied environments.
            </p>
          </div>

          {/* Presentation Section */}
          <div className="w-full max-w-6xl p-6 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">
            Received the Young Researcher Encouragement Award from Thailand-Japan Microwave 2024 
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                "cerDetect.png",
                "pic-cer.png",
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] bg-contain bg-center bg-no-repeat rounded-lg border"
                  style={{ backgroundImage: `url('/assets/${img}')` }}
                ></div>
              ))}
                
            </div>
          </div>

          {/* Download Section */}
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4">Download My Research</h1>
            <p className="mb-6 text-gray-600">
              Click the button below to download the file.
            </p>
            <a
              href="/assets/Detecting Anomalous Antenna Coverage Using Distance Rate.pdf"
              download
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300"
            >
              📎 Download Attachment
            </a>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Detecting;
