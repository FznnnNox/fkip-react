import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ubj from "../assets/logo-ubj.png";
import Logo from "../assets/logo-fkip.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efek untuk mengontrol Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function: Pastikan overflow di-reset saat komponen unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Fungsi untuk menutup semua menu/dropdown
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  // Fungsi untuk toggle dropdown tingkat 1
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    setOpenSubDropdown(null); // Tutup sub-dropdown saat dropdown utama berubah
  };

  // Fungsi untuk toggle sub-dropdown tingkat 2
  const toggleSubDropdown = (subDropdownName) => {
    setOpenSubDropdown(
      openSubDropdown === subDropdownName ? null : subDropdownName
    );
  };

  // Komponen Link yang sudah dimodifikasi untuk menutup menu setelah diklik
  const NavLink = ({ to, children, className = "" }) => (
    <Link to={to} onClick={closeAllMenus} className={className}>
      {children}
    </Link>
  );

  return (
    <>
      {/* <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0b0f19]/60 backdrop-blur-md shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      > */}
      {/* <nav
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-blue-800/90 backdrop-blur-md shadow-lg border-b border-blue-500" // Biru gelap dengan opacity 90%
          : "bg-transparent"
    }`}
> */}
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500
             bg-blue-700/90 backdrop-blur-md shadow-lg border-b border-blue-500"
      >
        <div className="flex justify-between items-center px-10 md:px-10 py-4 md:py-8">
          <NavLink
            to="/"
            className="flex gap-3 items-center text-xl md:text-2xl font-extrabold tracking-wide transition-colors ${
              text-white"
          >
            <div className="flex justify-between items-center">
              <img src={Ubj} alt="" className="w-[50px] mr-2" />
              <p>
                FKIP <span className="text-white font-[300]">UNBAJA.</span>
              </p>
            </div>
          </NavLink>

          <ul className="hidden md:flex gap-8 font-medium transition-colors text-white">
            <li className="hover:text-blue-600 transition">
              <NavLink to="/">Beranda</NavLink>
            </li>

            <li className="relative group">
              <button className="flex items-center hover:text-blue-600 cursor-pointer">
                Profil
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1 mt-2px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>

              {/* Isi Dropdown Profil (Desktop) - TIDAK BERUBAH */}
              <ul
                className={`absolute left-0 mt-3 w-48 rounded-xl shadow-lg border backdrop-blur-md transition-all duration-300 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible ${
                  darkMode || isScrolled
                    ? "bg-gray-800/90 border-gray-700 text-gray-200"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
              >
                <li className="relative group/sekolah">
                  <div className="flex items-center justify-between cursor-pointer px-4 py-3 hover:bg-blue-600 hover:text-white rounded-t-xl transition">
                    Fakultas
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-1 mt-2px"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 6l6 6-6 6"
                      />
                    </svg>
                  </div>

                  {/* Isi Submenu Sekolah (Desktop) - TIDAK BERUBAH */}
                  <ul
                    className={`absolute left-full top-0 ml-3 w-56 rounded-xl shadow-lg border backdrop-blur-md transition-all duration-300 opacity-0 scale-95 invisible group-hover/sekolah:opacity-100 group-hover/sekolah:scale-100 group-hover/sekolah:visible ${
                      darkMode || isScrolled
                        ? "bg-gray-800/90 border-gray-700 text-gray-200"
                        : "bg-gray-50 border-gray-200 text-gray-700"
                    }`}
                  >
                    <div className="absolute -left-3 top-0 h-full w-3 bg-transparent"></div>
                    <NavLink
                      to="/visi-misi"
                      className="block px-4 py-3 hover:bg-blue-600 hover:text-white rounded-t-xl transition"
                    >
                      Visi Misi
                    </NavLink>
                    <NavLink
                      to="/sejarah"
                      className="block px-4 py-3 hover:bg-blue-600 hover:text-white transition"
                    >
                      Sejarah
                    </NavLink>
                    <NavLink
                      to="/struktur"
                      className="block px-4 py-3 hover:bg-blue-600 hover:text-white transition"
                    >
                      Struktur Organisasi
                    </NavLink>
                    <NavLink
                      to="/dekan"
                      className="block px-4 py-3 hover:bg-blue-600 hover:text-white transition"
                    >
                      Dekan Fakultas
                    </NavLink>
                    <NavLink
                      to="/fasilitas-fkip"
                      className="block px-4 py-3 hover:bg-blue-600 hover:text-white transition rounded-b-xl"
                    >
                      Sarana & Prasarana
                    </NavLink>
                  </ul>
                </li>

                {/* Submenu Jurusan (Desktop) - TIDAK BERUBAH */}
                <li className="relative group/jurusan">
                  <div className="flex items-center justify-between cursor-pointer px-4 py-3 hover:bg-blue-600 hover:text-white transition">
                    Prodi
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-1 mt-2px"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 6l6 6-6 6"
                      />
                    </svg>
                  </div>

                  {/* Isi Submenu Jurusan (Desktop) - TIDAK BERUBAH */}
                  <ul
                    className={`absolute left-full top-0 ml-3 w-56 rounded-xl shadow-lg border backdrop-blur-md transition-all duration-300 opacity-0 scale-95 invisible group-hover/jurusan:opacity-100 group-hover/jurusan:scale-100 group-hover/jurusan:visible ${
                      darkMode || isScrolled
                        ? "bg-gray-800/90 border-gray-700 text-gray-200"
                        : "bg-gray-50 border-gray-200 text-gray-700"
                    }`}
                  >
                    <div className="absolute -left-3 top-0 h-full w-3 bg-transparent"></div>
                    <NavLink
                      to="/prodi/ppkn"
                      className="block px-4 py-3 hover:bg-blue-600 hover:text-white rounded-t-xl transition"
                    >
                      PPKN
                    </NavLink>
                    <NavLink
                      to="/prodi/pbi"
                      className="block px-4 py-3 hover:bg-blue-600 hover:text-white transition"
                    >
                      PBI
                    </NavLink>
                    <NavLink
                      to="/prodi/pak"
                      className="block px-4 py-3 hover:bg-blue-600 hover:text-white rounded-b-xl transition"
                    >
                      PAK
                    </NavLink>
                  </ul>
                </li>

                <NavLink
                  to="/prestasi"
                  className="block px-4 py-3 hover:bg-blue-600 hover:text-white transition"
                >
                  Prestasi
                </NavLink>

                <a
                  href="https://maps.app.goo.gl/D4hvWdN5ksyVSuvb9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 hover:bg-blue-600 hover:text-white rounded-b-xl transition"
                >
                  Lokasi Kampus
                </a>
              </ul>
            </li>

            <li className="relative group cursor-pointer">
              <button className="flex items-center hover:text-blue-600 cursor-pointer">
                Berita
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1 mt-2px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>
              <ul
                className={`absolute left-0 mt-3 w-48 rounded-xl shadow-lg border backdrop-blur-md transition-all duration-300 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible ${
                  darkMode || isScrolled
                    ? "bg-gray-800/90 border-gray-700 text-gray-200"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
              >
                <NavLink
                  to="/berita/berita-fkip"
                  className="block px-4 py-3 hover:bg-blue-600 hover:text-white rounded-t-xl transition"
                >
                  Berita Fakultas
                </NavLink>
                <NavLink
                  to="/berita/berita-fkip/pengumuman"
                  className="block px-4 py-3 hover:bg-blue-600 hover:text-white rounded-b-xl transition"
                >
                  Pengumuman
                </NavLink>
              </ul>
            </li>

            <li className="relative group cursor-pointer">
              <button className="flex items-center hover:text-blue-600 cursor-pointer">
                Akademik
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1 mt-2px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>
              <ul
                className={`absolute left-0 mt-3 w-48 rounded-xl shadow-lg border backdrop-blur-md transition-all duration-300 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible ${
                  darkMode || isScrolled
                    ? "bg-gray-800/90 border-gray-700 text-gray-200"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
              >
                <NavLink
                  to="/akademik/kalender-akademik-fkip"
                  className="block px-4 py-3 hover:bg-blue-600 hover:text-white rounded-t-xl transition"
                >
                  Kalender Akademik
                </NavLink>
                <NavLink
                  to="/akademik/dosen-staf"
                  className="block px-4 py-3 hover:bg-blue-600 hover:text-white rounded-b-xl transition"
                >
                  Dosen dan Staf
                </NavLink>
              </ul>
            </li>

            <li className="hover:text-blue-600 transition">
              <NavLink to="/sea-teacher" className="block cursor-pointer">
                Sea Teacher
              </NavLink>
            </li>

            <li className="relative group cursor-pointer">
              <button className="flex items-center hover:text-blue-600 cursor-pointer">
                Mahasiswa
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1 mt-2px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>
              <ul
                className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[230px] rounded-xl shadow-lg border backdrop-blur-md transition-all duration-300 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible ${
                  darkMode || isScrolled
                    ? "bg-gray-800/90 border-gray-700 text-gray-200"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
              >
                <NavLink
                  to="/mahasiswa/ukm-fkip"
                  className="block px-4 py-3 hover:bg-blue-600 hover:text-white rounded-t-xl transition"
                >
                  UKM Unbaja
                </NavLink>
                <NavLink
                  to="/mahasiswa/beasiswa"
                  className="block px-4 py-3 hover:bg-blue-600 hover:text-white transition"
                >
                  Beasiswa
                </NavLink>
                <a
                  href="https://www.unbaja.ac.id/"
                  target="_blank"
                  className="block px-4 py-3 hover:bg-blue-600 hover:text-white rounded-b-xl transition"
                >
                  Portal Akademik
                </a>
              </ul>
            </li>

            <li className="relative group cursor-pointer">
              <button className="flex items-center hover:text-blue-600 cursor-pointer">
                Link
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1 mt-2px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>
              <ul
                className={`absolute left-0 mt-3 w-48 rounded-xl shadow-lg border backdrop-blur-md transition-all duration-300 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible ${
                  darkMode || isScrolled
                    ? "bg-gray-800/90 border-gray-700 text-gray-200"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
              >
                <NavLink
                  to="https://www.unbaja.ac.id"
                  className="block px-4 py-3 hover:bg-blue-600 hover:text-white rounded-t-xl transition"
                >
                  Situs Unbaja
                </NavLink>
                <NavLink
                  to="https://spmb.unbaja.ac.id"
                  className="block px-4 py-3 hover:bg-blue-600 hover:text-white transition"
                >
                  SPMB Unbaja
                </NavLink>
                <NavLink
                  to="https://siakad.unbaja.ac.id"
                  target="_blank"
                  className="block px-4 py-3 hover:bg-blue-600 hover:text-white rounded-b-xl transition"
                >
                  SIAKAD Unbaja
                </NavLink>
              </ul>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-md transition ${
                darkMode || isScrolled
                  ? "text-gray-200 hover:bg-white/10"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            > */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md transition text-white hover:bg-white/10"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 12a9.75 9.75 0 0 0 9.75 9.75 9.753 9.753 0 0 0 9.002-6.748Z"
                  />
                </svg>
              )}
            </button>

            {/* Tombol Hamburger Menu (Mobile) - TIDAK BERUBAH */}
            {/* <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden block p-2 rounded-md transition ${
                darkMode || isScrolled
                  ? "text-gray-200 hover:bg-white/10"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button> */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 ${
                darkMode ? "text-gray-200" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                // ICON CLOSE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // ICON HAMBURGER
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden fixed top-[68px] left-0 
            h-screen w-full transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } ${darkMode ? "bg-gray-900" : "bg-white"} overflow-y-auto`}
        >
          <ul
            className={`flex flex-col p-4 space-y-2 font-medium ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            <li className="hover:text-blue-600 transition p-2">
              <NavLink to="/">Beranda</NavLink>
            </li>

            {/* Dropdown Profil (Mobile) */}
            <li className="border-b border-gray-200/50 pb-2">
              <button
                onClick={() => toggleDropdown("profil")}
                className={`flex justify-between items-center w-full p-2 hover:text-blue-600 ${
                  openDropdown === "profil" ? "text-blue-600" : ""
                }`}
              >
                Profil
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openDropdown === "profil" ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {/* Isi Dropdown Profil (Mobile) */}
              {openDropdown === "profil" && (
                <ul className="pl-4 space-y-1 mt-2">
                  {/* Submenu Sekolah (Mobile) - DIPERBAIKI */}
                  <li>
                    <button
                      onClick={() => toggleSubDropdown("sekolah")}
                      className={`flex justify-between items-center w-full py-2 px-2 hover:text-blue-600 ${
                        openSubDropdown === "sekolah" ? "text-blue-600" : ""
                      }`}
                    >
                      Fakultas
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openSubDropdown === "sekolah"
                            ? "rotate-90"
                            : "rotate-0"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                    {/* Konten muncul menggunakan openSubDropdown */}
                    {openSubDropdown === "sekolah" && (
                      <ul className="pl-4 space-y-1 mt-1 border-l border-gray-400/50">
                        <li className="hover:text-blue-600 transition">
                          <NavLink to="/visi-misi" className="block py-2 px-2">
                            Visi Misi
                          </NavLink>
                        </li>
                        <li className="hover:text-blue-600 transition">
                          <NavLink to="/sejarah" className="block py-2 px-2">
                            Sejarah
                          </NavLink>
                        </li>
                        <li className="hover:text-blue-600 transition">
                          <NavLink to="/struktur" className="block py-2 px-2">
                            Struktur Organisasi
                          </NavLink>
                        </li>
                        <li className="hover:text-blue-600 transition">
                          <NavLink to="/dekan" className="block py-2 px-2">
                            Dekan Fakultas
                          </NavLink>
                        </li>
                        <li className="hover:text-blue-600 transition">
                          <NavLink
                            to="/fasilitas-fkip"
                            className="block py-2 px-2"
                          >
                            Sarana & Prasarana
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Submenu Jurusan (Mobile) - DIPERBAIKI */}
                  <li>
                    <button
                      onClick={() => toggleSubDropdown("jurusan")}
                      className={`flex justify-between items-center w-full py-2 px-2 hover:text-blue-600 ${
                        openSubDropdown === "jurusan" ? "text-blue-600" : ""
                      }`}
                    >
                      Prodi
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openSubDropdown === "jurusan"
                            ? "rotate-90"
                            : "rotate-0"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                    {/* Konten muncul menggunakan openSubDropdown */}
                    {openSubDropdown === "jurusan" && (
                      <ul className="pl-4 space-y-1 mt-1 border-l border-gray-400/50">
                        <li className="hover:text-blue-600 transition">
                          <NavLink to="/prodi/ppkn" className="block py-2 px-2">
                            Pendidikan Pancasila dan Kewarganegaraan
                          </NavLink>
                        </li>
                        <li className="hover:text-blue-600 transition">
                          <NavLink to="/prodi/pbi" className="block py-2 px-2">
                            Pendidikan Bahasa Inggris
                          </NavLink>
                        </li>
                        <li className="hover:text-blue-600 transition">
                          <NavLink to="/prodi/pak" className="block py-2 px-2">
                            Pendikan Akuntansi
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="hover:text-blue-600 transition">
                    <NavLink to="/prestasi" className="block py-2 px-2">
                      Prestasi
                    </NavLink>
                  </li>
                  {/* <li className="hover:text-blue-600 transition">
                    <a
                      href="/pdf/akreditasi_fkip.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 px-2"
                    >
                      Akreditasi Prodi
                    </a>
                  </li> */}
                  <li className="hover:text-blue-600 transition">
                    <a
                      href="https://maps.app.goo.gl/D4hvWdN5ksyVSuvb9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 px-2"
                    >
                      Lokasi Kampus
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="border-b border-gray-200/50 pb-2">
              <button
                onClick={() => toggleDropdown("berita")}
                className={`flex justify-between items-center w-full p-2 hover:text-blue-600 ${
                  openDropdown === "berita" ? "text-blue-600" : ""
                }`}
              >
                Berita
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openDropdown === "berita" ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {openDropdown === "berita" && (
                <ul className="pl-4 space-y-1 mt-2 border-l border-gray-400/50">
                  <li className="hover:text-blue-600 transition">
                    <NavLink
                      to="/berita/berita-fkip"
                      className="block py-2 px-2"
                    >
                      Berita Fakultas
                    </NavLink>
                  </li>
                  <li className="hover:text-blue-600 transition">
                    <NavLink
                      to="/berita/berita-fkip/pengumuman"
                      className="block py-2 px-2"
                    >
                      Pengumuman
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li className="border-b border-gray-200/50 pb-2">
              <button
                onClick={() => toggleDropdown("akademik")}
                className={`flex justify-between items-center w-full p-2 hover:text-blue-600 ${
                  openDropdown === "akademik" ? "text-blue-600" : ""
                }`}
              >
                Akademik
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openDropdown === "akademik" ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {openDropdown === "akademik" && (
                <ul className="pl-4 space-y-1 mt-2 border-l border-gray-400/50">
                  <li className="hover:text-blue-600 transition">
                    <NavLink
                      to="/akademik/kalender-akademik-fkip"
                      className="block py-2 px-2"
                    >
                      Kalender Akademik
                    </NavLink>
                  </li>
                  <li className="hover:text-blue-600 transition">
                    <NavLink
                      to="/akademik/dosen-staf"
                      className="block py-2 px-2"
                    >
                      Dosen dan Staf
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li className="hover:text-blue-600 transition p-2">
              <NavLink to="/sea-teacher" className="block cursor-pointer">
                Sea Teacher
              </NavLink>
            </li>

            <li className="border-b border-gray-200/50 pb-2">
              <button
                onClick={() => toggleDropdown("mahasiswa")}
                className={`flex justify-between items-center w-full p-2 hover:text-blue-600 ${
                  openDropdown === "mahasiswa" ? "text-blue-600" : ""
                }`}
              >
                Mahasiswa
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openDropdown === "mahasiswa" ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {openDropdown === "mahasiswa" && (
                <ul className="pl-4 space-y-1 mt-2 border-l border-gray-400/50">
                  <li className="hover:text-blue-600 transition">
                    <NavLink
                      to="/mahasiswa/ukm-fkip"
                      className="block py-2 px-2"
                    >
                      UKM Unbaja
                    </NavLink>
                  </li>
                  <li className="hover:text-blue-600 transition">
                    <NavLink
                      to="/mahasiswa/beasiswa"
                      className="block py-2 px-2"
                    >
                      Beasiswa
                    </NavLink>
                  </li>
                  <li className="hover:text-blue-600 transition">
                    <a
                      href="https://www.unbaja.ac.id/"
                      target="_blank"
                      className="block py-2 px-2"
                    >
                      Portal Akademik
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="border-b border-gray-200/50 pb-2">
              <button
                onClick={() => toggleDropdown("link")}
                className={`flex justify-between items-center w-full p-2 hover:text-blue-600 ${
                  openDropdown === "link" ? "text-blue-600" : ""
                }`}
              >
                Link
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openDropdown === "link" ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {openDropdown === "link" && (
                <ul className="pl-4 space-y-1 mt-2 border-l border-gray-400/50">
                  <li className="hover:text-blue-600 transition">
                    <NavLink
                      to="https://www.unbaja.ac.id"
                      className="block py-2 px-2"
                    >
                      Situs Unbaja
                    </NavLink>
                  </li>
                  <li className="hover:text-blue-600 transition">
                    <NavLink
                      to="https://spmb.unbaja.ac.id"
                      className="block py-2 px-2"
                    >
                      SPMB Unbaja
                    </NavLink>
                  </li>
                  <li className="hover:text-blue-600 transition">
                    <NavLink
                      to="https://siakad.unbaja.ac.id"
                      className="block py-2 px-2"
                    >
                      Siakad Unbaja
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li className="h-20"></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
