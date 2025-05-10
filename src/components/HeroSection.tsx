import { getMediaUrl } from "../services/payloadService";

const HeroSection = () => {
  const heroSectionImageURL = getMediaUrl("hero-section-image.png");

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-16 md:py-28 relative z-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Empowering every <br />
            <span className="text-green-900">Student with</span> <br />
            personalized learning <br />
            <span className="text-green-900">for lasting success</span>
          </h1>

          <ul className="mt-6 space-y-3 text-gray-800">
            <li className="flex items-start gap-2">
              <span className="text-green-700 mt-1">✔</span> Personalized, efficient learning
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 mt-1">✔</span> Deep collaboration with parents & students
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 mt-1">✔</span> Personalized One-on-One Learning
            </li>
          </ul>

          <button className="mt-6 bg-green-900 text-white px-6 py-3 rounded-full hover:bg-green-800 text-sm">
            Get Started Today
          </button>
        </div>

        {/* Right is handled via background */}
      </div>

      {/* Right side image as background */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-no-repeat bg-contain bg-right"
        style={{
          backgroundImage: `url(${heroSectionImageURL})`,
          backgroundSize: "contain",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />
    </section>
  );
};

export default HeroSection;
