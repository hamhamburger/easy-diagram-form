function createDataStructure(edges: any,nodes: any) {
  const array = []
  const questions = nodes.map((node: any) => {
    // @ts-expect-error TS(7022): 'obj' implicitly has type 'any' because it does no... Remove this comment to see the full error message
    const obj = {}
    // @ts-expect-error TS(2448): Block-scoped variable 'obj' used before its declar... Remove this comment to see the full error message
    (obj as any).id = node.id;
    (obj as any).label = node.data.label;
    (obj as any).type = node.type;
    if (node.type === 'question'){
      (obj as any).arrows = [];
    }
    return obj
  })

  edges.map((edge: any) => {
   
    const question = questions.find((question: any) => question.id === edge.source)
    question.arrows.push({
      answer:edge.label,
      to:edge.target
    })
  })

  return questions
}

export default createDataStructure
