"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { AIService } from "../../services/aiService";

export default function AITools() {
  const [output, setOutput] = useState("");

  const handleGenerateTitle = async () => {
    const result = await AIService.title("Jesus Christ");
    setOutput(result);
  };

  const handleGenerateHashtags = async () => {
    const result = await AIService.hashtags("Jesus Christ");
    setOutput(result.join(" "));
  };

  const handleGenerateCaption = async () => {
    const result = await AIService.caption({
      topic: "Jesus Christ",
      platform: "youtube",
      language: "English",
    });

    setOutput(result);
  };

  return (
    <Card>
      <h2 className="text-xl font-bold mb-4">
        🚀 AI Tools
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <Button onClick={handleGenerateTitle}>
          Generate Titles
        </Button>

        <Button onClick={handleGenerateHashtags}>
          Generate Hashtags
        </Button>

        <Button onClick={handleGenerateCaption}>
          Generate Caption
        </Button>

        <Button>
          Generate Thumbnail
        </Button>

      </div>

      {output && (
        <div className="mt-6 rounded-lg border p-4">
          <h3 className="font-semibold mb-2">AI Output</h3>

          <pre className="whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </Card>
  );
}