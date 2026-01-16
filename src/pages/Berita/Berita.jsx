// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// import api from "../../api";

// const NewsSkeleton = () => (
//   <div className="flex h-full flex-col animate-pulse">
//     {/* Thumbnail */}
//     <div className="w-full h-44 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>

//     {/* Title */}
//     <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded mt-4 w-4/5"></div>

//     {/* Date */}
//     <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mt-3 w-1/3"></div>

//     {/* Category */}
//     <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mt-2 w-1/4"></div>
//   </div>
// );

// const Berita = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   useEffect(() => {
//     api
//       .get("/news")
//       .then((res) => {
//         setNews(res.data.data);
//       })
//       .catch((err) => {
//         console.error("Gagal fetch News:", err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   // Logic Filter
//   const categories = [
//     "All",
//     "Umum",
//     "Pengumuman",
//     "PMB",
//     "Kegiatan",
//     "Hari Peringatan",
//   ];

//   const filteredData =
//     selectedCategory === "All"
//       ? news
//       : news.filter(
//           (item) =>
//             item.category &&
//             item.category.toLowerCase() ===
//               selectedCategory.toLowerCase()
//         );

//   return (
//     <>
//       <Navbar />

//       <div className="pt-32 pb-24 min-h-screen dark:bg-gray-900 px-5 md:px-10">
//         <div className="max-w-6xl mx-auto">
//           {/* Judul & Deskripsi */}
//           <h1 className="text-5xl md:text-4xl font-extrabold text-left dark:text-white mb-6">
//             BERITA <span className="font-[200]">FAKULTAS</span> FKIP
//           </h1>
//           <p className="text-sm text-left dark:text-gray-300 mb-10 max-w-lg">
//             Papan informasi digital yang ditujukan untuk memberitahu informasi
//             mengenai kegiatan Sekolah.
//           </p>

//           <div className="flex items-center gap-4 mb-10 text-sm">
//               <span className="font-semibold text-gray-500 dark:text-gray-400">
//                 <i class="ri-equalizer-line text-xl"></i>
//               </span>
//               {categories.map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-3 py-1 rounded font-semibold transition-colors ${
//                     selectedCategory === cat
//                       ? "bg-blue-600 text-white"
//                       : "text-gray-500 dark:text-gray-400 hover:text-blue-500"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>

//           {loading ? (
//             <div className="grid md:grid-cols-3 gap-10">
//               {[...Array(6)].map((_, index) => (
//                 <NewsSkeleton key={index} />
//               ))}
//             </div>
//           ) : filteredData.length > 0 ? (
//             <div className="grid md:grid-cols-3 gap-10">
//               {filteredData.map((item, index) => (
//                 <div className="flex h-full flex-col" key={index}>
//                 <Link to={`/berita/detail/${item.id}`} className="block">
//                   <div className="w-full overflow-hidden rounded-lg">
//                     <img
//                       src={`https://fkip-unbaja.dev-project.web.id/storage/${item.thumbnail}`}
//                       alt={item.title}
//                       className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>

//                   <a href="#">
//                     <h2 className="text-base capitalize font-[400] mt-4 dark:text-white hover:text-blue-600 transition">
//                       {item.title}
//                     </h2>
//                   </a>
//                 </Link>
//                   <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-3">
//                     <span>
//                       <i className="ri-calendar-event-fill"></i>{" "}
//                       {new Date(item.created_at).toLocaleDateString("id-ID", {
//                         year: "numeric",
//                         month: "long",
//                         day: "numeric",
//                       })}
//                     </span>

//                     {item.category && (
//                       <>
//                         <span>•</span>
//                         <span>{item.category}</span>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-10">
//               <i className="ri-information-line text-5xl text-gray-400"></i>
//               <p className="text-gray-500 mt-3">Belum ada data berita yang dipublikasikan.</p>
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Berita;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import api from "../../api";

const NewsSkeleton = () => (
  <div className="flex h-full flex-col animate-pulse">
    <div className="w-full h-44 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
    <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded mt-4 w-4/5"></div>
    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mt-3 w-1/3"></div>
    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mt-2 w-1/4"></div>
  </div>
);

const Berita = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    api
      .get("/news")
      .then((res) => setNews(res.data.data))
      .catch((err) => console.error("Gagal fetch News:", err))
      .finally(() => setLoading(false));
  }, []);

  const categories = [
    "All",
    "Umum",
    "Kegiatan",
    "PMB",
    "Prestasi",
    "Hari Peringatan",
  ];

  const filteredData =
    selectedCategory === "All"
      ? news
      : news.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <>
      <Navbar />

      <div className="pt-32 pb-24 min-h-screen px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <h1 className="text-4xl md:text-4xl font-extrabold dark:text-white mb-4">
            BERITA <span className="font-light">FAKULTAS</span> FKIP
          </h1>
          <p className="text-sm dark:text-gray-300 mb-8 max-w-lg">
            Papan informasi digital untuk menyampaikan kegiatan dan pengumuman.
          </p>

          <div className="mb-12">
            <div
              className="
      flex items-center gap-3
      overflow-x-auto
      md:flex-wrap
      scrollbar-hide
      py-3 px-3
      rounded-2xl
      bg-white/70 dark:bg-gray-800/70
      backdrop-blur-lg
      border border-slate-200 dark:border-gray-700
      shadow-sm
    "
            >
              {/* ICON */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 shrink-0 pr-2">
                <i className="ri-filter-3-line text-xl"></i>
                <span className="font-semibold text-sm">Filter</span>
              </div>

              {/* CATEGORIES */}
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
          relative shrink-0
          px-5 py-2
          rounded-full
          text-sm font-semibold
          transition-all duration-300
          ${
            selectedCategory === cat
              ? `
                text-white
                bg-gradient-to-r from-blue-600 to-indigo-600
                shadow-lg shadow-blue-500/30
                scale-[1.05]
              `
              : `
                text-gray-600 dark:text-gray-300
                bg-white dark:bg-gray-900
                hover:bg-blue-50 dark:hover:bg-gray-700
                hover:text-blue-600
              `
          }
        `}
                >
                  {cat}

                  {/* ACTIVE DOT */}
                  {selectedCategory === cat && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          {loading ? (
            <div className="grid md:grid-cols-3 gap-10">
              {[...Array(6)].map((_, i) => (
                <NewsSkeleton key={i} />
              ))}
            </div>
          ) : filteredData.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-10">
              {filteredData.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <Link to={`/berita/detail/${item.id}`}>
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={`https://fkip-ubj.dev-project.biz.id/storage/${item.thumbnail}`}
                        alt={item.title}
                        className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                      />
                    </div>

                    <h2 className="text-base font-normal mt-4 dark:text-white hover:text-blue-600 transition">
                      {item.title}
                    </h2>
                  </Link>

                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-3">
                    <span className="flex items-center gap-1">
                      <i className="ri-calendar-event-fill"></i>
                      {new Date(item.created_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>

                    {item.category && (
                      <>
                        <span>•</span>
                        <span>{item.category}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <i className="ri-information-line text-5xl text-gray-400"></i>
              <p className="text-gray-500 mt-3">
                Belum ada data berita yang dipublikasikan.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Berita;
