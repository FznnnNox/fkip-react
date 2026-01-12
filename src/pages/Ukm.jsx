// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// import api from "../api";

// const SkeletonOrganisasi = () => {
//   return (
//     <div className="pt-32 pb-24 px-5 md:px-10">
//       <div className="max-w-7xl mx-auto">

//         {/* Header Skeleton */}
//         <div className="text-center mb-16">
//           <div className="h-4 w-40 mx-auto bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
//           <div className="h-8 w-72 mx-auto bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-3"></div>
//           <div className="h-4 w-96 mx-auto bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
//         </div>

//         {/* Grid Skeleton */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {[...Array(8)].map((_, i) => (
//             <div
//               key={i}
//               className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 animate-pulse"
//             >
//               {/* Image skeleton */}
//               <div className="h-72 w-full bg-gray-300 dark:bg-gray-700"></div>

//               {/* Text skeleton */}
//               <div className="p-5 space-y-3">
//                 <div className="h-3 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
//                 <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
//                 <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mt-4"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// const Organisasi = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     api
//       .get("/ukm-fkip")
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
//       {loading && <SkeletonOrganisasi />}
//       {!loading && data.length > 0 ? (
//       <div className="pt-32 pb-24 min-h-screen px-5 md:px-10 transition-colors duration-300">
//         <div className="max-w-7xl mx-auto">

//           {/* Header Section */}
//           <header className="text-center mb-16">
//             <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-indigo-400">
//               Pengembangan Diri
//             </span>
//             <h1 className="text-4xl md:text-4xl font-extrabold mt-2 mb-4 leading-tight">
//               ORGANISASI <span className="font-[200]">UNIVERSITAS</span> BANTEN JAYA 📚✨
//             </h1>
//             <p className="text-gray-500 max-w-2xl mx-auto">
//               Ikuti minimal satu kegiatan penunjang untuk mengembangkan bakat
//               dan minatmu. Universitas kami bangga dengan organisasi yang berprestasi.
//             </p>
//           </header>

//           {/* Activity Grid */}
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {data.map((data, index) => (
//               <div
//                 key={index}
//                 className="group transform hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer rounded-2xl overflow-hidden 
//                 ring-2 ring-transparent shadow-xl hover:shadow-2xl hover:ring-blue-200 dark:hover:ring-blue-400"
//               >
//                 {/* Image Section */}
//                 <div className="relative h-72 overflow-hidden">
//                   <img
//                       src={
//                         data.image
//                           ? `https://fkip-unbaja.dev-project.web.id/storage/${data.image}`
//                           : "/default.jpg"
//                       }
//                       alt={data.title}
//                       className="w-full h-full object-cover"
//                     />
//                 </div>

//                 {/* Text Content */}
//                 <div className="p-5 text-left">
//                   <p
//                     className={`text-xs font-semibold uppercase tracking-wider mb-1
//                     ${
//                       data.category === "Ekskul"
//                         ? "text-green-600 dark:text-green-400"
//                         : "text-blue-600 dark:text-blue-400"
//                     }`}
//                   >
//                     {data.category}
//                   </p>

//                   <h3 className="text-xl font-bold mb-1">{data.name}</h3>

//                   <div className="flex justify-between items-center mt-3">
//                     <p className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-indigo-300 transition-colors">
//                       Lihat Detail →
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-20 text-center">
//             <a
//               href="#"
//               className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 transform hover:translate-y-[-2px]"
//             >
//               Daftar Sekarang
//             </a>
//           </div>
//         </div>
//       </div>
//       ) : (
//         !loading && (
//           <div className="text-center py-10">
//             <i className="ri-information-line text-5xl text-gray-400"></i>
//             <p className="text-gray-500 mt-3">Belum ada Banner PPDB.</p>
//           </div>
//         )
//       )}

//       <Footer />
//     </>
//   );
// };

// export default Organisasi;
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";

/* =========================
   Skeleton Loader
========================= */
const SkeletonOrganisasi = () => (
  <section className="pt-32 pb-24 px-6 md:px-20">
    <div className="max-w-7xl mx-auto">
      {/* Header Skeleton */}
      <div className="text-center mb-16 space-y-4">
        <div className="h-4 w-40 mx-auto bg-gray-200 dark:bg-white/10 rounded animate-pulse"></div>
        <div className="h-10 w-80 mx-auto bg-gray-200 dark:bg-white/10 rounded animate-pulse"></div>
        <div className="h-4 w-96 mx-auto bg-gray-200 dark:bg-white/10 rounded animate-pulse"></div>
      </div>

      {/* Grid Skeleton */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-xl animate-pulse"
          >
            <div className="h-72 bg-gray-200 dark:bg-white/10"></div>
            <div className="p-5 space-y-3">
              <div className="h-3 w-24 bg-gray-200 dark:bg-white/10 rounded"></div>
              <div className="h-5 w-40 bg-gray-200 dark:bg-white/10 rounded"></div>
              <div className="h-4 w-28 bg-gray-200 dark:bg-white/10 rounded mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* =========================
   Main Component
========================= */
const Organisasi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/ukm-fkip")
      .then((res) => setData(res.data.data || []))
      .catch((err) => console.error("Gagal fetch API:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />

      {loading ? (
        <SkeletonOrganisasi />
      ) : data.length > 0 ? (
        <section className="relative pt-32 pb-24 px-6 md:px-20 overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-20 relative">
  {/* Badge */}
  <div className="flex justify-center mb-5">
    <span className="inline-flex items-center gap-2 px-5 py-1.5 text-xs font-semibold tracking-wider uppercase 
      text-blue-600 dark:text-blue-400 bg-blue-100/70 dark:bg-blue-900/40 rounded-full">
      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
      Pengembangan Diri
    </span>
  </div>

  {/* Title */}
  <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
    Organisasi{" "}
    <span className="font-light">
      Universitas{" "}
      <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
        Banten Jaya
      </span>
    </span>
  </h1>

  {/* Accent Line */}
  <div className="flex justify-center mt-6 mb-6">
    <span className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></span>
  </div>

  {/* Description */}
  <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
    Wadah pengembangan <span className="font-semibold ">
      minat, bakat, dan kepemimpinan mahasiswa
    </span>{" "}
    melalui organisasi yang aktif, inovatif, dan berprestasi.
  </p>
</div>


            {/* Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={
                        item.image
                          ? `https://fkip-unbaja.dev-project.web.id/storage/${item.image}`
                          : "/default.jpg"
                      }
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Category Badge */}
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md
                        ${
                          item.category === "Ekskul"
                            ? "bg-green-500/80 text-white"
                            : "bg-blue-500/80 text-white"
                        }`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {item.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                        Lihat Detail
                      </span>

                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-20 text-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-10 py-3 rounded-full text-base font-semibold text-white
                bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
              >
                Daftar Sekarang 🚀
              </a>
            </div>
          </div>
        </section>
      ) : (
        <div className="text-center py-24">
          <i className="ri-information-line text-5xl text-gray-400"></i>
          <p className="text-gray-500 mt-4">
            Belum ada data organisasi.
          </p>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Organisasi;
