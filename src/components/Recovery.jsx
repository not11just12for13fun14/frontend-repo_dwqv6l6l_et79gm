export default function Recovery({ data }) {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        {data.pillars.map((p, i) => (
          <div key={i} className="p-5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60">
            <h4 className="text-white font-semibold mb-2">{p.name}</h4>
            {p.checklist && (
              <ul className="list-disc list-inside text-blue-100/90 space-y-1">
                {p.checklist.map((c, j) => (
                  <li key={j}>{c}</li>
                ))}
              </ul>
            )}
            {p.stretches && (
              <ul className="text-blue-100/90 space-y-1">
                {p.stretches.map((s, j) => (
                  <li key={j} className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5">
                    <span>{s.name}</span>
                    <span className="text-xs text-blue-200/70">{s.time}</span>
                  </li>
                ))}
              </ul>
            )}
            {p.routines && (
              <ul className="text-blue-100/90 space-y-1">
                {p.routines.map((r, j) => (
                  <li key={j} className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5">
                    <span>{r.name}</span>
                    <span className="text-xs text-blue-200/70">{r.pattern ? r.pattern + " • " : ""}{r.duration}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-white/5">
        <h4 className="text-white font-semibold mb-2">After your workout</h4>
        <ul className="grid sm:grid-cols-3 gap-2">
          {data.post_workout.map((x, i) => (
            <li key={i} className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/60 text-blue-100/90">{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
