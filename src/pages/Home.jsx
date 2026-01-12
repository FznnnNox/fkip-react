import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slazz from "../assets/slazz.png";
import Diksaintek from "../assets/diksaintek.png";

import api from "../api";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Typed from "typed.js";

const DekanSkeleton = () => (
  <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 md:px-20 py-24 gap-20 animate-pulse">
    {/* Content Skeleton */}
    <div className="md:w-1/2">
      <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>
      <div className="h-8 w-3/5 bg-gray-400 dark:bg-gray-600 rounded mb-6"></div>
      <div className="space-y-4">
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-11/12"></div>
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-10/12"></div>
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
      </div>
      <div className="h-4 w-36 bg-blue-400 rounded-full mt-6"></div>
    </div>
    <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
      <div className="rounded-2xl shadow-2xl w-[400px] md:w-[420px] h-[400px] bg-gray-400 dark:bg-gray-600"></div>
    </div>
  </section>
);

const NewsSkeleton = () => (
  <section className="py-16 px-6 md:px-20 dark:bg-gray-900 animate-pulse">
    <div className="h-4 w-20 bg-blue-300 rounded mb-4"></div>
    <div className="h-8 w-2/3 bg-gray-400 dark:bg-gray-600 rounded mb-10"></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="space-y-4">
          <div className="w-full h-56 rounded-lg bg-gray-300 dark:bg-gray-700"></div>
          <div className="h-6 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      ))}
    </div>
  </section>
);

const PartnerSkeleton = () => (
  <section className="py-20 px-8 md:px-20">
    <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 animate-pulse">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-full h-16 bg-gray-300 dark:bg-gray-700 rounded-lg"
          ></div>
        ))}
      </div>
    </div>
  </section>
);

const App = () => {
  // const [about, setAbout] = useState(null);
  const [dekan, setDekan] = useState(null);
  const [news, setNews] = useState([]);
  const [docs, setDocs] = useState([]);
  const [partners, setPartners] = useState([]);

  // Load More
  const [visibleDocs, setVisibleDocs] = useState(6);

  const [loadingDekan, setLoadingDekan] = useState(true);
  const [loadingNews, setLoadingNews] = useState(true);
  const [loadingDocs, setLoadingDocs] = useState(true);
  const [loadingPartners, setLoadingPartners] = useState(true);

  const typedElement = useRef(null);

  // Get Dekan
  useEffect(() => {
    setLoadingDekan(true);
    api
      .get("/dekan")
      .then((res) => {
        setDekan(res.data.data);
      })
      .catch((err) => {
        console.error("Gagal fetch API:", err);
      })
      .finally(() => {
        setLoadingDekan(false);
      });
  }, []);

  // Get News Fakultas
  useEffect(() => {
    setLoadingNews(true);
    api
      .get("/news")
      .then((res) => {
        setNews(res.data.data);
      })
      .catch((err) => {
        console.error("Gagal fetch News:", err);
      })
      .finally(() => {
        setLoadingNews(false);
      });
  }, []);

  // Get Documentasi Video
  useEffect(() => {
    setLoadingDocs(true);
    api
      .get("/documentation")
      .then((res) => {
        setDocs(res.data.data);
      })
      .catch((err) => {
        console.error("Gagal fetch Docs:", err);
      })
      .finally(() => {
        setLoadingDocs(false);
      });
  }, []);

  // Get Partners
  useEffect(() => {
    setLoadingPartners(true);
    api
      .get("/partners")
      .then((res) => {
        setPartners(res.data.data);
      })
      .catch((err) => {
        console.error("Gagal fetch Partners:", err);
      })
      .finally(() => {
        setLoadingPartners(false);
      });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative w-full overflow-hidden home-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </section>

      <section className="w-full bg-[#003fc7] flex justify-center">
        <img
          src={Diksaintek}
          alt="Banner Diksaintek"
          className="w-full max-w-[1200px] object-contain"
        />
      </section>

      <section
        className="relative py-16 px-6 md:px-20 dark:bg-gray-900"
        data-aos="fade-up"
      >
        <div className="absolute top-4 right-4 opacity-25 animate-float-slow blur-[1px]">
          <svg
            width="140"
            height="140"
            viewBox="0 0 24 24"
            className="rotate-12"
          >
            <polygon
              points="12,2 22,22 2,22"
              fill="none"
              stroke="#0046FF"
              strokeWidth="1.6"
            />
          </svg>
        </div>

        <p className="text-blue-400 mb-4 font-bold">- BERITA</p>
        <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 dark-mode-text mb-6">
          BERITA TERBARU FKIP{" "}
          <span className="font-extralight">UNIVERSITAS</span> BANTEN JAYA
        </h2>

        {loadingNews ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="w-full h-56 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
                <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-600 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          news.length > 0 && (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              loop
              autoplay={{ delay: 4000 }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {news.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative group overflow-hidden rounded-lg">
                    <img
                      src={`https://fkip-unbaja.dev-project.web.id/storage/${item.thumbnail}`}
                      alt={item.title}
                      className="w-full h-56 rounded-lg object-cover mb-4 transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <Link
                        to={`/berita/detail/${item.id}`}
                        className="text-white text-lg font-semibold border border-white/70 px-4 py-2 rounded-lg hover:bg-white/20 transition"
                      >
                        Baca Selengkapnya
                      </Link>
                    </div>
                  </div>

                  <Link to={`/berita/detail/${item.id}`}>
                    <h3 className="text-base capitalize font-normal dark-mode-text hover:text-blue-600 transition mt-4 mb-4">
                      {item.title}
                    </h3>
                  </Link>

                  <p className="dark-mode-text text-sm flex items-center gap-2">
                    <i className="ri-calendar-2-line"></i>
                    {new Date(item.created_at).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}

                    {item.category && (
                      <>
                        <span className="mx-2">•</span>
                        <i className="ri-price-tag-3-line"></i>
                        {item.category}
                      </>
                    )}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          )
        )}
      </section>

      <section
        className="py-16 px-6 md:px-20 dark:bg-gray-900"
        data-aos="fade-up"
      >
        <p className="text-blue-400 mb-4 font-bold">- DOKUMENTASI</p>
        <h2 className="text-3xl uppercase md:text-3xl font-extrabold text-gray-900 dark-mode-text mb-3">
          Beranda <span className="font-extralight">YouTube</span> Universitas
          Banten Jaya
        </h2>
        <p className="text-gray-600 dark-mode-subtext mb-10">
          Dokumentasi Kegiatan di Universitas Banten Jaya
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {loadingDocs
            ? [...Array(3)].map((_, i) => (
                <div key={i} className="space-y-4 animate-pulse">
                  <div className="w-full h-56 bg-gray-300 rounded-lg"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-5 bg-gray-400 rounded"></div>
                </div>
              ))
            : // : docs.map((item) => (
              docs.slice(0, visibleDocs).map((item) => (
                <div key={item.id} className="group">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      className="w-full h-56 rounded-lg"
                      src={`https://www.youtube.com/embed/${item.youtube_id}`}
                      title={item.title}
                      allowFullScreen
                    ></iframe>
                  </div>

                  <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
                    <i className="ri-calendar-line"></i>
                    {(() => {
                      const date = new Date(item.published_at);
                      return date.toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      });
                    })()}
                  </p>

                  <h3 className="text-base font-normal mt-2">{item.title}</h3>
                </div>
              ))}
        </div>
        {!loadingDocs && visibleDocs < docs.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleDocs((prev) => prev + 3)}
              className="
        flex items-center gap-2
        px-4 py-2
        border border-blue-500
        text-blue-600 font-medium
        rounded-lg
        hover:bg-blue-500 hover:text-white
        transition
      "
            >
              Load More
              <i className="ri-arrow-down-s-line text-xl group-hover:translate-y-1 transition"></i>
            </button>
          </div>
        )}
      </section>

      {loadingDekan ? (
        <DekanSkeleton />
      ) : dekan ? (
        <section
          className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 md:px-20 py-24 gap-20"
          data-aos="fade-up"
        >
          <div className="absolute -top-12 -left-10 opacity-30 animate-float blur-[0.5px]">
            <svg
              width="140"
              height="140"
              viewBox="0 0 24 24"
              className="rotate-12"
            >
              <polygon
                points="12,2 22,22 2,22"
                fill="none"
                stroke="#0046FF"
                strokeWidth="1.6"
              />
            </svg>
          </div>

          <div className="absolute top-4 right-4 opacity-25 animate-float-slow blur-[1px]">
            <svg width="180" height="180">
              <circle
                cx="90"
                cy="90"
                r="75"
                fill="none"
                stroke="#03A6A1"
                strokeWidth="1.8"
              />
            </svg>
          </div>

          <div className="absolute bottom-10 left-6 opacity-20 animate-float blur-[0.8px]">
            <svg width="90" height="90" className="rotate-6">
              <rect
                x="10"
                y="10"
                width="70"
                height="70"
                fill="none"
                stroke="#FF6C0C"
                strokeWidth="1.8"
              />
            </svg>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-sm mb-3 tracking-widest dark-mode-subtext">
              <i className="ri-user-3-fill"></i> Sambutan
            </h3>

            <div className="border-l-4 border-blue-600 pl-4 mt-6">
              <h2 className="text-3xl font-[200] uppercase md:text-3xl text-gray-900 dark-mode-text mb-6">
                <span className="text-blue-600 font-bold">Dekan</span> Fakultas
                Keguruan dan Ilmu Pendidikan <br />{" "}
                <span className="text-blue-600 font-bold">
                  Universitas Banten Jaya
                </span>
              </h2>
            </div>

            <div
              className="text-gray-700 dark-mode-subtext text-justify text-lg leading-relaxed mb-4 space-y-4"
              dangerouslySetInnerHTML={{ __html: dekan?.content }}
            ></div>

            {/* <a
              href="#"
              className="text-blue-600 font-semibold hover:underline mt-2 inline-block"
            >
              {dekan?.name_dekan}
            </a> */}
            <div className="border-l-4 border-blue-600 pl-4 mt-6">
              <p className="text-xl font-normal text-gray-900 dark-mode-text">
                {dekan?.name_dekan}
              </p>
              <p className="text-sm text-gray-500">Dekan FKIP UNBAJA</p>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0 relative">
            <img
              src={Slazz}
              alt="Element Slazz"
              className="absolute z-0 w-[400px] md:w-[420px] opacity-90"
            />

            <img
              src={
                dekan ? `https://fkip-unbaja.dev-project.web.id/storage/${dekan.image}` : Kepsek
              }
              alt="Foto Dekan"
              className="relative z-10 w-[380px] md:w-[400px] object-cover"
            />
          </div>
        </section>
      ) : (
        <div className="text-center py-10">
          <i className="ri-information-line text-5xl text-gray-400"></i>
          <p className="text-gray-500 mt-3">Belum Kata Sambutan Dekan.</p>
        </div>
      )}

      <section className="pmb">
        <div className="pmb-overlay"></div>

        <div className="pmb-content">
          <span className="pmb-badge">INFO PMB</span>

          <h1>Informasi Penerimaan Mahasiswa Baru</h1>

          <p>
            Dapatkan informasi terkini tentang proses penerimaan mahasiswa baru.
            Mulai dari jadwal pendaftaran hingga proses seleksi, semua tersedia
            secara lengkap dan mudah diakses.
          </p>

          <a href="#info" className="pmb-btn">
            Selengkapnya
          </a>
        </div>
      </section>

      <section className="py-8 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          {loadingPartners && <PartnerSkeleton />}

          {!loadingPartners && (
            <div className="p-4">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={40}
                slidesPerView={2}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 5 },
                }}
                loop
                autoplay={{ delay: 2500, disableOnInteraction: false }}
              >
                {partners.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="flex justify-center items-center"
                  >
                    <a
                      href={item.website_url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <img
                        src={`https://fkip-unbaja.dev-project.web.id/storage/${item.image}`}
                        alt={item.name}
                        className="max-h-18 w-auto object-contain"
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
