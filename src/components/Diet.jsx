export default function Diet({ data }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-white font-semibold mb-2">Key tips</h3>
        <ul className="grid sm:grid-cols-2 gap-2">
          {data.tips.map((t, i) => (
            <li key={i} className="px-4 py-3 rounded-xl bg-white/5 text-blue-100/90">{t}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-2">Quick meals</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {data.meals.map((m, i) => (
            <div key={i} className="p-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-white font-medium">{m.name}</h4>
                <span className="text-xs text-blue-200/70">{m.time}</span>
              </div>
              <p className="text-xs text-blue-200/70 mb-2">{m.calories} kcal • P{m.protein} C{m.carbs} F{m.fat}</p>
              <div className="flex flex-wrap gap-2">
                {m.ingredients.map((ing, j) => (
                  <span key={j} className="text-xs px-2 py-1 rounded-lg bg-white/5 text-blue-100/80">{ing}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-2">Hydration</h3>
        <div className="p-4 rounded-2xl bg-white/5">
          <p className="text-blue-100/90 mb-3">{data.hydration.note}</p>
          <div className="flex gap-3 flex-wrap">
            {data.hydration.liters_per_day_by_weight.map((h, i) => (
              <div key={i} className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700/60 text-blue-100/90">
                <span className="text-white font-semibold mr-2">{h.weight_lb}lb</span>
                <span>{h.liters} L/day</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
