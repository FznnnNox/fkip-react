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

// const AboutSkeleton = () => (
//   <section className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-8 md:px-20 py-24 gap-20 animate-pulse">
//     {/* Image Skeleton */}
//     <div className="md:w-1/2 flex justify-center mb-10 md:mb-0 relative">
//       <div className="rounded-2xl shadow-2xl w-[500px] h-[500px] bg-gray-400 dark:bg-gray-600"></div>
//     </div>

//     {/* Content Skeleton */}
//     <div className="md:w-1/2">
//       <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
//       <div className="h-8 w-3/4 bg-gray-400 dark:bg-gray-600 rounded mb-6"></div>
//       <div className="space-y-3">
//         <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
//         <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-11/12"></div>
//         <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
//         <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-10/12"></div>
//       </div>
//       <div className="h-4 w-36 bg-blue-400 rounded-full mt-6"></div>
//     </div>
//   </section>
// );

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
    {/* Image Skeleton */}
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

  // const [loadingAbout, setLoadingAbout] = useState(true);
  const [loadingDekan, setLoadingDekan] = useState(true);
  const [loadingNews, setLoadingNews] = useState(true);
  const [loadingDocs, setLoadingDocs] = useState(true);
  const [loadingPartners, setLoadingPartners] = useState(true);

  const typedElement = useRef(null);

  // Get About
  // useEffect(() => {
  //   setLoadingAbout(true);
  //   api
  //     .get("/about")
  //     .then((res) => {
  //       setAbout(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.error("Gagal fetch API:", err);
  //     })
  //     .finally(() => {
  //       setLoadingAbout(false);
  //     });
  // }, []);

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

  // useEffect(() => {
  //   const typed = new Typed(typedElement.current, {
  //     strings: [
  //       "PENDIDIKAN PANCASILA DAN KEWANEGARAAN",
  //       "PENDIDIKAN AKUNTANSI",
  //       "PENDIDIKAN BAHASA INGGRIS",
  //     ],
  //     typeSpeed: 100,
  //     backSpeed: 40,
  //     backDelay: 1500,
  //     loop: true,
  //     cursorChar: "|",
  //     showCursor: false,
  //   });

  //   return () => typed.destroy();
  // }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* <section className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 md:px-20 py-40 gap-20">
        <div className="absolute bottom-80 left-10 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full blur-sm shadow-xl opacity-60 animate-float-blink-slow"></div>
        <div className="absolute top-24 right-10 w-50 h-50 rounded-full bg-blue-500/40 opacity-60 animate-float-rotate"></div>

        <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 mb-4 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Fakultas Unggulan & Terakreditasi
          </div>
          <h1 className="text-4xl md:text-4xl font-extrabold leading-[1.2] tracking-tight text-gray-900 dark-mode-text">
            <span className="font-[200]">FAKULTAS</span> KEGURUAN DAN ILMU
            PENDIDIKAN{" "}
            <span className="font-[200] capitalize">
              UNIVERSITAS BANTEN JAYA
            </span>{" "}
            KOTA SERANG{" "}
            <span
              ref={typedElement}
              className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent"
            ></span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg dark-mode-subtext">
            Universitas Banten Jaya adalah tempat mencetak penerus bangsa yang
            berkualitas dan berprestasi di berbagai bidang, serta mampu bersaing
            di tingkat internasional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all">
              ▶ Video
            </button>
          </div>

          <div className="mt-8 text-gray-500 text-sm">
            We are on Social Media :
            <div className="flex gap-3 mt-2 text-xl">
              <i className="ri-facebook-box-fill text-blue-600"></i>
              <i className="ri-twitter-fill text-sky-500"></i>
              <i className="ri-instagram-fill text-pink-500"></i>
              <i className="ri-youtube-fill text-red-500"></i>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center relative order-1 md:order-2">
          <div className="absolute -top-8 -left-4 opacity-40 animate-float-rotate">
            <svg width="56" height="56" viewBox="0 0 24 24">
              <polygon
                points="12,2 22,22 2,22"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="absolute -bottom-6 right-2 opacity-70 animate-float-slow">
            <svg width="40" height="40" viewBox="0 0 24 24">
              <polygon points="12,2 22,22 2,22" fill="url(#gradBlue)" />
              <defs>
                <linearGradient id="gradBlue" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <img
            src={Hero}
            alt="Gedung Sekolah"
            className="rounded-3xl shadow-2xl w-full max-w-md md:w-[420px] object-cover"
          />

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-6 bg-black/20 blur-2xl rounded-full"></div>
        </div>
      </section> */}

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

      {loadingNews ? (
        <NewsSkeleton />
      ) : news.length > 0 ? (
        <section className="relative py-16 px-6 md:px-20 dark:bg-gray-900" data-aos="fade-up">
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
            BERITA TERBARU FKIP <span className="font-extralight">UNIVERSITAS</span>{" "}
            BANTEN JAYA
          </h2>

          <div data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {news &&
              news.length > 0 &&
              news.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group overflow-hidden rounded-lg">
                    <img
                      src={`http://fkip-dash.test/storage/${item.thumbnail}`}
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
                    <h3 className="text-base capitalize font-normal dark-mode-text hover:text-blue-600 cursor-pointer transition mt-4 mb-4">
                      {item.title}
                    </h3>
                  </Link>

                  <p className="dark-mode-text text-sm mt-2 flex items-center gap-2">
                    <i className="ri-calendar-2-line"></i>
                    {new Date(item.created_at).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}

                    {item.category && (
                      <>
                        <span className="mx-2">•</span>
                        <i className="ri-price-tag-3-line"></i> {item.category}
                      </>
                    )}
                  </p>
                </SwiperSlide>
              ))}
          </Swiper>
          </div>
        </section>
      ) : (
        <div className="text-center py-10">
          <i className="ri-information-line text-5xl text-gray-400"></i>
          <p className="text-gray-500 mt-3">
            Belum ada data berita yang dipublikasikan.
          </p>
        </div>
      )}

      <section className="py-16 px-6 md:px-20 dark:bg-gray-900" data-aos="fade-up">
        <p className="text-blue-400 mb-4 font-bold">- DOKUMENTASI</p>
        <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 dark-mode-text mb-3">
          Dokumentasi
        </h2>
        <p className="text-gray-600 dark-mode-subtext mb-10">
          Dokumentasi Kegiatan di Fakultas FKIP Universitas Banten Jaya
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          {loadingDocs
            ? [...Array(3)].map((_, i) => (
                <div key={i} className="space-y-4 animate-pulse">
                  <div className="w-full h-56 bg-gray-300 rounded-lg"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-5 bg-gray-400 rounded"></div>
                </div>
              ))
            : docs.map((item) => (
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
      </section>

      {loadingDekan ? (
        <DekanSkeleton />
      ) : dekan ? (
        <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 md:px-20 py-24 gap-20" data-aos="fade-up">
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
            <h3 className="uppercase text-sm text-gray-500 mb-3 tracking-widest dark-mode-subtext">
              DEKAN FKIP UNBAJA
            </h3>

            <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 dark-mode-text mb-6">
              {dekan?.name_dekan}
            </h2>

            <div
              className="text-gray-700 dark-mode-subtext text-justify text-lg leading-relaxed mb-4 space-y-4"
              dangerouslySetInnerHTML={{ __html: dekan?.content }}
            ></div>

            <a
              href="#"
              className="text-blue-600 font-semibold hover:underline mt-2 inline-block"
            >
              Baca Selengkapnya →
            </a>
          </div>

          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0 relative">
            {/* Slazz Background */}
            <img
              src={Slazz}
              alt="Element Slazz"
              className="absolute z-0 w-[400px] md:w-[420px] opacity-90"
            />

            {/* Foto Dekan */}
            <img
              src={
                dekan ? `http://fkip-dash.test/storage/${dekan.image}` : Kepsek
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

      {/* {loadingAbout ? (
        <AboutSkeleton />
      ) : about ? (
        <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 md:px-20 py-24 gap-20">
          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0 relative">
            <div className="absolute -top-8 -left-4 opacity-40 animate-float">
              <svg width="56" height="56" viewBox="0 0 24 24">
                <polygon
                  points="12,2 22,22 2,22"
                  fill="none"
                  stroke="#0046FF"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <img
              src={`http://fkip-dash.test/storage/${about.image}`}
              alt="Tentang FKIP Kota Serang"
              className="rounded-2xl shadow-2xl w-[500px] h-[500px] object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="font-semibold uppercase text-sm mb-4 dark-mode-subtext">
              Siapa Kami?
            </h3>
            <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 dark-mode-text mb-6">
              FKIP <span className="font-[200]">UNIVERSITAS</span> BANTEN JAYA
            </h2>

            <div
              className="text-gray-700 dark-mode-subtext text-lg leading-relaxed mb-4 space-y-4"
              dangerouslySetInnerHTML={{ __html: about?.content }}
            ></div>

            <div className="mt-10">
              <a
                href="#"
                className="text-blue-600 flex items-center no-underline font-semibold hover:underline mt-2 inline-block"
              >
                Baca Selengkapnya <i className="ri-arrow-right-s-fill"></i>
              </a>
            </div>
          </div>
        </section>
      ) : (
        <div className="text-center py-10">
          <i className="ri-information-line text-5xl text-gray-400"></i>
          <p className="text-gray-500 mt-3">Belum ada data tersedia.</p>
        </div>
      )} */}

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

      <section className="py-8">
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
                        src={`http://fkip-dash.test/storage/${item.image}`}
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
