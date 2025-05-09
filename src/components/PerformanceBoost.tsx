const cards = [
  {
    label: "Book a Consultation",
    image: "https://via.placeholder.com/300x180?text=Consultation",
  },
  {
    label: "Submit an Inquiry",
    image: "https://via.placeholder.com/300x180?text=Inquiry",
  },
  {
    label: "Meet a Mentor",
    image: "https://via.placeholder.com/300x180?text=Mentor",
  },
];

const PerformanceBoost = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How we increase academic performance</h2>
          <p className="text-sm text-gray-700 mb-4">
            The most successful learning is done one-on-one.
            <br />
            <br />
            At Milestone Learning, we maximize that every moment counts. Our expert tutors work directly with students
            to build confidence, create academic structure, and increase achievement. Here’s how we set the learning
            approach to work for them.
          </p>
          <a href="#" className="text-green-700 text-sm font-medium hover:underline">
            Learn More →
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img src={card.image} alt={card.label} className="w-full h-auto" />
              <div className="p-4 text-center text-sm font-medium text-gray-800">{card.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceBoost;
