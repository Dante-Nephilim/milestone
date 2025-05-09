const reasons = [
  {
    title: "Customized Learning Plans",
    description: "Every student receives a personalized approach to match their needs and goals.",
  },
  {
    title: "Expert Tutors",
    description: "Handpicked educators with deep subject knowledge and teaching experience.",
  },
  {
    title: "1-on-1 Live Sessions",
    description: "Interactive sessions that maximize student engagement and retention.",
  },
  {
    title: "Flexible Scheduling",
    description: "We work around your schedule to ensure consistency and convenience.",
  },
  {
    title: "Holistic Support",
    description: "Beyond academics — we help with motivation, focus, and confidence.",
  },
];

const WhyMilestone = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Milestone Learning?</h2>
        <p className="mt-2 text-sm text-gray-600 max-w-2xl mx-auto">
          We believe education is not one-size-fits-all. Our approach combines structure with flexibility, academic
          excellence with emotional intelligence, and learning with purpose.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-5 text-left hover:shadow-md transition"
            >
              <div className="text-green-700 font-semibold text-sm mb-2">{item.title}</div>
              <p className="text-xs text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMilestone;
