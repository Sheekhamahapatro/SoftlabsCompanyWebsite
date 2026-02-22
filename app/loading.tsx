export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
      {/* Slim top progress bar */}
      <div
        className="absolute left-0 top-0 h-0.5 w-full overflow-hidden bg-slate-100"
        role="progressbar"
        aria-label="Loading page"
      >
        <div
          className="h-full w-2/5 animate-loading-bar rounded-r-full bg-linear-to-r from-violet-600 via-indigo-600 to-violet-600"
          aria-hidden
        />
      </div>

      {/* Centered loader */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative" aria-hidden>
          {/* Outer ring */}
          <div className="h-16 w-16 animate-spin rounded-full border-2 border-slate-200 border-t-transparent" />
          {/* Inner gradient ring */}
          <div
            className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-violet-600 border-r-indigo-500"
            style={{ animationDuration: "0.8s", animationDirection: "reverse" }}
          />
          {/* Center dot */}
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm font-semibold text-slate-700">Loading</p>
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" style={{ animationDelay: "0ms" }} />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" style={{ animationDelay: "150ms" }} />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
