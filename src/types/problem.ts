export interface Problem {
  id: number;
  topic: number;
  topicName: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}