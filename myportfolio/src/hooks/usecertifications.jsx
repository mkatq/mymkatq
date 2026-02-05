// hooks/usecert.jsx
import { useState, useEffect } from "react";
import { apiFetch } from "../config/api";

export function usecertifications() {
  const [certifications, setcert] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadcert() {
      try {
        const data = await apiFetch("/certificates"); // backend endpoint
        setcert(data); // assuming backend returns an array of cert
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadcert();
  }, []);

  return { certifications, loading, error };
}
