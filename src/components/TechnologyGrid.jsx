import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard.jsx";

export default function TechnologyGrid({ stackIds, onAdd, children }) {
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load technology data from the local JSON file, not a hardcoded array.
  useEffect(() => {
    let isMounted = true;

    fetch("/technologies.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load technologies");
        return res.json();
      })
      .then((data) => {
        if (isMounted) setTechnologies(data);
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="technologies"
      className="scroll-mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center md:text-left mb-10">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
          Explore the <span className="text-gradient">Technologies</span>
        </h2>
        <p className="text-muted mt-2 max-w-2xl mx-auto md:mx-0">
          Pick the pieces that fit your workflow — every card adds straight to your stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
        {isLoading ? (
          <div className="flex items-center justify-center py-24 text-muted gap-3 lg:col-span-1">
            <span className="w-5 h-5 border-2 border-gray-300 border-t-violet-600 rounded-full animate-spin" />
            Loading technologies…
          </div>
        ) : error ? (
          <p className="text-rose-600 py-12">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                isAdded={stackIds.has(tech.id)}
                onAdd={onAdd}
              />
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
