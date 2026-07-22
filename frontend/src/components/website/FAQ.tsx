"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-16 text-center">

          <p className="mb-3 font-semibold text-red-500">
            FAQ
          </p>

          <h2 className="text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="rounded-2xl border border-slate-800 bg-slate-950"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <span className="font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="border-t border-slate-800 px-6 pb-6 pt-4 text-slate-400 leading-7">
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