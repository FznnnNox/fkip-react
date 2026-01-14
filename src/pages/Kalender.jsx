import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";

const CalendarSkeleton = () => (
  <div className="p-4 animate-pulse">
    <div className="w-full h-[800px] bg-gray-300 dark:bg-gray-700 rounded"></div>
  </div>
);

const Kalender = () => {
  const [calendar, setCalendar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/calendar-academic")
      .then((res) => {
        setCalendar(res.data.data);
      })
      .catch((err) => {
        console.error("Gagal fetch Calendar:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-32 pb-24 min-h-screen px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Fakultas Keguruan dan Ilmu Pendidikan
          </p>

          <h1 className="text-4xl md:text-4xl font-extrabold text-center dark:text-white mb-12">
            KALENDER <span className="font-[200]">AKADEMIK</span> FKIP
          </h1>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <CalendarSkeleton key={i} />
              ))}
            </div>
          ) : calendar.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
              {calendar.map((item, i) => (
                <div key={i} className="p-4">
                  <img
                    src={`https://fkip-ubj.dev-project.biz.id/storage/${item.image}`}
                    alt={item.title}
                    className="w-full h-auto shadow-md rounded"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <i className="ri-information-line text-5xl text-gray-400"></i>
              <p className="text-gray-500 mt-3">
                Belum ada kalender akademik yang diunggah.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Kalender;
