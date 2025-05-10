import { useEffect, useState } from "react";
import { fetchLearningStages } from "../services/payloadService";

type LearningStage = {
  title: string;
  description: string;
  icon?: {
    url: string;
  };
};

const LearningSupport = () => {
  const [stages, setStages] = useState<LearningStage[]>([]);

  useEffect(() => {
    fetchLearningStages().then(setStages);
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900">Support for every stage of learning</h2>
        <p className="mt-2 text-sm text-gray-600">
          From foundational skills to advanced academics, we’re with you every step of the way.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="flex border border-green-600 rounded-xl bg-white hover:shadow-md transition overflow-hidden"
            >
              {stage.icon?.url && (
                <div className="bg-green-50 flex items-center justify-center w-[80px] h-[108px] shrink-0">
                  <img
                    src={`${import.meta.env.VITE_PAYLOAD_API_BASE}${stage.icon.url}`}
                    alt={stage.title}
                    className="object-contain w-full h-full"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-green-800 font-bold text-base mb-1">{stage.title}</h3>
                <p className="text-sm text-gray-700">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSupport;
