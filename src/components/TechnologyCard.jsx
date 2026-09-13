const DIFFICULTY_STYLES = {
  "Beginner-Friendly": "bg-emerald-50 text-emerald-600",
  Intermediate: "bg-amber-50 text-amber-600",
  Advanced: "bg-rose-50 text-rose-600",
};

export default function TechnologyCard({ tech, isAdded, onAdd }) {
  const difficultyStyle = DIFFICULTY_STYLES[tech.difficulty] || "bg-gray-100 text-gray-600";

  return (
    <div className="flex flex-col bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          width="40"
          height="40"
          className="w-10 h-10 object-contain"
          loading="lazy"
        />
        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-brand-gradient text-white">
          {tech.badge}
        </span>
      </div>

      <h3 className="font-display font-bold text-lg text-ink mt-4">{tech.name}</h3>
      <p className="text-sm text-muted mt-1 flex-1">{tech.description}</p>

      <div className="flex items-center flex-wrap gap-2 mt-4">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-50 text-violet-600">
          {tech.category}
        </span>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${difficultyStyle}`}>
          {tech.difficulty}
        </span>
        <span className="text-xs font-semibold text-ink/80 flex items-center gap-1 ml-auto">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="#FF7A18" aria-hidden="true">
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85z" />
          </svg>
          {tech.rating.toFixed(1)}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-4 w-full py-2.5 rounded-xl text-sm font-semibold transition-colors ${
          isAdded
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-ink text-white hover:bg-black"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
