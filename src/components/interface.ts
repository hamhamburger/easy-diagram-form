export interface Question {
  id: number;
  label: string;
  arrows: Arrow[];
  type: "result" | "question";
}
interface Arrow {
  to: number;
  answer: string;
}

export interface DialogInfo {
  body: string;
  url?: string;
}

export interface Form {
  questions: Question[]
  title: string
  id: string
}
