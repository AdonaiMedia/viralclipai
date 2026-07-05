"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function WorkspacePage() {

  return (

    <DashboardLayout>

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

            </p>

          </Card>

        </div>

      </Section>

    </DashboardLayout>

  );

}