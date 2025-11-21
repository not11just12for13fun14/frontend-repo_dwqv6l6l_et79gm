export default function Section({ title, subtitle, children }) {
  return (
    <section className="relative rounded-3xl border border-slate-700/50 bg-slate-800/40 backdrop-blur p-6 sm:p-8 text-blue-100 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1500px_500px_at_-10%_-10%,rgba(56,189,248,0.12),transparent_50%)]" />
      <div className="relative">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-1">{title}</h2>
        {subtitle && <p className="text-blue-200/80 mb-6">{subtitle}</p>}
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
}
