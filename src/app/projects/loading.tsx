export default function Loading() {
  return (
    <div
      className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
      style={{ background: "linear-gradient(135deg, #03020c 0%, #06041a 50%, #03020c 100%)" }}
    >
      {/* Back skeleton */}
      <div className="w-28 h-4 rounded-full mb-12 animate-pulse" style={{ background: "rgba(167,139,250,0.08)" }} />

      {/* Header skeleton */}
      <div className="mb-14 space-y-4">
        <div className="w-20 h-3 rounded-full animate-pulse" style={{ background: "rgba(167,139,250,0.1)" }} />
        <div className="w-64 h-12 rounded-2xl animate-pulse" style={{ background: "rgba(167,139,250,0.08)" }} />
        <div className="w-80 h-12 rounded-2xl animate-pulse" style={{ background: "rgba(167,139,250,0.05)" }} />
        <div className="w-96 h-5 rounded-full animate-pulse mt-4" style={{ background: "rgba(167,139,250,0.05)" }} />
      </div>

      {/* Tab skeleton */}
      <div className="flex gap-2 mb-12">
        {[80, 90, 80, 80].map((w, i) => (
          <div key={i} className="h-9 rounded-full animate-pulse" style={{ width: w, background: "rgba(167,139,250,0.07)" }} />
        ))}
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-[1.75rem] overflow-hidden animate-pulse"
            style={{ background: "rgba(167,139,250,0.05)", border: "1px solid rgba(139,92,246,0.08)" }}
          >
            <div className="aspect-video" style={{ background: "rgba(167,139,250,0.07)" }} />
            <div className="p-5 space-y-3">
              <div className="h-4 w-3/4 rounded-full" style={{ background: "rgba(167,139,250,0.07)" }} />
              <div className="h-3 w-full rounded-full" style={{ background: "rgba(167,139,250,0.05)" }} />
              <div className="h-3 w-2/3 rounded-full" style={{ background: "rgba(167,139,250,0.04)" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
