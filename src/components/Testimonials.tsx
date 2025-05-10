import { useEffect, useState } from "react";
import { fetchTestimonials } from "../services/payloadService";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: {
    url: string;
    alt?: string;
  };
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetchTestimonials().then(setTestimonials);
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900">Success we've achieved together</h2>
        <p className="mt-2 text-sm text-gray-600">
          Together, we celebrate every milestone—turning challenges into achievements and goals into reality.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 text-left shadow-sm">
              <p className="text-sm text-gray-800 mb-4">
                <span className="text-green-800 text-3xl leading-none">“</span>
                {t.quote}
              </p>
              <div className="flex items-center mt-6">
                <img
                  src={`${import.meta.env.VITE_PAYLOAD_API_BASE}${t.image.url}`}
                  alt={t.image.alt || t.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="text-sm font-medium text-green-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-10 px-6 py-2 text-sm border border-green-700 text-green-700 rounded-full hover:bg-green-50">
          View All
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
