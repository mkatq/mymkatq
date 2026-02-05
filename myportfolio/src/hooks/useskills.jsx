// hooks/useSkills.jsx
import { useState, useEffect } from "react";
import { apiFetch } from "../config/api";

export function useSkills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSkills() {
      try {
        const data = await apiFetch("/skills/"); // backend endpoint
        setSkills(data); // assuming backend returns an array of Skills
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadSkills();
  }, []);

  return { skills, loading, error };
}
