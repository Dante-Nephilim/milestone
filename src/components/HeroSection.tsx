const HeroSection = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Empowering every <br />
            <span className="text-green-900">Student with</span> <br />
            personalized learning <br />
            <span className="text-green-900">for lasting success</span>
          </h1>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>✅ Personalized, efficient learning</li>
            <li>✅ Deep collaboration with parents & students</li>
            <li>✅ One-on-one interactive online learning</li>
          </ul>
          <button className="bg-green-900 text-white px-6 py-2 rounded-md hover:bg-green-800 text-sm">
            Get Started Today
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://via.placeholder.com/500x400?text=Hero+Image"
            alt="Students learning"
            className="rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
