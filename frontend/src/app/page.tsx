export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold">ViralClip AI</h1>

        <div className="flex gap-6">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Login</a>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">
          ViralClip AI
        </h1>

        <p className="text-2xl mb-4">
          Transform Long Videos Into Viral Reels
        </p>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Upload a long video and let AI automatically find the best moments,
          generate captions, and create viral-ready clips.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 px-6 py-3 rounded-lg">
            Start Free
          </button>

          <button className="border border-gray-500 px-6 py-3 rounded-lg">
            Watch Demo
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              AI Clip Detection
            </h3>
            <p>
              Automatically find the most engaging moments.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              Auto Captions
            </h3>
            <p>
              Generate captions instantly using AI.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              Multi Platform Export
            </h3>
            <p>
              Export for TikTok, Reels, Shorts and Facebook.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold text-center mb-12">
    Pricing
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-slate-800 p-6 rounded-xl">
      <h3 className="text-2xl font-bold mb-4">Free</h3>
      <p className="mb-4">5 clips per month</p>
      <p>Watermark Included</p>
    </div>

    <div className="bg-slate-800 p-6 rounded-xl">
      <h3 className="text-2xl font-bold mb-4">Pro</h3>
      <p className="mb-4">$19/month</p>
      <p>No Watermark</p>
    </div>

    <div className="bg-slate-800 p-6 rounded-xl">
      <h3 className="text-2xl font-bold mb-4">Business</h3>
      <p className="mb-4">$49/month</p>
      <p>Unlimited Exports</p>
    </div>
  </div>
</section>
    </main>
  );
}