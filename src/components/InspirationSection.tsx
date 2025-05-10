import { useEffect, useState } from "react";
import { fetchArticles } from "../services/payloadService";

type Article = {
  title: string;
  image?: {
    url: string;
  };
  tags?:
    | {
        tag?: string | null;
        id?: string | null;
      }[]
    | null;
  author: string;
};

const InspirationSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">
          Insights & inspiration from the world of one-on-one learning
        </h2>
        <p className="text-sm text-gray-600 mb-10 max-w-3xl mx-auto">
          Explore expert perspectives, success stories, and timely topics in education—designed for parents, students,
          and families navigating academic excellence in today’s competitive world.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="rounded-lg bg-white border border-gray-200 overflow-hidden hover:shadow-md transition"
            >
              <img
                src={`${import.meta.env.VITE_PAYLOAD_API_BASE}${article.image?.url ?? ""}`}
                alt={article.title}
                className="w-full h-[222px] object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-3">{article.title}</h3>
                <div className="text-xs text-gray-500 flex justify-between items-center border-t pt-3 mt-3">
                  {article.tags?.map((tagObj, i) => (
                    <span key={i} className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                      {tagObj.tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="px-6 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition">
          View All
        </button>
      </div>
    </section>
  );
};

export default InspirationSection;
