import { Menu } from "lucide-react";

export default function Navbar({ currentTab, setCurrentTab }) {
  const tabs = [
    { key: "diet", label: "Diet" },
    { key: "workout", label: "Workout" },
    { key: "recovery", label: "Recovery" },
  ];

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30 grid place-items-center">
            <span className="text-white font-bold">GYM</span>
          </div>
          <span className="text-white/90 font-semibold tracking-wide">Coach</span>
        </div>

        <nav className="hidden sm:flex items-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setCurrentTab(t.key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                currentTab === t.key
                  ? "bg-blue-500 text-white shadow shadow-blue-500/40"
                  : "text-blue-200/80 hover:text-white hover:bg-white/5"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <button className="sm:hidden p-2 rounded-lg text-blue-200/80 hover:text-white hover:bg-white/5">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
