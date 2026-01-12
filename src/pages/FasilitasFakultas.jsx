// import React from "react";
// import Navbar from "../components/Navbar";
// import Hero from "../assets/home.png";
// import Footer from "../components/Footer";

// import api from "../api";

// const FasilitasFakultas = () => {
//   const [facilities, setFacilities] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//       api
//         .get("/facilities")
//         .then((res) => {
//           setFacilities(res.data.data);
//         })
//         .catch((err) => {
//           console.error("Gagal fetch Facilities:", err);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="pt-32 min-h-screen dark:bg-gray-900 px-6 md:px-20">
//         <div className="max-w-6xl mx-auto">
//           <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
//             Fakultas Keguruan dan Ilmu Pendidikan
//           </p>
//           <h1 className="text-4xl md:text-4xl font-extrabold text-center dark:text-white mb-12">
//             SARANA & PRASARANA <span className="font-[200]">FAKULTAS</span> FKIP
//           </h1>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {fasilitasList.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative rounded-xl group overflow-hidden shadow-lg"
//               >
//                 {/* Gambar */}
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-70 object-cover transform group-hover:scale-110 transition-all duration-500"
//                 />

//                 {/* Overlay grayscale tanpa hitam */}
//                 <div
//                   className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/20 group-hover:bg-black/40 p-3 translate-y-full group-hover:translate-y-0 transition-all duration-300"
//                 >
//                   <p className="text-white text-sm font-semibold drop-shadow-lg">
//                     {item.name}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default FasilitasFakultas;
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";

const FasilitasFakultas = () => {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/facilities")
      .then((res) => {
        setFacilities(res.data.data);
      })
      .catch((err) => {
        console.error("Gagal fetch Facilities:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 min-h-screen px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Fakultas Keguruan dan Ilmu Pendidikan
          </p>

          <h1 className="text-4xl md:text-4xl font-extrabold text-center dark:text-white mb-12">
            SARANA & PRASARANA <span className="font-[200]">FAKULTAS</span> FKIP
          </h1>

          {/* SKELETON LOADER */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"
                ></div>
              ))}
            </div>
          ) : (
            /* DATA DARI API */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {facilities.map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-xl group overflow-hidden shadow-lg"
                >
                  {/* Gambar */}
                  <img
                    src={`https://fkip-unbaja.dev-project.web.id/storage/${item.image}`}
                    alt={item.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/20 group-hover:bg-black/40 p-3 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-white text-sm font-semibold drop-shadow-lg">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FasilitasFakultas;
