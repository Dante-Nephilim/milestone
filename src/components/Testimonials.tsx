const testimonials = [
  {
    quote:
      "My son went from struggling in science to earning his best grades ever. His tutor made the material click in a way his classes never did.",
    name: "Kate Willis",
    role: "Parent of a Student",
    image: "https://via.placeholder.com/40",
  },
  {
    quote:
      "My son went from struggling in science to earning his best grades ever. His tutor made the material click in a way his classes never did.",
    name: "Kate Willis",
    role: "Parent of a Student",
    image: "https://via.placeholder.com/40",
  },
  {
    quote:
      "My son went from struggling in science to earning his best grades ever. His tutor made the material click in a way his classes never did.",
    name: "Kate Willis",
    role: "Parent of a Student",
    image: "https://via.placeholder.com/40",
  },
  {
    quote:
      "My son went from struggling in science to earning his best grades ever. His tutor made the material click in a way his classes never did.",
    name: "Kate Willis",
    role: "Parent of a Student",
    image: "https://via.placeholder.com/40",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Success we’ve achieved together</h2>
        <p className="mt-2 text-sm text-gray-600">
          Together, we strive to help every milestone — turning challenges into achievements and goals into reality.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-md p-6 text-left shadow-sm">
              <p className="text-sm text-gray-800 mb-4 italic">“{t.quote}”</p>
              <div className="flex items-center mt-4">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-8 px-5 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-100">
          View All
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
