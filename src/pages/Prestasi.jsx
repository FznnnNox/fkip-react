import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";

const Prestasi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    api
      .get("/prestation")
      .then((res) => {
        setData(res.data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal fetch API:", err);
        setLoading(false);
      });
  }, []);

  // Filter data sesuai kategori
  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  const categories = ["All", "Akademik", "Non Akademik"];

  // Skeleton component
  const SkeletonPrestasi = () => (
    <div className="pt-32 min-h-screen px-5 md:px-10 animate-pulse">
      <div className="max-w-6xl mx-auto">
        {/* judul */}
        <div className="h-12 bg-gray-300 rounded w-2/5 mb-4"></div>
        {/* deskripsi */}
        <div className="h-4 bg-gray-300 rounded w-1/3 mb-10"></div>
        {/* filter */}
        <div className="flex gap-4 mb-10">
          <div className="h-6 bg-gray-300 rounded w-16"></div>
          <div className="h-6 bg-gray-300 rounded w-16"></div>
          <div className="h-6 bg-gray-300 rounded w-20"></div>
        </div>
        {/* grid prestasi */}
        <div className="grid md:grid-cols-2 gap-10">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="w-full h-48 bg-gray-300 rounded"></div>{" "}
              {/* image */}
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>{" "}
              {/* kategori */}
              <div className="h-5 bg-gray-300 rounded w-3/4"></div>{" "}
              {/* judul */}
              <div className="h-3 bg-gray-300 rounded w-full"></div>{" "}
              {/* deskripsi */}
              <div className="h-3 bg-gray-300 rounded w-5/6"></div>{" "}
              {/* deskripsi */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />

      {loading ? (
        <SkeletonPrestasi />
      ) : (
        <div className="pt-32 pb-24 min-h-screen px-5 md:px-10">
          <div className="max-w-6xl mx-auto">
            {/* Judul */}
            <h1 className="text-5xl md:text-4xl font-extrabold text-left dark:text-white mb-6">
              PRESTASI DI <span className="font-[200]">FAKULTAS</span> FKIP
            </h1>
            <p className="text-sm text-left dark:text-gray-300 mb-10 max-w-lg">
              Sebuah dokumentasi dari berbagai jenis prestasi yang berhasil
              diraih di Sekolah kami.
            </p>

            {/* Filter */}
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

            {/* Grid Prestasi */}
            {filteredData.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-10">
                {filteredData.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="w-full overflow-hidden">
                      <img
                        src={
                          item.image
                            ? `https://fkip-ubj.dev-project.biz.id/storage/${item.image}`
                            : "/default.jpg"
                        }
                        alt={item.title}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="mt-3 text-xs text-orange-500 font-medium">
                      — {item.category}
                    </p>
                    <h2 className="text-lg font-semibold mt-1 dark:text-white">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Deskripsi Tambahan:
                    </p>
                    <br />
                    <div
                      className="text-sm text-gray-600 dark:text-gray-400"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <i className="ri-information-line text-5xl text-gray-400"></i>
                <p className="text-gray-500 mt-3">
                  Belum ada Prestasi di kategori ini.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Prestasi;
