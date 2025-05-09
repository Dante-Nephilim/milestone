const learningStages = [
  {
    title: "Test Prep",
    description: "SAT, ACT, PSAT, ISEE, SSAT, AP exams, and more",
  },
  {
    title: "College/University",
    description: "Support for core academic coursework, writing, and applications",
  },
  {
    title: "Graduate School",
    description: "Essay coaching, standardized test prep, and research support",
  },
  {
    title: "Elementary School",
    description: "Literacy, numeracy, writing, and executive function skills",
  },
  {
    title: "Middle School",
    description: "Academic content across subjects & support with study skills",
  },
  {
    title: "High School",
    description: "Academic content, test prep, and application coaching",
  },
  {
    title: "Other",
    description: "Customized learning for unique needs",
  },
];

const LearningSupport = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Support for every stage of learning</h2>
        <p className="mt-2 text-sm text-gray-600">
          From foundational skills to advanced academics, we’re with you every step of the way.
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {learningStages.map((stage, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 bg-white text-left hover:shadow-md transition"
            >
              <div className="text-green-700 text-lg font-semibold mb-1">{stage.title}</div>
              <p className="text-sm text-gray-600">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSupport;
