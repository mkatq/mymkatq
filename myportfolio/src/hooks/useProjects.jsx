// hooks/useProjects.jsx
import { useState, useEffect } from "react";
import { apiFetch } from "../config/api";

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await apiFetch("/projects/"); // backend endpoint
        setProjects(data); // assuming backend returns an array of projects
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return { projects, loading, error };
}
