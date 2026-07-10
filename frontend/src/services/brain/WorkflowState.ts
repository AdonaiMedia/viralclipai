export type WorkflowStep =
  | "upload"
  | "inspection"
  | "transcription"
  | "analysis"
  | "viral"
  | "clips"
  | "titles"
  | "thumbnails"
  | "publishing";

export interface WorkflowStatus {
  step: WorkflowStep;
  completed: boolean;
  startedAt?: Date;
  finishedAt?: Date;
}

export class WorkflowState {

  private steps: WorkflowStatus[];

  constructor() {

    this.steps = [
      {
        step: "upload",
        completed: false,
      },
      {
        step: "inspection",
        completed: false,
      },
      {
        step: "transcription",
        completed: false,
      },
      {
        step: "analysis",
        completed: false,
      },
      {
        step: "viral",
        completed: false,
      },
      {
        step: "clips",
        completed: false,
      },
      {
        step: "titles",
        completed: false,
      },
      {
        step: "thumbnails",
        completed: false,
      },
      {
        step: "publishing",
        completed: false,
      },
    ];

  }

  start(step: WorkflowStep): void {

    const item = this.steps.find(
      (s) => s.step === step
    );

    if (!item) return;

    item.startedAt = new Date();

  }

  complete(step: WorkflowStep): void {

    const item = this.steps.find(
      (s) => s.step === step
    );

    if (!item) return;

    item.completed = true;
    item.finishedAt = new Date();

  }

  get(step: WorkflowStep): WorkflowStatus | undefined {

    return this.steps.find(
      (s) => s.step === step
    );

  }

  getAll(): WorkflowStatus[] {

    return [...this.steps];

  }

  reset(): void {

    this.steps.forEach((step) => {

      step.completed = false;
      step.startedAt = undefined;
      step.finishedAt = undefined;

    });

  }

}