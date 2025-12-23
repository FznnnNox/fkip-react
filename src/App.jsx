import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import VisiMisi from "./pages/VisiMisi";
import Sejarah from "./pages/Sejarah";
import Struktur from "./pages/Struktur";
import Prodi from "./pages/Jurusan/Prodi";
import Prestasi from "./pages/Prestasi";
import Berita from "./pages/Berita/Berita";
import Detail from "./pages/Berita/DetailBerita";
import Pengumuman from "./pages/Berita/Pengumuman";
import Dekan from "./pages/Dekan";
import Fasilitas from "./pages/FasilitasFakultas";
import Kalender from "./pages/Kalender";
import DosenStaf from "./pages/DosenStaf";
import SeaTeacher from "./pages/SeaTeacher";
import Ukm from "./pages/Ukm";
import Beasiswa from "./pages/Beasiswa";
import NotFound from "./pages/NotFound";

const App = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    easing: "ease-in-out",
  });
}, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visi-misi" element={<VisiMisi />} />
      <Route path="/sejarah" element={<Sejarah />} />
      <Route path="/struktur" element={<Struktur />} />
      <Route path="/prestasi" element={<Prestasi />} />

      <Route path="/prodi/:slug" element={<Prodi />} />

      <Route path="/berita/berita-fkip" element={<Berita />} />
      <Route path="/berita/detail/:id" element={<Detail />} />
      <Route path="/berita/berita-fkip/pengumuman" element={<Pengumuman />} />
      <Route path="/dekan" element={<Dekan />} />
      <Route path="/fasilitas-fkip" element={<Fasilitas />} />
      <Route path="/akademik/kalender-akademik-fkip" element={<Kalender />} />
      <Route path="/akademik/dosen-staf" element={<DosenStaf />} />
      <Route path="/sea-teacher" element={<SeaTeacher />} />
      <Route path="/mahasiswa/ukm-fkip" element={<Ukm />} />
      <Route path="/mahasiswa/beasiswa" element={<Beasiswa />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
