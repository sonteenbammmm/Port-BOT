import { Navbar2 } from "../NavBar2";
import { RevealOnScroll } from "../RevealOnScroll";

const OnCloud = () => {
  return (
    <section id="onCloud" className="py-20 ">
      <Navbar2 />


        <div className="flex flex-col items-center px-4 md:px-12 space-y-10">

          {/* Title */}
          <h2 className="text-xl md:text-3xl underline font-bold text-blue-500  mb-2 md: mb-4 text-center">
          Ranked 7th (Cloud Track) in Huawei ICT Competition Thailand 2024
          </h2>

          {/* Description */}
          <div className="w-full max-w-4xl rounded-xl p-8 border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <p className="text-gray-700 text-center">
            I ranked 7th out of 50 teams, scoring over 1,000 points in the Huawei ICT Competition Thailand 2024, competing in the Cloud Track category
            </p>
          </div>

          {/* Presentation Section */}
          <div className="w-full max-w-6xl p-6 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300">

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {[
                "rank.png",
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] bg-cover bg-center bg-no-repeat rounded-lg border"
                  style={{ backgroundImage: `url('/assets/${img}')` }}
                ></div>
              ))}
                

            </div>
          </div>

        </div>

    </section>
  );
};

export default OnCloud;
