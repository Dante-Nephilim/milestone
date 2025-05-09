const articles = [
  {
    title: "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    image: "https://via.placeholder.com/300x200?text=Graduation",
    tags: ["Guides", "1-on-1 success"],
    author: "Editor",
  },
  {
    title: "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    image: "https://via.placeholder.com/300x200?text=Graduation",
    tags: ["Guides", "1-on-1 success"],
    author: "Editor",
  },
  {
    title: "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    image: "https://via.placeholder.com/300x200?text=Graduation",
    tags: ["Guides", "1-on-1 success"],
    author: "Editor",
  },
  {
    title: "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    image: "https://via.placeholder.com/300x200?text=Graduation",
    tags: ["Guides", "1-on-1 success"],
    author: "Editor",
  },
];

const InspirationSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Insights & inspiration from the world of one-on-one learning
        </h2>
        <p className="text-sm text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore expert perspectives, success stories, and industry updates in education—designed for parents,
          students, and families navigating academic excellence in today’s competitive world.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 hover:shadow-md transition"
            >
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">{article.title}</h3>
                <div className="text-xs text-gray-500 flex flex-wrap gap-2 mb-1">
                  {article.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500">By {article.author}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="px-5 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-100">View All</button>
      </div>
    </section>
  );
};

export default InspirationSection;
