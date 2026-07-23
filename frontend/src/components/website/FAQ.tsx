"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    question: "How does ViralClip AI work?",
    answer:
      "Upload one long video and our AI automatically detects viral moments, generates captions, titles, hashtags, thumbnails and ready-to-publish clips.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "ViralClip AI supports YouTube Shorts, TikTok, Instagram Reels, Facebook Reels, LinkedIn and more.",
  },
  {
    question: "Do I need video editing experience?",
    answer:
      "No. ViralClip AI is designed for beginners and professionals alike. Most tasks are fully automated.",
  },
  {
    question: "Can I export without a watermark?",
    answer:
      "Yes. Creator Pro and Business plans export videos without watermarks.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can upgrade, downgrade or cancel your subscription whenever you want.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-4xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Frequently Asked
            <span className="text-red-500">
              {" "}Questions
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Everything you need to know about ViralClip AI before getting started.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-red-500/40"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <div className="flex items-center gap-3">

                  <HelpCircle className="h-5 w-5 text-red-400" />

                  <span className="font-semibold text-white">
                    {faq.question}
                  </span>

                </div>

                <ChevronDown
                  className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="border-t border-slate-800 px-6 pb-6 pt-5 leading-8 text-slate-400">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}