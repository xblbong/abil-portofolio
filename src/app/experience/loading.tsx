export default function Loading() {
  return (
    <div
      className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
      style={{ background: "linear-gradient(135deg, #03020c 0%, #06041a 50%, #03020c 100%)" }}
    >
      <div className="w-28 h-4 rounded-full mb-12 animate-pulse" style={{ background: "rgba(167,139,250,0.08)" }} />
      <div className="mb-16 space-y-4">
        <div className="w-24 h-3 rounded-full animate-pulse" style={{ background: "rgba(167,139,250,0.1)" }} />
        <div className="w-72 h-12 rounded-2xl animate-pulse" style={{ background: "rgba(167,139,250,0.08)" }} />
        <div className="w-96 h-5 rounded-full animate-pulse mt-2" style={{ background: "rgba(167,139,250,0.05)" }} />
      </div>
      {/* Stats skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-4 rounded-2xl animate-pulse" style={{ background: "rgba(167,139,250,0.05)", border: "1px solid rgba(139,92,246,0.08)" }}>
            <div className="w-9 h-9 rounded-xl mx-auto mb-3" style={{ background: "rgba(167,139,250,0.07)" }} />
            <div className="h-6 w-12 rounded-full mx-auto mb-1" style={{ background: "rgba(167,139,250,0.08)" }} />
            <div className="h-3 w-20 rounded-full mx-auto" style={{ background: "rgba(167,139,250,0.05)" }} />
          </div>
        ))}
      </div>
      {/* Cards skeleton */}
      <div className="grid lg:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-6 rounded-2xl animate-pulse space-y-3" style={{ background: "rgba(167,139,250,0.04)", border: "1px solid rgba(139,92,246,0.07)" }}>
            <div className="h-5 w-24 rounded-full" style={{ background: "rgba(167,139,250,0.08)" }} />
            <div className="h-5 w-3/4 rounded-full" style={{ background: "rgba(167,139,250,0.07)" }} />
            <div className="h-4 w-1/2 rounded-full" style={{ background: "rgba(167,139,250,0.05)" }} />
            <div className="h-3 w-28 rounded-full" style={{ background: "rgba(167,139,250,0.05)" }} />
            <div className="space-y-2 pt-2">
              <div className="h-3 w-full rounded-full" style={{ background: "rgba(167,139,250,0.04)" }} />
              <div className="h-3 w-5/6 rounded-full" style={{ background: "rgba(167,139,250,0.04)" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
