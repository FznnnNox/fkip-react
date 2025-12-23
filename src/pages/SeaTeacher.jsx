import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";

const SeaTeacherSkeleton = () => (
  <div className="p-4 animate-pulse">
    <div className="w-full h-[400px] bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
  </div>
);

const SeaTeacher = () => {
  const [seateacher, setSeaTeacher] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    api
      .get("/sea-teacher")
      .then((res) => {
        setSeaTeacher(res.data.data);
      })
      .catch((err) => {
        console.error("Gagal fetch Sea Teacher:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-32 pb-24 min-h-screen dark:bg-gray-900 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Fakultas Keguruan dan Ilmu Pendidikan
          </p>

          <h1 className="text-4xl md:text-4xl font-extrabold text-center dark:text-white mb-12">
            SEA TEACHER <span className="font-[200]">FAKULTAS</span> FKIP
          </h1>

          {/* Loading State */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
              {Array.from({ length: 6 }).map((_, i) => (
                <SeaTeacherSkeleton key={i} />
              ))}
            </div>
          ) : seateacher.length > 0 ? (
            // Show Images from API
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
              {seateacher.map((item, i) => (
                <div
                  key={i}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                  onClick={() =>
                    setSelectedImage(
                      `http://fkip-dash.test/storage/${item.image}`
                    )
                  }
                >
                  <img
                    src={`http://fkip-dash.test/storage/${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div
                    className="absolute inset-0 
                    bg-white/20 backdrop-blur-lg backdrop-saturate-150
                    opacity-0 group-hover:opacity-100 transition duration-300 
                    flex items-center justify-center rounded-xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/40 backdrop-blur-md backdrop-saturate-150 flex items-center justify-center text-black text-3xl font-bold shadow-lg">
                      +
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <i className="ri-information-line text-5xl text-gray-400"></i>
              <p className="text-gray-500 mt-3">Belum ada data SEA Teacher.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl mx-auto">
            <img
              src={selectedImage}
              alt="Preview"
              className="rounded-xl shadow-xl max-h-[90vh]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-5 -right-5 bg-white text-black w-10 h-10 rounded-full text-2xl font-bold shadow"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default SeaTeacher;
