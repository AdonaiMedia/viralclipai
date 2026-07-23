import Link from "next/link";
import {
  Globe,
  PlayCircle,
  Mail,
  MessageCircle,
  Share2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <h3 className="text-3xl font-bold text-white">
              ViralClip
              <span className="text-red-500"> AI</span>
            </h3>

            <p className="mt-5 max-w-md leading-8 text-slate-400">
              Transform long-form videos into viral short-form content
              using the power of Artificial Intelligence.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="#"
                className="rounded-xl border border-slate-800 p-3 text-slate-400 transition hover:border-red-500 hover:text-white"
              >
                <PlayCircle className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="rounded-xl border border-slate-800 p-3 text-slate-400 transition hover:border-red-500 hover:text-white"
              >
               <MessageCircle className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="rounded-xl border border-slate-800 p-3 text-slate-400 transition hover:border-red-500 hover:text-white"
              >
              <Share2 className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="rounded-xl border border-slate-800 p-3 text-slate-400 transition hover:border-red-500 hover:text-white"
              >
               <Mail className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="rounded-xl border border-slate-800 p-3 text-slate-400 transition hover:border-red-500 hover:text-white"
              >
                <Globe className="h-5 w-5" />
              </Link>

            </div>

          </div>

          {/* Product */}

          <div>

            <h4 className="mb-5 font-semibold text-white">
              Product
            </h4>

            <div className="space-y-3">

              <Link href="#features" className="block text-slate-400 hover:text-red-400">
                Features
              </Link>

              <Link href="#pricing" className="block text-slate-400 hover:text-red-400">
                Pricing
              </Link>

              <Link href="/dashboard" className="block text-slate-400 hover:text-red-400">
                Dashboard
              </Link>

              <Link href="#" className="block text-slate-400 hover:text-red-400">
                Roadmap
              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h4 className="mb-5 font-semibold text-white">
              Resources
            </h4>

            <div className="space-y-3">

              <Link href="#" className="block text-slate-400 hover:text-red-400">
                Documentation
              </Link>

              <Link href="#" className="block text-slate-400 hover:text-red-400">
                API
              </Link>

              <Link href="#" className="block text-slate-400 hover:text-red-400">
                Blog
              </Link>

              <Link href="#" className="block text-slate-400 hover:text-red-400">
                Support
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h4 className="mb-5 font-semibold text-white">
              Company
            </h4>

            <div className="space-y-3">

              <Link href="#" className="block text-slate-400 hover:text-red-400">
                About
              </Link>

              <Link href="#" className="block text-slate-400 hover:text-red-400">
                Contact
              </Link>

              <Link href="#" className="block text-slate-400 hover:text-red-400">
                Privacy Policy
              </Link>

              <Link href="#" className="block text-slate-400 hover:text-red-400">
                Terms of Service
              </Link>

            </div>

          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 ViralClip AI. All rights reserved.
          </p>

          <p>
            Built with ❤️ using Next.js, Supabase & AI.
          </p>

        </div>

      </div>

    </footer>
  );
}