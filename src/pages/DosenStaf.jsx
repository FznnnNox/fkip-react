// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import api from "../api";

// const SkeletonCard = () => {
//   return (
//     <div className="animate-pulse rounded-2xl shadow-lg border border-slate-200 dark:border-gray-700 overflow-hidden">
//       <div className="h-64 bg-gray-300 dark:bg-gray-700 w-full"></div>

//       <div className="p-5">
//         <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
//         <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>

//         <div className="h-px bg-gray-300 dark:bg-gray-700 my-4"></div>

//         <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
//       </div>
//     </div>
//   );
// };

// const DosenStaf = () => {
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

//   return (
//     <>
//       <Navbar />
//       <div className="pt-32 pb-24 min-h-screen dark:bg-gray-900 px-5 md:px-10">
//         <div className="max-w-6xl mx-auto text-center">
//           <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
//             Fakultas Keguruan dan Ilmu Pendidikan
//           </p>

//           <h1 className="text-4xl md:text-4xl font-extrabold text-center dark:text-white mb-12">
//             <span className="font-[200]">BERTEMU</span> DENGAN DOSEN DAN <br />
//             STAF DI <span className="font-[200]">FAKULTAS</span> KAMI
//           </h1>

//           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {loading
//               ? [...Array(8)].map((_, i) => <SkeletonCard key={i} />)
//               : data.length > 0
//               ? data.map((dosen, index) => (
//                   <div
//                     key={index}
//                     className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-gray-700"
//                   >
//                     {/* FOTO */}
//                     <div className="relative h-64 overflow-hidden">
//                       <img
//                         src={
//                           dosen.photo
//                             ? `https://fkip-unbaja.dev-project.web.id/storage/${dosen.photo}`
//                             : "/default.jpg"
//                         }
//                         alt={dosen.name}
//                         className={`w-full h-full object-contain group-hover:scale-110 transition duration-500 
//     ${!dosen.photo ? "default-user-icon" : ""}`}
//                       />
//                     </div>

//                     {/* BODY */}
//                     <div className="p-5 text-left">
//                       <h3 className="text-xl font-bold mb-1">
//                         {dosen.front_degree ? dosen.front_degree + " " : ""}
//                         {dosen.name}
//                         {dosen.back_degree ? ", " + dosen.back_degree : ""}
//                       </h3>

//                       <p className="text-sm mt-1">{dosen.position}</p>

//                       <div className="mt-4 h-px bg-slate-200 dark:bg-gray-700"></div>

//                       <div className="mt-3 text-xs">
//                         NIDN: {dosen.nidn || "-"}
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               : !loading && (
//                   <div className="col-span-full text-center py-10">
//                     <i className="ri-information-line text-5xl text-gray-400"></i>
//                     <p className="text-gray-500 mt-3">
//                       Belum ada Data <b>Dosen</b>.
//                     </p>
//                   </div>
//                 )}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default DosenStaf;

// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import api from "../api";

// /* =========================
//    SKELETON CARD
// ========================= */
// const SkeletonCard = () => (
//   <div className="animate-pulse rounded-2xl overflow-hidden border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800">
//     <div className="h-64 bg-gradient-to-br from-slate-300 to-slate-200 dark:from-gray-700 dark:to-gray-800"></div>
//     <div className="p-5 space-y-3">
//       <div className="h-4 bg-slate-300 dark:bg-gray-700 rounded w-3/4"></div>
//       <div className="h-3 bg-slate-300 dark:bg-gray-700 rounded w-1/2"></div>
//       <div className="h-px bg-slate-300 dark:bg-gray-700 my-3"></div>
//       <div className="h-3 bg-slate-300 dark:bg-gray-700 rounded w-1/3"></div>
//     </div>
//   </div>
// );

// const DosenStaf = () => {
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

//   return (
//     <>
//       <Navbar />

//       <section className="pt-32 pb-24 min-h-screen px-5 md:px-10">
//         <div className="max-w-6xl mx-auto text-center">

//           {/* SUB TITLE */}
//           <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
//             Fakultas Keguruan dan Ilmu Pendidikan
//           </p>

//           {/* TITLE */}
//           <h1 className="text-3xl md:text-4xl font-extrabold dark:text-white mb-12">
//             <span className="font-light">Bertemu</span> Dosen & Staf  
//             <br />
//             <span className="font-light">Fakultas</span> FKIP UNBAJA
//           </h1>

//           {/* GRID */}
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

//             {loading &&
//               [...Array(8)].map((_, i) => <SkeletonCard key={i} />)}

//             {!loading && data.length > 0 &&
//               data.map((dosen, index) => (
//                 <div
//                   key={index}
//                   className="group relative rounded-2xl overflow-hidden
//                              border border-slate-200 dark:border-gray-700
//                              bg-white dark:bg-gray-800
//                              shadow-md hover:shadow-2xl
//                              transition-all duration-300 hover:-translate-y-2"
//                 >
//                   {/* FOTO */}
//                   <div className="relative h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800">
//                     <img
//                       src={
//                         dosen.photo
//                           ? `https://fkip-unbaja.dev-project.web.id/storage/${dosen.photo}`
//                           : "/default.jpg"
//                       }
//                       alt={dosen.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   </div>

//                   {/* BODY */}
//                   <div className="p-5 text-left">
//                     <h3 className="text-lg font-bold text-gray-800 dark:text-white leading-tight">
//                       {dosen.front_degree && `${dosen.front_degree} `}
//                       {dosen.name}
//                       {dosen.back_degree && `, ${dosen.back_degree}`}
//                     </h3>

//                     {/* JABATAN */}
//                     <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full 
//                                      bg-blue-100 text-blue-700 
//                                      dark:bg-blue-900 dark:text-blue-300">
//                       {dosen.position}
//                     </span>

//                     <div className="mt-4 h-px bg-slate-200 dark:bg-gray-700"></div>

//                     {/* NIDN */}
//                     <div className="mt-3 text-xs text-gray-600 dark:text-gray-300 flex items-center gap-2">
//                       <i className="ri-id-card-line"></i>
//                       <span>NIDN: {dosen.nidn || "-"}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//             {!loading && data.length === 0 && (
//               <div className="col-span-full text-center py-16">
//                 <i className="ri-information-line text-5xl text-gray-400"></i>
//                 <p className="text-gray-500 mt-4">
//                   Belum ada data <b>Dosen & Staf</b>.
//                 </p>
//               </div>
//             )}

//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default DosenStaf;

import React, { useEffect, useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";

/* =========================
   SKELETON CARD
========================= */
const SkeletonCard = () => (
  <div className="animate-pulse rounded-2xl overflow-hidden border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800">
    <div className="h-64 bg-gradient-to-br from-slate-300 to-slate-200 dark:from-gray-700 dark:to-gray-800"></div>
    <div className="p-5 space-y-3">
      <div className="h-4 bg-slate-300 dark:bg-gray-700 rounded w-3/4"></div>
      <div className="h-3 bg-slate-300 dark:bg-gray-700 rounded w-1/2"></div>
      <div className="h-px bg-slate-300 dark:bg-gray-700 my-3"></div>
      <div className="h-3 bg-slate-300 dark:bg-gray-700 rounded w-1/3"></div>
    </div>
  </div>
);

const DosenStaf = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  /* =========================
     SEARCH FILTER (OPTIMIZED)
  ========================= */
  const filteredData = useMemo(() => {
    const keyword = search.toLowerCase();
    return data.filter((dosen) =>
      [
        dosen.name,
        dosen.position,
        dosen.nidn,
        dosen.front_degree,
        dosen.back_degree,
      ]
        .join(" ")
        .toLowerCase()
        .includes(keyword)
    );
  }, [search, data]);

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-24 min-h-screen px-5 md:px-10">
        <div className="max-w-6xl mx-auto text-center">

          {/* SUB TITLE */}
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Fakultas Keguruan dan Ilmu Pendidikan
          </p>

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-extrabold dark:text-white mb-6">
            <span className="font-light">Bertemu</span> Dosen & Staf  
            <br />
            <span className="font-light">Fakultas</span> FKIP UNBAJA
          </h1>

          {/* SEARCH BAR */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama, jabatan, atau NIDN..."
                className="w-full pl-12 pr-12 py-3 rounded-full
                           bg-white dark:bg-gray-800
                           border border-slate-300 dark:border-gray-700
                           text-gray-700 dark:text-white
                           focus:ring-2 focus:ring-blue-500 focus:outline-none
                           transition"
              />

              {/* ICON SEARCH */}
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2
                             text-gray-400 text-lg"></i>

              {/* CLEAR BUTTON */}
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2
                             text-gray-400 hover:text-red-500 transition"
                >
                  <i className="ri-close-circle-line text-lg"></i>
                </button>
              )}
            </div>

            {/* INFO RESULT */}
            {!loading && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Menampilkan <b>{filteredData.length}</b> dari{" "}
                <b>{data.length}</b> data
              </p>
            )}
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {loading &&
              [...Array(8)].map((_, i) => <SkeletonCard key={i} />)}

            {!loading && filteredData.length > 0 &&
              filteredData.map((dosen, index) => (
                <div
                  key={index}
                  className="group rounded-2xl overflow-hidden
                             border border-slate-200 dark:border-gray-700
                             bg-white dark:bg-gray-800
                             shadow-md hover:shadow-2xl
                             transition-all duration-300 hover:-translate-y-2"
                >
                  {/* FOTO */}
                  <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800">
                    <img
                      src={
                        dosen.photo
                          ? `https://fkip-unbaja.dev-project.web.id/storage/${dosen.photo}`
                          : "/default.jpg"
                      }
                      alt={dosen.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* BODY */}
                  <div className="p-5 text-left">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white leading-tight">
                      {dosen.front_degree && `${dosen.front_degree} `}
                      {dosen.name}
                      {dosen.back_degree && `, ${dosen.back_degree}`}
                    </h3>

                    <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full
                                     bg-blue-100 text-blue-700
                                     dark:bg-blue-900 dark:text-blue-300">
                      {dosen.position}
                    </span>

                    <div className="mt-4 h-px bg-slate-200 dark:bg-gray-700"></div>

                    <div className="mt-3 text-xs text-gray-600 dark:text-gray-300 flex items-center gap-2">
                      <i className="ri-id-card-line"></i>
                      <span>NIDN: {dosen.nidn || "-"}</span>
                    </div>
                  </div>
                </div>
              ))}

            {!loading && filteredData.length === 0 && (
              <div className="col-span-full text-center py-16">
                <i className="ri-search-eye-line text-5xl text-gray-400"></i>
                <p className="text-gray-500 mt-4">
                  Data tidak ditemukan untuk kata kunci <b>"{search}"</b>
                </p>
              </div>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DosenStaf;
