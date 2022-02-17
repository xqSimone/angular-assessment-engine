export interface Question {
  id: number;
  assessmentId: number;
  type: string;
  text: string;
  sampleSolution: string;
  options: string[];
}
