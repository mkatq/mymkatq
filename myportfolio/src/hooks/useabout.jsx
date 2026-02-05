// hooks/useabout.jsx
import { useState, useEffect } from "react";
import { apiFetch } from "../config/api";

export function useAbout() {
  const [about, setAbout] = useState(null); // single object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadAbout() {
      try {
        const data = await apiFetch("/about"); // backend returns a single object
        setAbout(data); // directly set object
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadAbout();
  }, []);

  return { about, loading, error };
}
