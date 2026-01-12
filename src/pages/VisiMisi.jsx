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
