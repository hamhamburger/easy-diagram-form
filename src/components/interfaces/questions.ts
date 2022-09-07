export interface QuestionInterface{
  id: number,
  label: string,
  arrows: Arrow[]
}
interface Arrow{
  to: number,
  answer: string
}