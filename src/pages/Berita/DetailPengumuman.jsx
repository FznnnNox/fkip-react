import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import api from "../../api";

const DetailPengumuman = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    api
      .get(`/announcement/${id}`)
      .then((res) => {
        setAnnouncement(res.data.data);
      })
      .catch((err) => {
        console.error("Gagal ambil detail pengumuman:", err);
        setAnnouncement(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  /* ================= SKELETON ================= */
  const Skeleton = () => (
    <div className="py-32 container mx-auto max-w-5xl px-4 animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-1/2 mb-6"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4 mb-6"></div>
      <div className="h-64 bg-gray-300 rounded mb-6"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      </div>
    </div>
  );

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <>
        <Navbar />
        <Skeleton />
        <Footer />
      </>
    );
  }

  /* ================= NOT FOUND ================= */
  if (!announcement) {
    return (
      <>
        <Navbar />
        <div className="py-40 text-center">
          <p className="text-red-500 text-lg">
            Pengumuman tidak ditemukan.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Kembali
          </button>
        </div>
        <Footer />
      </>
    );
  }

  /* ================= MAIN VIEW ================= */
  return (
    <>
      <Navbar />

      <div className="py-32">
        <div className="container mx-auto max-w-5xl px-4">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 mb-5 text-blue-600 hover:underline"
          >
            <i className="ri-arrow-left-s-line"></i>
            Kembali
          </button>

          {/* Title */}
          <h1 className="text-3xl leading-snug font-semibold mb-4 border-l-4 border-blue-600 pl-4">
            {announcement.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
            {announcement.category && (
              <span className="flex items-center gap-1">
                <i className="ri-folder-5-fill"></i>
                {announcement.category}
              </span>
            )}
            <span>•</span>
            <span className="flex items-center gap-1">
              <i className="ri-calendar-event-fill"></i>
              {new Date(announcement.created_at).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {/* Thumbnail */}
          {announcement.thumbnail && (
            <img
              src={`http://fkip-dash.test/storage/${announcement.thumbnail}`}
              alt={announcement.title}
              className="rounded-lg shadow mb-6 w-full object-cover max-h-[450px]"
            />
          )}

          {/* Content */}
          <div
            className="prose text-justify max-w-none leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: announcement.content,
            }}
          />

          {/* Footer Info */}
          <div className="mt-10 text-sm text-gray-600 space-y-1">
            <p>
              Dipublikasikan oleh:{" "}
              <span className="font-medium">
                {announcement.author ?? "Admin"}
              </span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DetailPengumuman;