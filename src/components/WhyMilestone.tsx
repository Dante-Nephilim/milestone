import { getMediaUrl } from "../services/payloadService";

const reasons = [
  {
    icon: getMediaUrl("personalized-learning-2.png"),
    title: "Personalized, efficient learning",
    description: "Tailored instruction that maximizes understanding and progress.",
  },
  {
    icon: getMediaUrl("collaboration-2.png"),
    title: "Collaboration with parents & students",
    description: "Clear communication and ongoing feedback to align on goals.",
  },
  {
    icon: getMediaUrl("skill-development-2.png"),
    title: "Long-term skill development",
    description: "Focused on growth, mastery, and real results.",
  },
  {
    icon: getMediaUrl("supportive-env-2.png"),
    title: "A nurturing, supportive environment",
    description: "Meeting students where they are and helping them thrive.",
  },
  {
    icon: getMediaUrl("confidence-building-2.png"),
    title: "Confidence-building for success",
    description: "Strategies to reduce anxiety and improve academic performance.",
  },
];

// This should be the CMS-sourced background image
const backgroundImage = getMediaUrl("why-milestone-background-2.png");

const WhyMilestone = () => {
  return (
    <section
      className="bg-no-repeat bg-center bg-cover py-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-2">Why Milestone Learning?</h2>
        <p className="text-sm text-white/80 mb-12 max-w-2xl mx-auto">
          Together, we celebrate every milestone—turning challenges into achievements and goals into reality.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white text-center rounded-xl px-6 py-8 w-full max-w-sm shadow-sm text-gray-800"
            >
              <img src={item.icon} alt={item.title} className="w-[70px] h-[70px] mx-auto mb-5 object-contain" />
              <h3 className="text-green-900 font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-white text-green-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
            Get Started Today
          </button>
          <button className="border border-white text-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-green-900 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyMilestone;
