function createDataStructure(edges,nodes) {
  

  const array = []

  const questions = nodes.map(node => {
    const obj = {}
    obj.id = node.id
    obj.label = node.data.label
    obj.type = node.type
    if (node.type === 'question'){
      obj.arrows = []
    }
    return obj
  })


  edges.map((edge) => {
   
    const question = questions.filter(question => question.id === edge.source)[0]
    question.arrows.push({
      answer:edge.label,
      to:edge.target
    })
  })
  console.log(questions)
  return questions
}

export default createDataStructure
