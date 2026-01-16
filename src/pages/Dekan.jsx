// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// import api from "../api"; 

// const SkeletonDekan = () => (
//   <div className="pt-32 min-h-screen dark:bg-gray-900 px-6 md:px-20">
//     <div className="max-w-5xl mx-auto animate-pulse">
//       <div className="h-4 w-72 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-4"></div>
//       <div className="h-8 w-96 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-10"></div>

//       <div className="p-8 md:p-12 rounded-xl shadow border border-gray-200 bg-white dark:bg-gray-800">
//         <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>

//         <div className="space-y-4">
//           <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
//           <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-700 rounded"></div>
//           <div className="h-4 w-10/12 bg-gray-200 dark:bg-gray-700 rounded"></div>
//           <div className="h-4 w-9/12 bg-gray-200 dark:bg-gray-700 rounded"></div>
//           <div className="h-4 w-8/12 bg-gray-200 dark:bg-gray-700 rounded"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const Dekan = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//       api
//         .get("/dekan-welcome")
//         .then((res) => {
//           setData(res.data.data[0]);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error("Gagal fetch API:", err);
//           setLoading(false);
//         });
//     }, []);

//   return (
//     <>
//       <Navbar />
//       {loading && <SkeletonDekan />}
//       {!loading && data ? (
//         <div className="pt-32 pb-24 min-h-screen px-6 md:px-20">
//           <div className="max-w-5xl mx-auto">
//             <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
//               DEKAN FKIP UNIVERSITAS BANTEN JAYA
//             </p>
//             <h1 className="text-2xl md:text-2xl font-extrabold text-center text-gray-900 dark-mode-text mb-12">
//               {data.name}
//             </h1>

//             <div className="p-8 md:p-12 rounded-xl shadow border border-blue-400">
//               <h2 className="text-2xl font-bold mb-4">Kata Sambutan</h2>
//               <div
//                 className="text-base leading-relaxed space-y-4"
//                 dangerouslySetInnerHTML={{ __html: data.content }}
//               />
//             </div>
//           </div>
//         </div>
//       ) : (
//         !loading && (
//           <div className="text-center py-10">
//             <i className="ri-information-line text-5xl text-gray-400"></i>
//             <p className="text-gray-500 mt-3">
//               Belum ada kata sambutan Kepala Sekolah.
//             </p>
//           </div>
//         )
//       )}
//       <Footer />
//     </>
//   );
// };

// export default Dekan;

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";

/* =======================
   Skeleton Loading
======================= */
const SkeletonDekan = () => (
  <div className="pt-28 pb-20 min-h-screen px-4 sm:px-6 md:px-20">
    <div className="max-w-5xl mx-auto animate-pulse">
      <div className="h-4 w-56 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-3"></div>
      <div className="h-7 w-72 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-10"></div>

      <div className="p-6 sm:p-8 md:p-12 rounded-xl shadow-md border border-gray-200 bg-white dark:bg-gray-800">
        <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>

        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-10/12 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-9/12 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

/* =======================
   Main Component
======================= */
const Dekan = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/dekan-welcome")
      .then((res) => {
        setData(res.data.data[0]);
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

      {loading && <SkeletonDekan />}

      {!loading && data ? (
        <div className="pt-28 pb-20 min-h-screen px-4 sm:px-6 md:px-20">
          <div className="max-w-5xl mx-auto">
            
            {/* Heading */}
            <p className="text-center text-blue-600 dark:text-blue-400 font-semibold text-sm md:text-base mb-2">
              Dekan FKIP Universitas Banten Jaya
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark-mode-text mb-10 leading-tight">
              {data.name}
            </h1>

            {/* Content Card */}
            <div className="p-6 sm:p-8 md:p-12 rounded-xl shadow-md border border-blue-300 bg-white dark:bg-gray-800">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Kata Sambutan
              </h2>

              <div
                className="text-sm sm:text-base leading-7 sm:leading-8 space-y-4 text-gray-700 dark:text-gray-200"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
            </div>
          </div>
        </div>
      ) : (
        !loading && (
          <div className="text-center py-20">
            <i className="ri-information-line text-5xl text-gray-400"></i>
            <p className="text-gray-500 mt-3 text-sm sm:text-base">
              Belum ada kata sambutan Dekan.
            </p>
          </div>
        )
      )}

      <Footer />
    </>
  );
};

export default Dekan;
