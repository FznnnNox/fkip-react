import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import api from "../api"

const Beasiswa = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      api
        .get("/beasiswa")
        .then((res) => {
          setData(res.data.data || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Gagal fetch API:", err);
          setLoading(false);
        });
    }, []);

    const getStatus = (start, end) => {
      const now = new Date();
      if (!start || !end) return "Tidak Aktif";
      if (now >= new Date(start) && now <= new Date(end)) return "Dibuka";
      return "Ditutup";
    };

  return (
    <>
      <Navbar />

      {/* <div className="pt-32 pb-24 min-h-screen dark:bg-gray-900 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Fakultas Keguruan dan Ilmu Pendidikan
          </p>
          <h1 className="text-4xl md:text-4xl font-extrabold text-center dark:text-white mb-12">
            PUSAT <span className="font-[200]">INFORMASI</span> BEASISWA
          </h1>

            <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2">
              <div className="border-blue-600 border rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-2">
                  Beasiswa Unggulan Kemendikbud
                </h3>
                <p className="text-gray-400 dark:text-gray-300 text-sm mb-4">
                  Bantuan biaya pendidikan untuk mahasiswa berprestasi di
                  berbagai jenjang studi.
                </p>

                <span className="inline-block bg-green-100 text-green-600 text-sm font-semibold px-4 py-1 rounded-full mb-5">
                  Status: Dibuka
                </span>

                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition text-sm">
                    Lihat Detail
                  </button>

                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition text-sm">
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div> */}
      <div className="pt-32 pb-24 min-h-screen dark:bg-gray-900 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Fakultas Keguruan dan Ilmu Pendidikan
          </p>

          <h1 className="text-4xl font-extrabold text-center dark:text-white mb-12">
            PUSAT <span className="font-[200]">INFORMASI</span> BEASISWA
          </h1>

          {loading ? (
            <p className="text-center text-gray-500">Memuat data...</p>
          ) : data.length === 0 ? (
            <p className="text-center text-gray-500">
              Belum ada data beasiswa
            </p>
          ) : (
            <div className="grid gap-10 md:grid-cols-2">
              {data.map((item) => {
                const status = getStatus(
                  item.start_date,
                  item.end_date
                );

                return (
                  <div
                    key={item.id}
                    className="border-blue-600 border rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
                  >
                    <h3 className="text-xl font-bold mb-2">
                      {item.title}
                    </h3>

                    {/* DESKRIPSI DARI RICHEDITOR */}
                    <div
                      className="text-gray-400 dark:text-gray-300 text-sm mb-4"
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    />

                    <span
                      className={`inline-block text-sm font-semibold px-4 py-1 rounded-full mb-5
                        ${
                          status === "Dibuka"
                            ? "bg-green-100 text-green-600"
                            : status === "Ditutup"
                            ? "bg-red-100 text-red-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                    >
                      Status: {status}
                    </span>

                    <div className="flex items-center gap-3">
                      <button className="px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition text-sm">
                        Lihat Detail
                      </button>

                      {status === "Dibuka" && (
                        <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition text-sm">
                          Daftar Sekarang
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Beasiswa;
