export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              ViralClip AI
            </h3>

            <p className="leading-7 text-slate-400">
              Transform long videos into viral shorts using the power of AI.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Product
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Dashboard</li>
              <li>Roadmap</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Resources
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>Documentation</li>
              <li>API</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Company
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          © 2026 ViralClip AI. All rights reserved.
        </div>

      </div>
    </footer>
  );
}