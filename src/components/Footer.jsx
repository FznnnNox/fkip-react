import React from "react";

import Logo from "../assets/logo-ubj.png"

const Footer = () => {
  return (
    <div>
      <footer className="py-16 px-6 text-[#93a2b8] bg-[#121a29] md:px-20 border-t border-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-700 pb-10">
          {/* Column 1 - Brand */}
          <div className="md:col-span-1">
            <img src={Logo} alt="" className="w-[70px] mb-4" />
            
            <h2 className="text-2xl font-bold mb-3">
              FKIP UNBAJA
            </h2>
            <p className="text-sm leading-relaxed">
              Jl. Syekh Nawawi Al Bantani, KP3B (Komplek Perkantoran Pemerintah Provinsi Banten), Kota Serang, Banten. 
            </p>
          </div>

          {/* Column 2 - Product */}
          <div>
            <h3 className="font-semibold mb-3">
              UNIVERSITAS BANTEN JAYA
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Sejarah
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pimpinan Universitas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Visi & Misi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Berita & Informasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Struktur Organisasi
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="font-semibold mb-3">
              PRODI FAKULTAS FKIP
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Pendidikan Pancasila dan Kewarganegaraan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pendidikan Akuntansi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pendidikan Bahasa Inggris
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Support */}
          <div>
            <h3 className="font-semibold mb-3">
              SUPPORT
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 - Legal */}
          <div>
            <h3 className="font-semibold mb-3">
              LEGAL
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex-col md:flex-row justify-between items-center mt-10 text-gray-500 text-sm space-y-4 md:space-y-0">
          <p className="text-center">© 2025 FKIP UNBAJA Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
