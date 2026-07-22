export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 font-bold text-white">
            V
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              ViralClip AI
            </h1>

            <p className="text-xs text-gray-400">
              AI Video Platform
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Demo</a>
          <a href="#">Docs</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-300 hover:text-white">
            Login
          </button>

          <button className="rounded-xl bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-500">
            Start Free
          </button>
        </div>

      </div>
    </header>
  );
}