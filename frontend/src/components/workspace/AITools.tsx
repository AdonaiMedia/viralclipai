"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function AITools() {

  return (

    <Card>

      <h2 className="text-xl font-bold mb-4">

        🚀 AI Tools

      </h2>

      <div className="grid grid-cols-2 gap-4">

        <Button>

          Generate Titles

        </Button>

        <Button>

          Generate Hashtags

        </Button>

        <Button>

          Generate Caption

        </Button>

        <Button>

          Generate Thumbnail

        </Button>

      </div>

    </Card>

  );

}