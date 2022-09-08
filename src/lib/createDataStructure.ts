import { Question } from "components/interface";
function createDataStructure(edges: any, nodes: any):Question[] {
  const questions = nodes.map((node: any) => {

    const obj:Question = {id:node.id,label:node.data.label,type:node.data.type,arrows:[]}

    if (node.type === 'question'){
      (obj as any).arrows = [];
    }
    return obj
  })

  edges.forEach((edge: any) => {
    const targetQuestion = questions.find((question: any) => question.id === edge.source)
    targetQuestion.arrows.push({
      answer:edge.label,
      to:edge.target
    })
  })

  return questions
}

export default createDataStructure
