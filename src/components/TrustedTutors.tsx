const institutions = ["Harvard", "Yale", "Stanford", "MIT", "Princeton", "Columbia", "Oxford"];

const TrustedTutors = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Tutors you can trust from</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {institutions.map((name, idx) => (
            <div
              key={idx}
              className="w-20 h-20 flex items-center justify-center border border-gray-200 rounded-md bg-gray-50"
            >
              <span className="text-xs text-gray-600">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedTutors;
