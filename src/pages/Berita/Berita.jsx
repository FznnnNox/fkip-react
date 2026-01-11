import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import api from "../../api";

const NewsSkeleton = () => (
  <div className="flex h-full flex-col animate-pulse">
    {/* Thumbnail */}
    <div className="w-full h-44 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>

    {/* Title */}
    <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded mt-4 w-4/5"></div>

    {/* Date */}
    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mt-3 w-1/3"></div>

    {/* Category */}
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
      .then((res) => {
        setNews(res.data.data);
      })
      .catch((err) => {
        console.error("Gagal fetch News:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Logic Filter
  const categories = [
    "All",
    "Umum",
    "Pengumuman",
    "PMB",
    "Kegiatan",
    "Hari Peringatan",
  ];

  const filteredData =
    selectedCategory === "All"
      ? news
      : news.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() ===
              selectedCategory.toLowerCase()
        );

  return (
    <>
      <Navbar />

      <div className="pt-32 pb-24 min-h-screen dark:bg-gray-900 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Judul & Deskripsi */}
          <h1 className="text-5xl md:text-4xl font-extrabold text-left dark:text-white mb-6">
            BERITA <span className="font-[200]">FAKULTAS</span> FKIP
          </h1>
          <p className="text-sm text-left dark:text-gray-300 mb-10 max-w-lg">
            Papan informasi digital yang ditujukan untuk memberitahu informasi
            mengenai kegiatan Sekolah.
          </p>

          <div className="flex items-center gap-4 mb-10 text-sm">
              <span className="font-semibold text-gray-500 dark:text-gray-400">
                <i class="ri-equalizer-line text-xl"></i>
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded font-semibold transition-colors ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "text-gray-500 dark:text-gray-400 hover:text-blue-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          
          {loading ? (
            <div className="grid md:grid-cols-3 gap-10">
              {[...Array(6)].map((_, index) => (
                <NewsSkeleton key={index} />
              ))}
            </div>
          ) : filteredData.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-10">
              {filteredData.map((item, index) => (
                <div className="flex h-full flex-col" key={index}>
                <Link to={`/berita/detail/${item.id}`} className="block">
                  <div className="w-full overflow-hidden rounded-lg">
                    <img
                      src={`https://fkip-unbaja.dev-project.web.id/storage/${item.thumbnail}`}
                      alt={item.title}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <a href="#">
                    <h2 className="text-base capitalize font-[400] mt-4 dark:text-white hover:text-blue-600 transition">
                      {item.title}
                    </h2>
                  </a>
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
              <p className="text-gray-500 mt-3">Belum ada data berita yang dipublikasikan.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Berita;