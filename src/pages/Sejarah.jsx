import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import api from "../api";

const SkeletonHistory = () => (
  <div className="animate-pulse p-8 md:p-12 rounded-xl shadow border border-gray-200 bg-white dark:bg-gray-800">
    <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>

    <div className="space-y-4">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-11/12"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-10/12"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-9/12"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-8/12"></div>
    </div>

    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 mt-8 ml-auto"></div>
  </div>
);

const Sejarah = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/history")
      .then((res) => {
        setHistory(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching history:", err);
        setLoading(false);
      });
  }, []);
return (
  <>
    <Navbar />

    <div className="pt-32 pb-24 min-h-screen px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
          Sejarah Fakultas
        </p>
        <h1 className="text-4xl md:text-4xl font-extrabold text-center dark:text-white mb-12">
          FKIP <span className="font-[200]">UNIVERSITAS</span> BANTEN JAYA
        </h1>

        {/* Skeleton */}
        {loading && <SkeletonHistory />}

        {/* Content */}
        {!loading && history.length > 0 && (
          <div className="p-6 sm:p-8 md:p-12 rounded-xl shadow-md border border-blue-300">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              {history[0].title}
            </h2>

            <div
              className="text-sm sm:text-base leading-7 sm:leading-8 space-y-4 text-justify"
              dangerouslySetInnerHTML={{ __html: history[0].content }}
            ></div>

            {history[0].author && (
              <p className="mt-6 text-xs sm:text-sm text-right">
                Penulis: {history[0].author}
              </p>
            )}
          </div>
        )}

        {!loading && history.length === 0 && (
          <p className="text-center text-gray-500 text-sm sm:text-base">
            Tidak ada data sejarah.
          </p>
        )}
      </div>
    </div>

    <Footer />
  </>
);

};

export default Sejarah;
