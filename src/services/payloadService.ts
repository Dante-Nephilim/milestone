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

export const loginUser = async (email: string, password: string) => {
  const res = await axios.post(`${API_BASE}/api/users/login`, { email, password }, { withCredentials: true });
  return res.data;
};

export const signupUser = async (email: string, password: string) => {
  const res = await axios.post(`${API_BASE}/api/users`, { email, password }, { withCredentials: true });
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.post(`${API_BASE}/api/users/logout`, {}, { withCredentials: true });
  return res.data;
};
