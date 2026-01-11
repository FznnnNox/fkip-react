import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import api from "../api";

const SkeletonOrganisasi = () => {
  return (
    <div className="pt-32 pb-24 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="h-4 w-40 mx-auto bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
          <div className="h-8 w-72 mx-auto bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-3"></div>
          <div className="h-4 w-96 mx-auto bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 animate-pulse"
            >
              {/* Image skeleton */}
              <div className="h-72 w-full bg-gray-300 dark:bg-gray-700"></div>

              {/* Text skeleton */}
              <div className="p-5 space-y-3">
                <div className="h-3 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mt-4"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const Organisasi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/ukm-fkip")
      .then((res) => {
        setData(res.data.data || []);
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
      {loading && <SkeletonOrganisasi />}
      {!loading && data.length > 0 ? (
      <div className="pt-32 pb-24 min-h-screen px-5 md:px-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">

          {/* Header Section */}
          <header className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-indigo-400">
              Pengembangan Diri
            </span>
            <h1 className="text-4xl md:text-4xl font-extrabold mt-2 mb-4 leading-tight">
              ORGANISASI <span className="font-[200]">UNIVERSITAS</span> BANTEN JAYA 📚✨
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Ikuti minimal satu kegiatan penunjang untuk mengembangkan bakat
              dan minatmu. Universitas kami bangga dengan organisasi yang berprestasi.
            </p>
          </header>

          {/* Activity Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.map((data, index) => (
              <div
                key={index}
                className="group transform hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer rounded-2xl overflow-hidden 
                ring-2 ring-transparent shadow-xl hover:shadow-2xl hover:ring-blue-200 dark:hover:ring-blue-400"
              >
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <img
                      src={
                        data.image
                          ? `https://fkip-unbaja.dev-project.web.id/storage/${data.image}`
                          : "/default.jpg"
                      }
                      alt={data.title}
                      className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="p-5 text-left">
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider mb-1
                    ${
                      data.category === "Ekskul"
                        ? "text-green-600 dark:text-green-400"
                        : "text-blue-600 dark:text-blue-400"
                    }`}
                  >
                    {data.category}
                  </p>

                  <h3 className="text-xl font-bold mb-1">{data.name}</h3>

                  <div className="flex justify-between items-center mt-3">
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-indigo-300 transition-colors">
                      Lihat Detail →
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
      ) : (
        !loading && (
          <div className="text-center py-10">
            <i className="ri-information-line text-5xl text-gray-400"></i>
            <p className="text-gray-500 mt-3">Belum ada Banner PPDB.</p>
          </div>
        )
      )}

      <Footer />
    </>
  );
};

export default Organisasi;
