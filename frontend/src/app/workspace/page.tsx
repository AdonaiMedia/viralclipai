"use client";
import PublishingCenter from "@/components/workspace/PublishingCenter";
import AIDirectorPanel from "@/components/workspace/AIDirectorPanel";
import ThumbnailStudio from "@/components/workspace/ThumbnailStudio";
import DashboardLayout from "@/components/layout/DashboardLayout";
import MissionTimeline from "@/components/workspace/MissionTimeline";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function WorkspacePage() {
const workflowSteps = [
  { name: "Upload Complete", completed: true },
  { name: "Video Inspection", completed: true },
  { name: "Audio Inspection", completed: true },
  { name: "Transcription", completed: true },
  { name: "AI Analysis", completed: true },
  { name: "Viral Moment Detection", completed: false },
  { name: "Clip Generation", completed: false },
  { name: "Title Generation", completed: false },
  { name: "Thumbnail Generation", completed: false },
  { name: "Publishing Ready", completed: false },
];
 const thumbnails = [
  {
    id: 1,
    image: "https://placehold.co/600x400",
    score: 95,
    recommended: true,
  },
  {
    id: 2,
    image: "https://placehold.co/600x400",
    score: 90,
  },
  {
    id: 3,
    image: "https://placehold.co/600x400",
    score: 87,
  },
];
const directorReport = [
  {
    id: 1,
    message: "Lighting is excellent.",
  },
  {
    id: 2,
    message: "Move camera slightly closer.",
  },
  {
    id: 3,
    message: "Thumbnail #2 has the highest predicted CTR.",
  },
  {
    id: 4,
    message: "Best platform: YouTube Shorts.",
  },
];
const platforms = [
  { id: "youtube", name: "YouTube", connected: true },
  { id: "facebook", name: "Facebook", connected: false },
  { id: "instagram", name: "Instagram", connected: false },
  { id: "tiktok", name: "TikTok", connected: false },
  { id: "threads", name: "Threads", connected: false },
  { id: "x", name: "X", connected: false },
  { id: "linkedin", name: "LinkedIn", connected: false },
  { id: "pinterest", name: "Pinterest", connected: false },
];
return (

    <DashboardLayout>
<MissionTimeline

  steps={workflowSteps}
/>
      <Section title="🎥 AI Workspace">

        <div className="grid gap-6">

          <Card>

            <h3 className="text-xl font-bold mb-4">

              Video Preview

            </h3>

            <p className="text-slate-400">

              Selected video will appear here.

            </p>

          </Card>

          <Card>

            <h3 className="text-xl font-bold mb-4">

              AI Analysis

            </h3>

            <p className="text-slate-400">

              AI intelligence will appear here.

            </p>

          </Card>

          <Card>

            <h3 className="text-xl font-bold mb-4">

              Generated Clips

            </h3>

            <p className="text-slate-400">

              Generated clips will appear here.

            </p>

          </Card>

          <Card>

            <h3 className="text-xl font-bold mb-4">

              AI Tools

            </h3>

            <p className="text-slate-400">

              Titles, hashtags, thumbnails and publishing tools.
<AIDirectorPanel
  score={92}
  recommendations={directorReport}
/>
<PublishingCenter platforms={platforms} />
            </p>

          </Card>

        </div>

      </Section>

    </DashboardLayout>

  );

}