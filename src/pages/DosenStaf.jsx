import React, { useEffect, useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";

const SkeletonCard = () => (
  <div className="animate-pulse rounded-2xl overflow-hidden border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800">
    <div className="h-64 bg-gradient-to-br from-slate-300 to-slate-200 dark:from-gray-700 dark:to-gray-800"></div>
    <div className="p-5 space-y-3">
      <div className="h-4 bg-slate-300 dark:bg-gray-700 rounded w-3/4"></div>
      <div className="h-3 bg-slate-300 dark:bg-gray-700 rounded w-1/2"></div>
      <div className="h-px bg-slate-300 dark:bg-gray-700 my-3"></div>
      <div className="h-3 bg-slate-300 dark:bg-gray-700 rounded w-1/3"></div>
    </div>
  </div>
);

const DosenStaf = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    api
      .get("/dosen-staf")
      .then((res) => {
        setData(res.data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal fetch API:", err);
        setLoading(false);
      });
  }, []);

  /** FILTER DATA */
  const filteredData = useMemo(() => {
    const keyword = search.toLowerCase();
    return data.filter((dosen) =>
      [
        dosen.name,
        dosen.position,
        dosen.nidn,
        dosen.front_degree,
        dosen.back_degree,
      ]
        .join(" ")
        .toLowerCase()
        .includes(keyword)
    );
  }, [search, data]);

  /** DATA YANG DITAMPILKAN */
  const visibleData = useMemo(() => {
    return filteredData.slice(0, visibleCount);
  }, [filteredData, visibleCount]);

  /** RESET JUMLAH SAAT SEARCH */
  useEffect(() => {
    setVisibleCount(8);
  }, [search]);

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-24 min-h-screen px-5 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* BADGE */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              <i className="ri-team-line"></i>
              Fakultas Keguruan & Ilmu Pendidikan
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl mb-4 font-extrabold">
            Bertemu <span className="font-light">Dengan Dosen di</span>{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text font-normal text-transparent">
              FKIP UNBAJA
            </span>
          </h1>
          <p className="mt-6 text-base mb-4 md:text-lg text-slate-500 dark:text-gray-400 max-w-4xl mx-auto px-4">
            Menghubungkan Anda dengan tenaga pendidik profesional dan staf
            berdedikasi kami.
          </p>

          {/* SEARCH */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama, jabatan, atau NIDN..."
                className="w-full pl-12 pr-12 py-3 rounded-full bg-white dark:bg-gray-800 border border-slate-300 dark:border-gray-700 text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
                >
                  <i className="ri-close-circle-line text-lg"></i>
                </button>
              )}
            </div>

            {!loading && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Menampilkan <b>{visibleData.length}</b> dari{" "}
                <b>{filteredData.length}</b> data
              </p>
            )}
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {loading && [...Array(8)].map((_, i) => <SkeletonCard key={i} />)}

            {!loading &&
              visibleData.map((dosen, index) => (
                <div
                  key={index}
                  className="group rounded-xl overflow-hidden border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* FOTO */}
                  <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800">
                    <img
                      src={
                        dosen.photo
                          ? `https://fkip-ubj.dev-project.biz.id/storage/${dosen.photo}`
                          : "/default.jpg"
                      }
                      alt={dosen.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* BODY */}
                  <div className="p-5 text-left">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {dosen.front_degree && `${dosen.front_degree} `}
                      {dosen.name}
                      {dosen.back_degree && `, ${dosen.back_degree}`}
                    </h3>

                    <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      {dosen.position}
                    </span>

                    <div className="mt-4 h-px bg-slate-200 dark:bg-gray-700"></div>

                    <div className="mt-3 text-xs text-gray-600 dark:text-gray-300 flex items-center gap-2">
                      <i className="ri-id-card-line"></i>
                      <span>NIDN: {dosen.nidn || "-"}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* LOAD MORE */}
          {!loading && filteredData.length > visibleCount && (
            <div className="mt-14 text-center">
              <button
                onClick={() => {
                  setVisibleCount((prev) => prev + 8);
                  window.scrollBy({ top: 400, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg"
              >
                <i className="ri-arrow-down-line text-lg"></i>
                Lihat Selengkapnya
              </button>
            </div>
          )}

          {!loading && filteredData.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-search-eye-line text-5xl text-gray-400"></i>
              <p className="text-gray-500 mt-4">
                Data tidak ditemukan untuk kata kunci <b>"{search}"</b>
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DosenStaf;
