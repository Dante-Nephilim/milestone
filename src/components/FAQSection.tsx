import { useEffect, useState } from "react";
import { fetchFAQs } from "../services/payloadService";

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

const FAQSection = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    fetchFAQs().then(setFaqs);
  }, []);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
        {/* Left Text */}
        <div className="max-w-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-green-950 mb-4 leading-snug">
            Frequently asked <br /> questions
          </h2>
          <p className="text-sm text-gray-700">Find answers to common questions and get the information you need!</p>
        </div>

        {/* Right FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={faq.id} className="border-b border-gray-300">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full py-4 text-left font-semibold text-green-950 flex justify-between items-start focus:outline-none"
              >
                <span className="text-sm md:text-base leading-snug">{faq.question}</span>
                <span className="text-green-900 ml-2">{activeIndex === idx ? "▴" : "▾"}</span>
              </button>
              {activeIndex === idx && (
                <div className="pb-4 pr-8 text-sm text-gray-700 leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}

          <div className="pt-4">
            <button className="px-6 py-2 text-sm border border-green-900 text-green-900 rounded-full hover:bg-green-50 transition">
              View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
