import { Navbar2 } from "../NavBar2";
import { RevealOnScroll } from "../RevealOnScroll";

const Seed = () => {
  return (
    <section id="Seed" className="py-20 ">
      <Navbar2 />

      <RevealOnScroll>
        <div className="flex flex-col items-center px-4 md:px-12 space-y-10">

          {/* Title */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Seed for the Future Huawei Bootcamp 2024
          </h2>

          {/* Description */}
          <div className="w-full max-w-4xl rounded-xl p-8 border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <p className="text-gray-700 text-center">
            "I participated in Huawei's Seeds for the Future boot camp, gaining insights into advanced ICT technologies and global innovation. During the program, I had the opportunity to pitch a project, showcasing my technical skills, creativity, and teamwork, while addressing real-world challenges with innovative solutions."
            </p>
          </div>

          {/* Presentation Section */}
          <div className="w-full max-w-6xl p-6 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">
Innovation Idea "Food Guardian"
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {[
                "foode.jpeg",
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] bg-contain bg-center bg-no-repeat rounded-lg border"
                  style={{ backgroundImage: `url('src/assets/${img}')` }}
                ></div>
              ))}
            <p className="text-gray-700 text-center">
            "This IoT-based smart food storage box alerts retailers when food nears spoilage, enabling timely discounts or donations. It reduces food waste, cuts costs, and supports sustainable practices. The system promotes efficient inventory management and aligns with circular economy principles, making it ideal for modern, eco-conscious food businesses."
            </p>
                
            </div>
          </div>

          {/* Publication Section */}
          <div className="w-full max-w-6xl p-6 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">
            Participated Seed for the future Huawei boothcamp
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                "cer-seed.jpeg",
                "seed.png"
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] bg-contain bg-center bg-no-repeat rounded-lg border"
                  style={{ backgroundImage: `url('src/assets/${img}')` }}
                ></div>
              ))}

            </div>

          </div>
          

        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Seed;
