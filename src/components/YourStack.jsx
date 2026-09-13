/* eslint-disable react/prop-types */
import StackItem from "./StackItem.jsx";

export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="lg:sticky lg:top-24 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-display font-bold text-lg text-ink">Your Stack</h3>
      </div>
      <p className="text-sm text-muted mb-4" aria-live="polite">
        {count} {count === 1 ? "Technology" : "Technologies"} Selected
      </p>

      {count === 0 ? (
        <div className="text-center py-10 px-2">
          <p className="text-sm text-muted">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          <ul className="flex flex-col gap-2">
            {stack.map((tech) => (
              <StackItem key={tech.id} tech={tech} onRemove={onRemove} />
            ))}
          </ul>
          <button
            onClick={onRemoveAll}
            className="mt-4 w-full py-2.5 rounded-xl text-sm font-semibold text-rose-600 border border-rose-200 hover:bg-rose-50 transition-colors"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}
