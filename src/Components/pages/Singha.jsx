import { Navbar2 } from "../NavBar2";
import { RevealOnScroll } from "../RevealOnScroll";

const Singha = () => {
  return (
    <section id="Seed" className="py-20 ">
      <Navbar2 />

        <div className="flex flex-col items-center px-4 md:px-12 space-y-10">

          {/* Title */}
          <h2 className="text-xl font-bold text-blue-800 mb-6 text-center">
          Singha Ultimate Challenge - Doer Force the Future Program (2024)
          </h2>

          {/* Description */}
          <div className="w-full max-w-4xl rounded-xl p-8 border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <p className="text-gray-700 text-center">
            "Create the innovation plan "Turning Malt Waste into Value" by creating carbon filters from malt waste, earning a spot among the top 15 teams in the "Singha Ultimate Challenge - Doer Force the Future."
            </p>
          </div>

          {/* Presentation Section */}
          <div className="w-full max-w-6xl p-6 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">
Innovation Idea "Turning Malt Waste into Value"
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {[
                "Product Model.png",
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] bg-contain bg-center bg-no-repeat rounded-lg border"
                  style={{ backgroundImage: `url('/assets/${img}')` }}
                ></div>
              ))}
            <p className="text-gray-700 text-center">
            "An air filter made from spent malt that effectively captures fine particulate matter (PM2.5) and reduces carbon dioxide (CO2) emissions, utilizing the unique properties of spent malt and addressing the need for industrial waste management. This innovation focuses on providing sustainable environmental and economic solutions to combat air pollution."
            </p>
                
            </div>
          </div>

          {/* Publication Section */}
          <div className="w-full max-w-6xl p-6 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">
            Participated Singha Ultimate Challenge - Doer Force the Future Program
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                "15team.png",
                "pre-sing.png",
                "team-sing.png",
                "all sing.png"
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] bg-contain bg-center bg-no-repeat rounded-lg border"
                  style={{ backgroundImage: `url('/assets/${img}')` }}
                ></div>
              ))}

            </div>

          </div>
          

        </div>

    </section>
  );
};

export default Singha;
