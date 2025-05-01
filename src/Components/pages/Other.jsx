import { Navbar2 } from "../NavBar2";
import { RevealOnScroll } from "../RevealOnScroll";

const Other = () => {
  return (
    <section id="Seed" className="py-20 ">
      <Navbar2 />

        <div className="flex flex-col items-center px-4 md:px-12 space-y-10">

          {/* Title */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Activities
          </h2>

          {/* TA */}
          <div className="w-full max-w-6xl p-6 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">
            Teacher Assistant
            </h3>

            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 gap-2 ">
            {[
                "TA.png",
                "TA.png"
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[6/3] bg-contain bg-center bg-no-repeat rounded-lg border-none "
                  style={{ backgroundImage: `url('/assets/${img}')` }}
                ></div>
              ))}
                
            </div>
            <div className="flex justify-center mt-5">
              <ul className="text-gray-700 text-left list-disc list-inside space-y-1">
                <li>Teacher Assistant in Foundation English Class (2023)</li>
                <li>Teacher Assistant in Charm School Class (2023)</li>
                <li>Teacher Assistant in Circuit System Laboratory Class (2023)</li>
                <li>Teacher Assistant in Charm School Class (2022)</li>
              </ul>
            </div>
          </div>

          {/* Poster */}
          <div className="w-full max-w-6xl p-6 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">
            Designed posters for various events
            </h3>

            <div className="grid grid-cols-3 gap-1 md:grid-cols-6 gap-2 ">
            {[
                "Poster_1.jpg",
                "Poster_2.jpg",
                "Poster_3.jpg",
                "Poster_4.jpg",
                "poster -1.png",
                "poster-2.png",
                "poster4.png",
                "poster5.png",
                "poster6.png",
                "poster7.png",
                "poster8.png",
                "Poster_9.jpg",
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[2/3] bg-contain bg-center bg-no-repeat rounded-lg border "
                  style={{ backgroundImage: `url('/assets/${img}')` }}
                ></div>
              ))}
              
                
            </div>
            


          </div>

            {/* Admin */}
            <div className="w-full max-w-6xl p-6 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">
                Assisted in organizing and coordinating various camps
              </h3>

              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {[
                  "camp_1.jpg",
                  "camp_2.jpg",
                  "camp_3.jpg",
                  "camp_4.jpg",
                  "camp_5.jpg",
                  "camp.png",
                ].map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-[2/3] bg-contain bg-center bg-no-repeat rounded-lg border"
                    style={{ backgroundImage: `url('/assets/${img}')` }}
                  ></div>
                ))}
              </div>

              {/* Centered text block */}
              <div className="flex justify-center mt-5">
                <ul className="text-gray-700 text-left list-disc list-inside space-y-1 max-w-xl">
                  <li>
                    Actively participated in organizing various student camps and events,
                    taking on roles such as MC, staff member, teaching assistant, and
                    coordinator.
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full max-w-6xl p-6 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">
              Served as a Page AdminS for departmental and university club activities
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                {[
                  "admin_1.jpg",
                  "admin_2.jpg",
                ].map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-[2/3] bg-contain bg-center bg-no-repeat rounded-lg border-none"
                    style={{ backgroundImage: `url('/assets/${img}')` }}
                  ></div>
                ))}
              </div>

              {/* Centered text block */}
              <div className="flex justify-center mt-5">
                <ul className="text-gray-700 text-left list-disc list-inside space-y-1 max-w-xl">
                  <li>
                  Managed and created content for official social media pages, promoted events, coordinated announcements, and enhanced engagement for student communities through creative visuals and timely communication.
                  </li>
                </ul>
              </div>
            </div>

            
            
        </div>

    </section>
  );
};

export default Other;
