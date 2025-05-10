import axios from "axios";
const API_BASE = import.meta.env.VITE_PAYLOAD_API_BASE;

export const getMediaUrl = (filename: string): string => {
  return `${API_BASE}/api/media/file/${filename}`;
};

export const fetchLearningStages = async () => {
  const res = await axios.get(`${API_BASE}/api/learning-support?depth=1`);
  return res.data.docs;
};

export const fetchTestimonials = async () => {
  const res = await axios.get(`${API_BASE}/api/testimonials?depth=1`);
  return res.data.docs;
};

export const fetchArticles = async () => {
  const res = await axios.get(`${API_BASE}/api/articles?depth=1`);
  return res.data.docs;
};

export const fetchFAQs = async () => {
  const res = await axios.get(`${API_BASE}/api/faqs?sort=order`);
  return res.data.docs;
};
