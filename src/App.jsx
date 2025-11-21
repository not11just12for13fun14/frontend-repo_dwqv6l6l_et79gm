import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Diet from "./components/Diet";
import Workouts from "./components/Workouts";
import Recovery from "./components/Recovery";

const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

function App() {
  const [currentTab, setCurrentTab] = useState("diet");
  const [diet, setDiet] = useState(null);
  const [workouts, setWorkouts] = useState(null);
  const [recovery, setRecovery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const [d, w, r] = await Promise.all([
          fetch(`${baseUrl}/api/diet`).then((res) => res.json()),
          fetch(`${baseUrl}/api/workouts`).then((res) => res.json()),
          fetch(`${baseUrl}/api/recovery`).then((res) => res.json()),
        ]);
        setDiet(d);
        setWorkouts(w);
        setRecovery(r);
      } catch (e) {
        setError("Could not load data. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(56,189,248,0.15),transparent_60%)]" />
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main className="relative max-w-6xl mx-auto px-4 py-8 space-y-6">
        <div className="text-center py-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Your Simple, Fantastic Gym Coach</h1>
          <p className="text-blue-200/80 mt-2">Three essentials: Diet • Workout • Recovery</p>
        </div>

        {loading && (
          <div className="text-center text-blue-200/80">Loading your plan…</div>
        )}
        {error && (
          <div className="text-center text-red-300">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className={currentTab !== "diet" ? "opacity-50 lg:opacity-100" : ""}>
              <Section title="Diet" subtitle="Fuel smart, feel strong">
                {diet && <Diet data={diet} />}
              </Section>
            </div>
            <div className={currentTab !== "workout" ? "opacity-50 lg:opacity-100" : ""}>
              <Section title="Workout" subtitle="Clear, effective training plans">
                {workouts && <Workouts data={workouts} />}
              </Section>
            </div>
            <div className={currentTab !== "recovery" ? "opacity-50 lg:opacity-100" : ""}>
              <Section title="Recovery" subtitle="Rest, rebuild, repeat">
                {recovery && <Recovery data={recovery} />}
              </Section>
            </div>
          </div>
        )}

        <div className="text-center text-blue-300/60 text-sm pt-4">
          Tip: Switch tabs above to focus each section on small screens.
        </div>
      </main>
    </div>
  );
}

export default App;
