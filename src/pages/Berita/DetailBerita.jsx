import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import api from "../../api";

const DetailBerita = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [news, setNews] = useState(null);
  const [otherNews, setOtherNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    Promise.all([api.get(`/news/${id}`), api.get(`/news`)])
      .then(([detailRes, listRes]) => {
        setNews(detailRes.data.data);

        const filtered = listRes.data.data.filter(
          (item) => item.id !== Number(id)
        );

        setOtherNews(filtered.slice(0, 6));
      })
      .catch((err) => console.log("Gagal ambil berita:", err))
      .finally(() => setLoading(false));
  }, [id]);

  const Skeleton = () => (
    <div className="py-32 container mx-auto max-w-5xl px-4 animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-1/3 mb-6"></div>
      <div className="flex gap-3 mb-6">
        <div className="h-4 bg-gray-300 rounded w-1/6"></div>
        <div className="h-4 bg-gray-300 rounded w-1/6"></div>
      </div>
      <div className="h-64 bg-gray-300 rounded mb-6"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <>
        <Navbar />
        <Skeleton />
        <Footer />
      </>
    );
  }

  if (!news) {
    return (
      <>
        <Navbar />
        <div className="py-40 text-center">
          <p className="text-red-500">Berita tidak ditemukan.</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-5 py-2 bg-blue-600 text-white rounded"
          >
            Kembali
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="py-32">
        <div className="container mx-auto max-w-5xl px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 mb-4 text-blue-600 hover:underline"
          >
            <i className="ri-arrow-left-s-line"></i>
            Kembali
          </button>

          <h1 className="text-3xl leading-12 font-[600] mb-5 border-l-4 border-blue-600 pl-4">
            {news.title}
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            {news.category && (
              <span className="flex items-center gap-1">
                <i className="ri-folder-5-fill"></i>
                {news.category}
              </span>
            )}
            <span>•</span>
            <span className="flex items-center gap-1">
              <i className="ri-calendar-todo-fill"></i>
              {new Date(news.created_at).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {news.thumbnail && (
            <img
              src={`https://fkip-ubj.dev-project.biz.id/storage/${news.thumbnail}`}
              alt={news.title}
              className="rounded-lg shadow mb-6 w-full object-cover max-h-[450px]"
            />
          )}

          <div
            className="prose text-justify max-w-none leading-relaxed"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          <div className="mt-8 text-sm space-y-1">
            <p>
              Penulis:{" "}
              <span>{news.author ?? "Admin"}</span>
            </p>
            <p>
              Sumber Eksternal:{" "}
              <span>{news.source ?? "-"}</span>
            </p>
          </div>

          {otherNews.length > 0 && (
            <div className="mt-16 pt-10">
              <h3 className="text-2xl font-bold mb-6">BERITA <span className="font-[200]">FAKULTAS</span> FKIP LAINNYA</h3>

              <div className="grid md:grid-cols-3 gap-6">
                {otherNews.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                  >
                    <img
                      src={`http://fkip-dash.test/storage/${item.thumbnail}`}
                      alt={item.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
                    />

                    {/* <div className="p-4">
                      <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-blue-600">
                        {item.title}
                      </h4>

                      <p className="text-xs text-gray-500 mt-2">
                        {new Date(item.created_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>

                      <button
                        onClick={() => navigate(`/berita/detail/${item.id}`)}
                        className="mt-3 text-blue-600 text-sm hover:underline"
                      >
                        Baca →
                      </button>
                    </div> */}
                    <Link to={`/berita/detail/${item.id}`} className="block">
  <div className="p-4 cursor-pointer">
    <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-blue-600">
      {item.title}
    </h4>

    <p className="text-xs text-gray-500 mt-2">
      {new Date(item.created_at).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}
    </p>

    <span className="mt-3 inline-block text-blue-600 text-sm hover:underline">
      Baca →
    </span>
  </div>
</Link>

                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DetailBerita;
