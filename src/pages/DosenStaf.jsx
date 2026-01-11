// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Doss from "../assets/uzan.png";
// import Footer from "../components/Footer";

// import api from "../api";

// const DosenStaf = () => {

//   const SkeletonDosen = () => {
//     return (
//       <div className="animate-pulse rounded-2xl shadow-lg border border-slate-200 dark:border-gray-700 overflow-hidden">
//         <div className="h-64 bg-gray-300 dark:bg-gray-700 w-full"></div>

//         <div className="p-5">
//           <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
//           <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>

//           <div className="h-px bg-gray-300 dark:bg-gray-700 my-4"></div>

//           <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
//         </div>
//       </div>
//     );
//   };

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     api
//       .get("/dosen-staf")
//       .then((res) => {
//         setData(res.data.data || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Gagal fetch API:", err);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {}, []);

//   return (
//     <>
//       <Navbar />
//       {loading && (
//         <div className="pt-32 pb-20 min-h-screen dark:bg-gray-900 px-5 md:px-10">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//               {[...Array(8)].map((_, i) => (
//                 <SkeletonDosen key={i} />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//       {!loading && data.length > 0 ? (
//         <div className="pt-32 pb-20 min-h-screen dark:bg-gray-900 px-5 md:px-10">
//           <div className="max-w-6xl mx-auto text-center">
//             <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
//               Fakultas Keguruan dan Ilmu Pendidikan
//             </p>
//             <h1 className="text-4xl md:text-4xl font-extrabold text-center dark:text-white mb-12">
//               <span className="font-[200]">BERTEMU</span> DENGAN DOSEN DAN{" "}
//               <br /> STAF DI <span className="font-[200]">FAKULTAS</span> KAMI
//             </h1>

//             {/* GRID */}
//             <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//               {data.map((dosen, index) => (
//                 <div
//                   key={index}
//                   className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-gray-700"
//                 >
//                   {/* FOTO */}
//                   <div className="relative h-64 overflow-hidden">
//                     <img
//                       src={
//                         dosen.photo
//                           ? `http://fkip-dash.test/storage/${dosen.photo}`
//                           : "/default.jpg"
//                       }
//                       alt={dosen.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//                     />

//                     {/* GRADIENT OVERLAY */}
//                     <div className="absolute inset-0 from-black/40 to-transparent"></div>
//                   </div>

//                   {/* CARD BODY */}
//                   <div className="p-5 text-left">
//                     <h3 className="text-xl font-bold mb-1">
//                       {dosen.front_degree ? dosen.front_degree + " " : ""}
//                       {dosen.name}
//                       {dosen.back_degree ? ", " + dosen.back_degree : ""}
//                     </h3>

//                     <p className="text-sm mt-1">{dosen.position}</p>

//                     {/* GARIS PEMBATAS */}
//                     <div className="mt-4 h-px bg-slate-200 dark:bg-gray-700"></div>

//                     {/* Info tambahan (opsional) */}
//                     <div className="mt-3 text-xs">NIP: {dosen.nip || "-"}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="text-center py-10">
//           <i className="ri-information-line text-5xl text-gray-400"></i>
//           <p className="text-gray-500 mt-3">Belum ada Data **Dosen**.</p>
//         </div>
//       )}

//       <Footer />
//     </>
//   );
// };

// export default DosenStaf;

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse rounded-2xl shadow-lg border border-slate-200 dark:border-gray-700 overflow-hidden">
      <div className="h-64 bg-gray-300 dark:bg-gray-700 w-full"></div>

      <div className="p-5">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>

        <div className="h-px bg-gray-300 dark:bg-gray-700 my-4"></div>

        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
      </div>
    </div>
  );
};

const DosenStaf = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/dosen-staf")
      .then((res) => {
        setData(res.data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal fetch API:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 min-h-screen dark:bg-gray-900 px-5 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Fakultas Keguruan dan Ilmu Pendidikan
          </p>

          <h1 className="text-4xl md:text-4xl font-extrabold text-center dark:text-white mb-12">
            <span className="font-[200]">BERTEMU</span> DENGAN DOSEN DAN <br />
            STAF DI <span className="font-[200]">FAKULTAS</span> KAMI
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {loading
              ?
                [...Array(8)].map((_, i) => <SkeletonCard key={i} />)
              : data.length > 0
              ? data.map((dosen, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-gray-700"
                  >
                    {/* FOTO */}
                    <div className="relative h-64 overflow-hidden">
                      {/* <img
                        src={
                          dosen.photo
                            ? `http://fkip-dash.test/storage/${dosen.photo}`
                            : "/default.jpg"
                        }
                        alt={dosen.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      /> */}
                      <img
  src={
    dosen.photo
      ? `https://fkip-unbaja.dev-project.web.id/storage/${dosen.photo}`
      : "/default.jpg"
  }
  alt={dosen.name}
  className={`w-full h-full object-cover group-hover:scale-110 transition duration-500 
    ${!dosen.photo ? "default-user-icon" : ""}`}
 />

                    </div>

                    {/* BODY */}
                    <div className="p-5 text-left">
                      <h3 className="text-xl font-bold mb-1">
                        {dosen.front_degree ? dosen.front_degree + " " : ""}
                        {dosen.name}
                        {dosen.back_degree ? ", " + dosen.back_degree : ""}
                      </h3>

                      <p className="text-sm mt-1">{dosen.position}</p>

                      <div className="mt-4 h-px bg-slate-200 dark:bg-gray-700"></div>

                      <div className="mt-3 text-xs">
                        NIP: {dosen.nip || "-"}
                      </div>
                    </div>
                  </div>
                ))
              : !loading && (
                  <div className="col-span-full text-center py-10">
                    <i className="ri-information-line text-5xl text-gray-400"></i>
                    <p className="text-gray-500 mt-3">
                      Belum ada Data <b>Dosen</b>.
                    </p>
                  </div>
                )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DosenStaf;
