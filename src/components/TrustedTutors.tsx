import { getMediaUrl } from "../services/payloadService";

const institutions = [
  getMediaUrl("columbia.png"),
  getMediaUrl("harward-2.png"),
  getMediaUrl("stooney.png"),
  getMediaUrl("columbia.png"),
  getMediaUrl("harward-2.png"),
  getMediaUrl("stooney.png"),
];

const TrustedTutors = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-10">Tutors you can trust from</h2>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {institutions.map((src, idx) => (
            <div
              key={idx}
              className="w-24 h-24 rounded-xl shadow-sm bg-white flex items-center justify-center border border-gray-100"
            >
              <img src={src} alt={`Institution ${idx + 1}`} className="w-[70px] h-[70px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedTutors;
