// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// import api from "../api";

// const Skeleton = () => (
//   <div className="animate-pulse bg-white text-gray-800 p-8 md:p-12 rounded-xl shadow border border-gray-200">
//     {/* Skeleton Visi */}
//     <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
//     <div className="space-y-3 mb-8">
//       <div className="h-3 bg-gray-200 rounded w-full"></div>
//       <div className="h-3 bg-gray-200 rounded w-11/12"></div>
//       <div className="h-3 bg-gray-200 rounded w-10/12"></div>
//     </div>
//     {/* Skeleton Misi */}
//     <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div> {/* Judul Misi */}
//     <div className="space-y-3">
//       <div className="flex items-center space-x-2">
//         <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
//         <div className="h-3 bg-gray-200 rounded w-3/4"></div>
//       </div>
//       <div className="flex items-center space-x-2">
//         <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
//         <div className="h-3 bg-gray-200 rounded w-4/5"></div>
//       </div>
//       <div className="flex items-center space-x-2">
//         <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
//         <div className="h-3 bg-gray-200 rounded w-2/3"></div>
//       </div>
//       <div className="flex items-center space-x-2">
//         <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
//         <div className="h-3 bg-gray-200 rounded w-1/2"></div>
//       </div>
//     </div>
//   </div>
// );

// const VisiMisi = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     api
//       .get("/visi-misi")
//       .then((res) => {
//         setData(res.data.data);
//       })
//       .catch((err) => {
//         console.error("Gagal fetch API:", err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <div className="relative pt-32 pb-24 min-h-screen px-6 md:px-20">
//         <div className="absolute top-24 -left-10 opacity-30 animate-float-slow">
//           <svg width="180" height="180">
//             <circle cx="90" cy="90" r="75" fill="#0046FF" stroke="none" />
//           </svg>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
//             Visi & Misi
//           </p>
//           <h1 className="text-4xl md:text-4xl font-extrabold text-center text-gray-900 dark-mode-text mb-12">
//             FKIP <span className="font-[200]">UNIVERSITAS</span> BANTEN JAYA
//           </h1>

//           {loading ? (
//             <Skeleton />
//           ) : data ? (
//             <div className="space-y-8">
//               {/* Card Visi */}
//               <section className="bg-white p-6 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200">
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="Drawing d path for Eye icon..." />
//                       <circle cx="12" cy="12" r="3" strokeWidth="2" />
//                       <path strokeLinecap="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                     </svg>
//                   </div>
//                   <h2 className="text-3xl font-bold text-slate-800">Visi</h2>
//                 </div>
//                 <p className="text-xl leading-relaxed text-slate-600 italic font-medium border-l-4 border-blue-600 pl-6">
//                   "{data.visi}"
//                 </p>
//               </section>

//               {/* Card Misi */}
//               <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-200">
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                     </svg>
//                   </div>
//                   <h2 className="text-3xl font-bold text-slate-800">Misi</h2>
//                 </div>
                
//                 <div className="space-y-5">
//                   {data?.misi && (
//                     data.misi
//                       .split(/\d+\.\s*/g)
//                       .filter((item) => item.trim() !== "")
//                       .map((item, index) => (
//                         <div key={index} className="flex items-start group">
//                           <div className="flex-shrink-0 w-10 h-10 bg-slate-50 text-indigo-600 font-bold rounded-xl flex items-center justify-center mr-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
//                             {index + 1}
//                           </div>
//                           <p className="text-lg text-slate-600 pt-1 leading-relaxed">
//                             {item.trim()}
//                           </p>
//                         </div>
//                       ))
//                   )}
//                 </div>
//               </section>
//             </div>
//           ) : (
//             <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
//               <div className="text-6xl mb-4">Empty Icon...</div>
//               <p className="text-slate-400 text-lg">Belum ada data tersedia saat ini.</p>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default VisiMisi;

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import api from "../api";

const Skeleton = () => (
  <div className="animate-pulse bg-white text-gray-800 p-8 md:p-12 rounded-xl shadow border border-gray-200">
    {/* Skeleton Visi */}
    <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
    <div className="space-y-3 mb-8">
      <div className="h-3 bg-gray-200 rounded w-full"></div>
      <div className="h-3 bg-gray-200 rounded w-11/12"></div>
      <div className="h-3 bg-gray-200 rounded w-10/12"></div>
    </div>
    {/* Skeleton Misi */}
    <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div> {/* Judul Misi */}
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
        <div className="h-3 bg-gray-200 rounded w-4/5"></div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  </div>
);

const VisiMisi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get("/visi-misi")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.error("Gagal fetch API:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="relative pt-32 pb-24 min-h-screen px-6 md:px-20">
        <div className="absolute top-24 -left-10 opacity-30 animate-float-slow">
          <svg width="180" height="180">
            <circle cx="90" cy="90" r="75" fill="#0046FF" stroke="none" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Visi & Misi
          </p>
          <h1 className="text-4xl md:text-4xl font-extrabold text-center text-gray-900 dark-mode-text mb-12">
            FKIP <span className="font-[200]">UNIVERSITAS</span> BANTEN JAYA
          </h1>

          {loading ? (
            <Skeleton />
          ) : data ? (
            <div className="p-8 md:p-12 rounded-xl shadow border border-blue-400">
              <h2 className="text-2xl font-bold mb-4">Visi</h2>
              <p className="text-base mb-8 leading-relaxed">{data.visi}</p>

              <h2 className="text-2xl font-bold mb-4">Misi</h2>
              {data?.misi && (
                <ol className="list-decimal list-inside space-y-3">
                  {data.misi
                    .split(/\d+\.\s*/g)
                    .filter((item) => item.trim() !== "")
                    .map((item, index) => (
                      <li key={index}>{item.trim()}</li>
                    ))}
                </ol>
              )}
            </div>
          ) : (
            <div className="text-center py-10">
              <i className="ri-information-line text-5xl text-gray-400"></i>
              <p className="text-gray-500 mt-3">
                Belum ada data Visi Misi Sekolah.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VisiMisi;