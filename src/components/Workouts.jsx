export default function Workouts({ data }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {data.programs.map((p, i) => (
        <div key={i} className="p-5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h4 className="text-white font-semibold">{p.name}</h4>
              <p className="text-xs text-blue-200/70">{p.level} • {p.days} days/week</p>
            </div>
            <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-blue-100/80">Plan</span>
          </div>
          <ul className="space-y-2">
            {p.exercises.map((e, j) => (
              <li key={j} className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 text-blue-100/90">
                <span>{e.name}</span>
                <span className="text-xs text-blue-200/70">{e.sets} x {e.reps}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
