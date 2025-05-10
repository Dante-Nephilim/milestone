import { getMediaUrl } from "../services/payloadService";

const cards = [
  {
    label: "Schedule a Consultation",
    image: getMediaUrl("schedule-consultation.png"),
  },
  {
    label: "Submit an Inquiry",
    image: getMediaUrl("submit-inquiry.png"),
  },
  {
    label: "Book a Session",
    image: getMediaUrl("book-session.png"),
  },
];

const PerformanceBoost = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Left Text Block */}
        <div className="lg:col-span-1 border-l-4 border-green-700 pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4 leading-snug">
            How we increase <br /> academic performance
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            The most successful learning is <strong>one-on-one</strong>.
          </p>
          <p className="text-sm text-gray-700 mb-4">
            At <strong>Milestone Learning</strong>, we recognize that every student learns differently—success comes
            from tailored support, personalized strategies, and a learning approach that works for them.
          </p>
          <a href="#" className="text-sm font-medium text-green-800 inline-flex items-center gap-1 hover:underline">
            Learn More <span>→</span>
          </a>
        </div>

        {/* Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <img src={card.image} alt={card.label} className="w-full h-[220px] object-cover" />
              <div className="p-4 flex justify-center">
                <button className="bg-green-900 text-white text-sm px-4 py-2 rounded-full hover:bg-green-800 transition">
                  {card.label}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceBoost;
