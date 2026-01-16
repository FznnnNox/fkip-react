// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// import api from "../api"

// const Beasiswa = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//       api
//         .get("/beasiswa")
//         .then((res) => {
//           setData(res.data.data || []);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error("Gagal fetch API:", err);
//           setLoading(false);
//         });
//     }, []);

//     const getStatus = (start, end) => {
//       const now = new Date();
//       if (!start || !end) return "Tidak Aktif";
//       if (now >= new Date(start) && now <= new Date(end)) return "Dibuka";
//       return "Ditutup";
//     };

//   return (
//     <>
//       <Navbar />

//       <div className="pt-32 pb-24 min-h-screen px-6 md:px-20">
//         <div className="max-w-6xl mx-auto">
//           <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
//             Fakultas Keguruan dan Ilmu Pendidikan
//           </p>

//           <h1 className="text-4xl font-extrabold text-center dark:text-white mb-12">
//             PUSAT <span className="font-[200]">INFORMASI</span> BEASISWA
//           </h1>

//           {loading ? (
//             <p className="text-center text-gray-500">Memuat data...</p>
//           ) : data.length === 0 ? (
//             <p className="text-center text-gray-500">
//               Belum ada data beasiswa
//             </p>
//           ) : (
//             <div className="grid gap-10 md:grid-cols-2">
//               {data.map((item) => {
//                 const status = getStatus(
//                   item.start_date,
//                   item.end_date
//                 );

//                 return (
//                   <div
//                     key={item.id}
//                     className="border-blue-600 border rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
//                   >
//                     <h3 className="text-xl font-bold mb-2">
//                       {item.title}
//                     </h3>

//                     {/* DESKRIPSI DARI RICHEDITOR */}
//                     <div
//                       className="text-gray-400 dark:text-gray-300 text-sm mb-4"
//                       dangerouslySetInnerHTML={{
//                         __html: item.description,
//                       }}
//                     />

//                     <span
//                       className={`inline-block text-sm font-semibold px-4 py-1 rounded-full mb-5
//                         ${
//                           status === "Dibuka"
//                             ? "bg-green-100 text-green-600"
//                             : status === "Ditutup"
//                             ? "bg-red-100 text-red-600"
//                             : "bg-gray-100 text-gray-600"
//                         }`}
//                     >
//                       Status: {status}
//                     </span>

//                     <div className="flex items-center gap-3">
//                       <button className="px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition text-sm">
//                         Lihat Detail
//                       </button>

//                       {status === "Dibuka" && (
//                         <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition text-sm">
//                           Daftar Sekarang
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Beasiswa;
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";

/* =========================
   Skeleton Loader
========================= */
const SkeletonBeasiswa = () => (
  <div className="grid gap-10 md:grid-cols-2">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="animate-pulse backdrop-blur-xl bg-white/70 dark:bg-white/5 
        border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl p-6"
      >
        <div className="h-5 w-3/4 bg-gray-200 dark:bg-white/10 rounded mb-3"></div>
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-200 dark:bg-white/10 rounded"></div>
          <div className="h-3 w-5/6 bg-gray-200 dark:bg-white/10 rounded"></div>
          <div className="h-3 w-4/6 bg-gray-200 dark:bg-white/10 rounded"></div>
        </div>

        <div className="h-6 w-32 bg-gray-200 dark:bg-white/10 rounded-full mb-5"></div>

        <div className="flex gap-3">
          <div className="h-9 w-28 bg-gray-200 dark:bg-white/10 rounded-lg"></div>
          <div className="h-9 w-36 bg-gray-200 dark:bg-white/10 rounded-lg"></div>
        </div>
      </div>
    ))}
  </div>
);

/* =========================
   Main Component
========================= */
const Beasiswa = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/beasiswa")
      .then((res) => setData(res.data.data || []))
      .catch((err) => console.error("Gagal fetch API:", err))
      .finally(() => setLoading(false));
  }, []);

  const getStatus = (start, end) => {
    const now = new Date();
    if (!start || !end) return "Tidak Aktif";
    if (now >= new Date(start) && now <= new Date(end)) return "Dibuka";
    return "Ditutup";
  };

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-24 min-h-screen px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1 text-xs font-semibold tracking-wider uppercase 
              text-blue-600 dark:text-blue-400 bg-blue-100/70 dark:bg-blue-900/40 rounded-full mb-4">
              🎓 Fakultas Keguruan dan Ilmu Pendidikan
            </span>

            <h1 className="text-3xl md:text-4xl font-extrabold">
              Pusat <span className="font-light">Informasi</span>{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Beasiswa
              </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
              Informasi resmi berbagai program beasiswa yang tersedia untuk
              mendukung prestasi dan pengembangan mahasiswa FKIP.
            </p>
          </div>

          {/* Content */}
          {loading ? (
            <SkeletonBeasiswa />
          ) : data.length === 0 ? (
            <div className="text-center py-16">
              <i className="ri-information-line text-5xl text-gray-400"></i>
              <p className="text-gray-500 mt-4">
                Belum ada informasi beasiswa.
              </p>
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2">
              {data.map((item) => {
                const status = getStatus(
                  item.start_date,
                  item.end_date
                );

                return (
                  <div
                    key={item.id}
                    className="group backdrop-blur-xl  
                    border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl 
                    hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <div
                        className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4"
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      />

                      {/* Status */}
                      <span
                        className={`inline-block text-xs font-semibold px-4 py-1 rounded-full mb-6
                          ${
                            status === "Dibuka"
                              ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                              : status === "Ditutup"
                              ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                              : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                          }`}
                      >
                        Status: {status}
                      </span>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-3">
                        <a href="https://spmb.unbaja.ac.id/" target="_blank" className="px-4 py-2 border border-blue-600 text-blue-600 
                          dark:border-blue-400 dark:text-blue-400 font-medium rounded-lg 
                          hover:bg-blue-50 dark:hover:bg-blue-900/20 transition text-sm">
                          Lihat Detail
                        </a>

                        {status === "Dibuka" && (
                          <a href="https://spmb.unbaja.ac.id/" target="_blank" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 
                            text-white font-medium rounded-lg shadow 
                            hover:shadow-lg transition text-sm">
                            Daftar Sekarang
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Beasiswa;
