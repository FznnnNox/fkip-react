// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// import Prestasi from "../../assets/prestasi1.jpg"

// import api from "../../api";

// // Komponen Skeleton Loading
// const ProdiSkeleton = () => (
//   <div className="pt-32 min-h-screen dark:bg-gray-900 px-6 md:px-20 animate-pulse">
//     <div className="max-w-7xl mx-auto">
//       {/* Header Skeleton */}
//       <div className="flex flex-col items-center mb-12">
//         <div className="h-4 bg-gray-200 dark:bg-gray-700 w-24 rounded mb-2"></div>
//         <div className="h-8 bg-gray-300 dark:bg-gray-600 w-64 rounded"></div>
//       </div>

//       {/* Logo Skeleton */}
//       <div className="flex justify-center mb-6">
//         <div className="w-[180px] h-[180px] bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
//       </div>

//       <div className="p-8 md:p-12 rounded-xl shadow border border-blue-400">
//         {/* Informasi Jurusan Skeleton */}
//         <div className="mb-12">
//           <div className="h-6 bg-gray-300 dark:bg-gray-600 w-48 rounded mb-4"></div>
//           <div className="space-y-3">
//             <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
//             <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-11/12"></div>
//             <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-10/12"></div>
//           </div>
//         </div>

//         {/* Dokumentasi Skeleton */}
//         <div className="mb-0">
//           <div className="h-6 bg-gray-300 dark:bg-gray-600 w-40 rounded mb-4"></div>
//           <div className="space-y-3">
//             <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
//             <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-9/12"></div>
//             <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const Prodi = () => {
//   const { slug } = useParams();
//   const [prodi, setProdi] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     api
//       .get(`/prodi/${slug}`)
//       .then((res) => {
//         setProdi(res.data.data);
//       })
//       .catch((err) => {
//         console.error("Error:", err);
//       })
//       .finally(() => setLoading(false));
//   }, [slug]);

//   if (loading)
//     return (
//       <>
//         <Navbar />
//         <ProdiSkeleton />
//         <Footer />
//       </>
//     );

//   if (!prodi)
//     return (
//       <>
//         <Navbar />
//         <ProdiSkeleton />
//         <Footer />
//       </>
//     );

//   return (
//     <>
//       <Navbar />

//       <div className="pt-32 min-h-screen dark:bg-gray-900 px-6 md:px-20">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
//             - Jurusan
//           </p>
//           <h1 className="uppercase text-3xl font-extrabold text-center mb-12 dark:text-white">
//             {prodi.prodi.name}
//           </h1>

//           {/* Logo */}
//           <div className="flex justify-center mb-6">
//             <img
//               src={
//                 prodi.logo
//                   ? `http://fkip-dash.test/storage/${prodi.logo}`
//                   : "/default.jpg"
//               }
//               alt="Logo Prodi"
//               className="w-[180px] bg-white p-4 rounded-xl object-contain"
//             />
//           </div>

//           <div className="p-8 md:p-12 rounded-xl shadow border border-blue-400 dark:bg-gray-800">
//             {/* Informasi */}
//             <div className="mb-12">
//               <h2 className="text-2xl font-bold mb-4 dark:text-white">
//                 Informasi Jurusan
//               </h2>
//               <div
//                 className="text-gray-300 dark:text-gray-300 leading-relaxed"
//                 dangerouslySetInnerHTML={{ __html: prodi.informasi }}
//               />
//             </div>

//             {/* Dokumentasi */}
//             <div className="mb-0">
//               <h2 className="text-2xl font-bold mb-4 dark:text-white">
//                 Dokumentasi
//               </h2>
//               <div
//                 className="text-gray-300 dark:text-gray-300 leading-relaxed"
//                 dangerouslySetInnerHTML={{ __html: prodi.documentation }}
//               />
//             </div>

//             <div className="prestasi">
//               <h2 className="text-2xl font-bold mb-4 dark:text-white">
//                 Prestasi
//               </h2>
//               <p className="text-gray-500 mb-8">Prestasi Jurusan {data.nama}</p>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                   <div
//                     className="overflow-hidden rounded-lg shadow dark:bg-gray-700"
//                   >
//                     <img
//                       src={Prestasi}
//                       alt="example"
//                       className="w-full h-60 object-cover"
//                     />
//                     <div className="p-5">
//                       <h3 className="text-lg font-bold dark:text-white">
//                         Example Prestasi
//                       </h3>
//                       <div className="w-10 h-[2px] bg-yellow-500 mt-1 mb-2"></div>
//                       <p className="text-gray-600 dark:text-gray-300 text-sm">
//                         Deskripsi
//                       </p>
//                     </div>
//                   </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Prodi;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import PrestasiImage from "../../assets/prestasi1.jpg";
import api from "../../api";

const ProdiSkeleton = () => (
  <div className="pt-32 min-h-screen dark:bg-gray-900 px-6 md:px-20 animate-pulse">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 w-24 rounded mb-2"></div>
        <div className="h-8 bg-gray-300 dark:bg-gray-600 w-64 rounded"></div>
      </div>

      <div className="flex justify-center mb-6">
        <div className="w-[180px] h-[180px] bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
      </div>

      <div className="p-8 md:p-12 rounded-xl shadow border border-blue-400">
        <div className="mb-12">
          <div className="h-6 bg-gray-300 dark:bg-gray-600 w-48 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-11/12"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-10/12"></div>
          </div>
        </div>

        <div className="mb-0">
          <div className="h-6 bg-gray-300 dark:bg-gray-600 w-40 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-9/12"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Prodi = () => {
  const { slug } = useParams();
  const [prodi, setProdi] = useState(null);
  const [prestasi, setPrestasi] = useState([]); // ← PRESTASI
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/prodi/${slug}`)
      .then((res) => {
        setProdi(res.data.data);

        if (res.data.data.prodi?.prestations) {
          setPrestasi(res.data.data.prodi.prestations);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading || !prodi)
    return (
      <>
        <Navbar />
        <ProdiSkeleton />
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />

      <div className="pt-32 pb-24 min-h-screen px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
            - Jurusan
          </p>
          <h1 className="uppercase text-3xl font-extrabold text-center mb-12 dark:text-white">
            {prodi.prodi.name}
          </h1>

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={
                prodi.logo
                  ? `https://fkip-unbaja.dev-project.web.id/storage/${prodi.logo}`
                  : "/default.jpg"
              }
              alt="Logo Prodi"
              className="w-[180px] bg-white p-4 rounded-xl object-contain"
            />
          </div>

          {/* Card Utama */}
          <div className="p-8 md:p-12 rounded-xl shadow border border-blue-400 dark:bg-gray-800">
            {/* Informasi */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                Informasi Jurusan
              </h2>
              <div
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: prodi.informasi }}
              />
            </div>

            {/* Dokumentasi */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                Dokumentasi
              </h2>
              <div
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: prodi.documentation }}
              />
            </div>

            {/* ==================== PRESTASI ===================== */}
            <div className="prestasi mb-4">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                Prestasi
              </h2>
              <p className="text-gray-500 mb-8">
                Prestasi Jurusan {prodi.prodi.name}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Jika prestasi ada */}
                {prestasi.length > 0 ? (
                  prestasi.map((p) => (
                    <div
                      key={p.id}
                      className="overflow-hidden rounded-lg shadow dark:bg-gray-700"
                    >
                      <img
                        src={`https://fkip-unbaja.dev-project.web.id/storage/${p.image}`}
                        alt={p.title}
                        className="w-full h-62 object-cover"
                      />
                      <div className="p-5">
                        <h3 className="text-lg font-bold dark:text-white">
                          {p.title}
                        </h3>
                        <div className="w-10 h-[2px] bg-yellow-500 mt-1 mb-2"></div>
                        <div
                          className="text-gray-300 text-sm"
                          dangerouslySetInnerHTML={{ __html: p.description }}
                        ></div>
                      </div>
                    </div>
                  ))
                ) : (
                  // Jika tidak ada prestasi
                  <p className="text-gray-400 text-sm">
                    Belum ada prestasi untuk jurusan ini.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Prodi;
