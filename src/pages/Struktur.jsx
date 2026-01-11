import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import api from "../api";

const SkeletonImage = () => (
  <div className="animate-pulse overflow-hidden rounded-xl shadow border border-gray-200 bg-white dark:bg-gray-800">
    <div className="h-[420px] w-full bg-gray-200 dark:bg-gray-700"></div>

    <div className="p-6">
      <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  </div>
);

const Struktur = () => {
  const [structure, setStructure] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/structure")
      .then((res) => {
        setStructure(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching structure:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 min-h-screen dark:bg-gray-900 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Struktur
          </p>
          <h1 className="leading-16 text-4xl md:text-4xl font-extrabold text-center text-gray-900 dark-mode-text mb-12">
            STRUKTUR ORGANISASI <br /> FKIP <span className="font-[200]">UNIVERSITAS</span> BANTEN JAYA
          </h1>
          
          {loading && <SkeletonImage />}

          {!loading && structure.length > 0 && (
            <div className="overflow-hidden rounded-xl shadow border border-blue-400">
              <img
                src={`https://fkip-unbaja.dev-project.web.id/storage/${structure[0].image}`}
                alt={structure[0].title}
                className="w-full"
              />
            </div>
          )}
          {!loading && structure.length === 0 && (
            <p className="text-center text-gray-500">
              Tidak ada data struktur organisasi.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Struktur;