// config/api.jsx
const API_BASE_URL = "https://mesharialtawfiq.com/api"; 

export async function apiFetch(endpoint) {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "API Error");
    }
    return res.json();
  } catch (err) {
    console.error("API fetch error:", err.message);
    throw err;
  }
}
