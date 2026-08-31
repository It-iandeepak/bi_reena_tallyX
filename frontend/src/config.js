// In production VITE_API_URL should be the full URL (e.g. https://backend.vercel.app)
// In local development, we leave it empty so requests use relative paths (e.g. /api/...)
// which allows the Vite proxy to forward them securely without Mixed Content errors.
export const API_BASE_URL = import.meta.env.VITE_API_URL || '';
