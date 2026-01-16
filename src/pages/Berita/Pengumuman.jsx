// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import api from "../../api";

// // Skeleton Card
// const AnnouncementSkeleton = () => (
//   <div className="flex h-full flex-col animate-pulse">
//     <div className="w-full h-44 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
//     <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded mt-4 w-4/5"></div>
//     <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mt-3 w-1/3"></div>
//     <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mt-2 w-1/4"></div>
//   </div>
// );

// const Pengumuman = () => {
//   const [announcement, setAnnouncement] = useState([]);
//   const [loading, setLoading] = useState(true); 

//   useEffect(() => {
//     api
//       .get("/announcement")
//       .then((res) => {
//         setAnnouncement(res.data.data);
//       })
//       .catch((err) => {
//         console.error("Gagal fetch Announcement:", err);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   const categories = [
//     "All",
//     "General",
//     "PMB",
//     "Umum",
//   ];

//   const filteredData =
//     selectedCategory === "All"
//       ? news
//       : news.filter(
//           (item) =>
//             item.category &&
//             item.category.toLowerCase() === selectedCategory.toLowerCase()
//         );

//   return (
//     <>
//       <Navbar />

//       <div className="pt-32 pb-24 min-h-screen dark:bg-gray-900 px-5 md:px-10">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-5xl md:text-4xl font-extrabold text-left dark:text-white mb-6">
//             PENGUMUMAN <span className="font-[200]">FAKULTAS</span> FKIP
//           </h1>
//           <p className="text-sm text-left dark:text-gray-300 mb-10 max-w-lg">
//             Memberi informasi mengenai pengumuman Sekolah.
//           </p>

//           <div className="mb-12">
//             <div
//               className="
//       flex items-center gap-3
//       overflow-x-auto
//       md:flex-wrap
//       scrollbar-hide
//       py-3 px-3
//       rounded-2xl
//       bg-white/70 dark:bg-gray-800/70
//       backdrop-blur-lg
//       border border-slate-200 dark:border-gray-700
//       shadow-sm
//     "
//             >
//               {/* ICON */}
//               <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 shrink-0 pr-2">
//                 <i className="ri-filter-3-line text-xl"></i>
//                 <span className="font-semibold text-sm">Filter</span>
//               </div>

//               {/* CATEGORIES */}
//               {categories.map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`
//           relative shrink-0
//           px-5 py-2
//           rounded-full
//           text-sm font-semibold
//           transition-all duration-300
//           ${
//             selectedCategory === cat
//               ? `
//                 text-white
//                 bg-gradient-to-r from-blue-600 to-indigo-600
//                 shadow-lg shadow-blue-500/30
//                 scale-[1.05]
//               `
//               : `
//                 text-gray-600 dark:text-gray-300
//                 bg-white dark:bg-gray-900
//                 hover:bg-blue-50 dark:hover:bg-gray-700
//                 hover:text-blue-600
//               `
//           }
//         `}
//                 >
//                   {cat}

//                   {/* ACTIVE DOT */}
//                   {selectedCategory === cat && (
//                     <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></span>
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {loading ? (
//             <div className="grid md:grid-cols-3 gap-10">
//               {Array.from({ length: 6 }).map((_, index) => (
//                 <AnnouncementSkeleton key={index} />
//               ))}
//             </div>
//           ) : announcement.length > 0 ? (
//             <div className="grid md:grid-cols-3 gap-10">
//               {announcement.map((item, index) => (
//                 <div className="flex h-full flex-col" key={index}>
//                   <div className="w-full overflow-hidden rounded-sm">
//                     <img
//                       src={`https://fkip-unbaja.dev-project.web.id/storage/${item.thumbnail}`}
//                       alt={item.title}
//                       className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>

//                   {/* <a href="#">
//                     <h2 className="text-lg font-semibold mt-4 dark:text-white hover:text-blue-600 transition">
//                       {item.title}
//                     </h2>
//                   </a> */}
//                   <Link to={`/berita/berita-fkip/pengumuman/${item.id}`}>
//   <h2 className="text-lg font-semibold mt-4 hover:text-blue-600 transition">
//     {item.title}
//   </h2>
// </Link>


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
//               <p className="text-gray-500 mt-3">Belum ada data pengumuman yang dipublikasikan.</p>
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Pengumuman;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import api from "../../api";

// Skeleton Card
const AnnouncementSkeleton = () => (
  <div className="flex h-full flex-col animate-pulse">
    <div className="w-full h-44 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
    <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded mt-4 w-4/5"></div>
    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mt-3 w-1/3"></div>
    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mt-2 w-1/4"></div>
  </div>
);

const Pengumuman = () => {
  const [announcement, setAnnouncement] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    api
      .get("/announcement")
      .then((res) => {
        setAnnouncement(res.data.data || []);
      })
      .catch((err) => {
        console.error("Gagal fetch Announcement:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const categories = ["All", "Umum", "Akademik", "PMB", "Kemahasiswaan", "Beasiswa", "Hari Peringatan"];

  // FILTER DATA
  const filteredData =
    selectedCategory === "All"
      ? announcement
      : announcement.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <>
      <Navbar />

      <div className="pt-32 pb-24 min-h-screen dark:bg-gray-900 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-4xl font-extrabold text-left dark:text-white mb-6">
            PENGUMUMAN <span className="font-[200]">FAKULTAS</span> FKIP
          </h1>

          <p className="text-sm text-left dark:text-gray-300 mb-10 max-w-lg">
            Memberi informasi mengenai pengumuman Fakultas FKIP.
          </p>

          {/* FILTER */}
          <div className="mb-12">
            <div className="flex items-center gap-3 overflow-x-auto md:flex-wrap scrollbar-hide py-3 px-3 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-slate-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 shrink-0 pr-2">
                <i className="ri-filter-3-line text-xl"></i>
                <span className="font-semibold text-sm">Filter</span>
              </div>

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                    ${
                      selectedCategory === cat
                        ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 scale-[1.05]"
                        : "text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600"
                    }`}
                >
                  {cat}
                  {selectedCategory === cat && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          {loading ? (
            <div className="grid md:grid-cols-3 gap-10">
              {Array.from({ length: 6 }).map((_, index) => (
                <AnnouncementSkeleton key={index} />
              ))}
            </div>
          ) : filteredData.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-10">
              {filteredData.map((item) => (
                <div className="flex h-full flex-col" key={item.id}>
                  <div className="w-full overflow-hidden rounded-sm">
                    <img
                      src={`https://fkip-ubj.dev-project.biz.id/storage/${item.thumbnail}`}
                      alt={item.title}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <Link
                    to={`/berita/berita-fkip/pengumuman/${item.id}`}
                    className="mt-4"
                  >
                    <h2 className="text-lg font-semibold hover:text-blue-600 transition dark:text-white">
                      {item.title}
                    </h2>
                  </Link>

                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-3">
                    <span>
                      <i className="ri-calendar-event-fill"></i>{" "}
                      {new Date(item.created_at).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
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
            <div className="text-center py-10">
              <i className="ri-information-line text-5xl text-gray-400"></i>
              <p className="text-gray-500 mt-3">
                Belum ada data pengumuman yang dipublikasikan.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pengumuman;
