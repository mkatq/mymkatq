// hooks/useEducations.jsx
import { useState, useEffect } from "react";
import { apiFetch } from "../config/api";

export function useEducations() {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadEducations() {
      try {
        const data = await apiFetch("/educations"); // backend endpoint
        setEducations(data); // assuming backend returns an array of Educations
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadEducations();
  }, []);

  return { educations, loading, error };
}
