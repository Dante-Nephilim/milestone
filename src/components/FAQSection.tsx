import { useState } from "react";

const faqs = [
  {
    question: "What makes Milestone Learning different from other tutoring services?",
    answer:
      "We specialize in one-on-one, highly personalized tutoring that goes beyond just helping students with homework. Our expert tutors focus on structure, confidence-building, and academic strategy, ensuring that students not only improve their grades but also develop lifelong learning skills.",
  },
  {
    question: "Who are your tutors?",
    answer:
      "All tutors are rigorously vetted and trained educators with experience in delivering impactful, student-centered instruction.",
  },
  {
    question: "How do you match students with tutors?",
    answer:
      "We evaluate each student’s academic profile, learning style, and goals to match them with the ideal tutor.",
  },
  {
    question: "Do you offer in-person tutoring?",
    answer: "Currently, we focus on online tutoring to ensure accessibility and flexibility across time zones.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Text */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
          <p className="text-sm text-gray-600">Find answers to common questions and get the information you need.</p>
        </div>

        {/* Right FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-md bg-white">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-4 py-3 text-left font-medium text-gray-800 flex justify-between items-center focus:outline-none"
              >
                {faq.question}
                <span className="ml-2">{activeIndex === idx ? "−" : "+"}</span>
              </button>
              {activeIndex === idx && <div className="px-4 pb-4 text-sm text-gray-600">{faq.answer}</div>}
            </div>
          ))}

          <button className="mt-4 px-5 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-100">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
