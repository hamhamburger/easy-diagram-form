import { Question } from "components/interface";
function createDataStructure(edges: any, nodes: any):Question[] {
  const questions = nodes.map((node: any) => {

    const obj:Question = {id:parseInt(node.id),label:node.data.label,type:node.type,arrows:[]}

    if (node.type === 'question'){
      obj.arrows = [];
    }
    return obj
  })

  edges.forEach((edge: any) => {
    const targetQuestion = questions.find((question: Question) => question.id === parseInt(edge.source))
    targetQuestion.arrows.push({
      answer:edge.label,
      to:parseInt(edge.target)
    })
  })

  return questions
}

export default createDataStructure
