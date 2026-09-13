/* eslint-disable react/prop-types */
export default function StackItem({ tech, onRemove }) {
  return (
    <li className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
      <img src={tech.icon} alt="" width="28" height="28" className="w-7 h-7 object-contain shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-ink truncate">{tech.name}</p>
        <p className="text-xs text-muted truncate">{tech.category}</p>
      </div>
      <button
        onClick={() => onRemove(tech.id)}
        aria-label={`Remove ${tech.name} from your stack`}
        className="w-7 h-7 shrink-0 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-rose-500 transition-colors"
      >
        ✕
      </button>
    </li>
  );
}
