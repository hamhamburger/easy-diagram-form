function createDataStructure(edges,nodes) {
  

  const sample = [
    {id:1,label:"A or B?",arrows:[{answer:'A',to:2},{answer:'B',to:3}]}

  ]
  const array = []

  const questions = nodes.map(node => {
    const obj = {arrows:[]}
    obj.id = node.id
    obj.label = node.data.label
    return obj
  })


  edges.map((edge) => {
   
    const question = questions.filter(question => question.id === edge.source)[0]
    question.arrows.push({
      answer:edge.label,
      to:edge.target
    })
  })
  return questions
}

createDataStructure()
