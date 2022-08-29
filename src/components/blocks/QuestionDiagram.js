
// for debugging
import TestFlowComponent from "../TestFlowComponent";
//

import React from "react";

import ReactFlow, { ReactFlowProvider, useReactFlow , addEdge, applyEdgeChanges, applyNodeChanges,  useNodesState,useEdgesState,} from 'react-flow-renderer';
import { useCallback, useState, useMemo} from 'react';
import HandleChangeableNode from "../organisms/HandleChangeableNode";
import QuestionNode from "../custome_nodes/QuestionNode";
import FormDialog from "../blocks/QuestionDialog";
import Footer from "../blocks/Footer";
import QuestionDialog from "../blocks/QuestionDialog";
import ButtonEdge from "../custome_edge/ButtonEdge";
const Style = {
  backgroundColor: '#B8CEFF',
  height:"100vh"
};







const initialNodes = [
  { id: 'node-1', type: 'handleChangeable', position: { x: 0, y: 0 }, data: { value: 123 } },
  { id: 'node-2', type: 'handleChangeable', position: { x: 200, y: 0 }, data: { value: 123 } },
  {
    id: 'node-3',
    type: 'handleChangeable',
    targetPosition: 'top',
    position: { x: 200, y: 200 },
    data: { label: 'node 3' },
  },
  {
    id: 'node-4',
    type: 'question',
    position: { x: 400, y: 200 },
    data: { body: 'A or B?',answers:["A","B"] },
  }
];

const initialEdges = [
];










const QuestionDiagram = ()=>{
  let nodeId=3
  const reactFlowInstance = useReactFlow();
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const nodeTypes = useMemo(
    () => ({
      question: QuestionNode,handleChangeable: HandleChangeableNode 
    }),
    []
  );
  const edgeTypes = useMemo(
    () => ({
      buttonedge: ButtonEdge 
    }),
    []
  );

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  // const onEdgesChange = useCallback(
  //   (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges]
  // );
  const onConnect = useCallback(
    (connection) => {
      setEdges((eds) => addEdge({...connection,type:'buttonedge'},eds))
    },
    [setEdges]
  );
  const addNode = (data) => {
    console.log(data)
    const question_body = "A or B or C?"
    const answers = ['a','b','c']
    alert()
    const id = `${++nodeId}`;
    const newNode = {
      id,
      type:'question',
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        label: `Node ${id}`,body: question_body,answers:answers
      },
    };
    reactFlowInstance.addNodes(newNode);
  }

  // for debugging
  const showEdges = () => {
    console.log(edges)
  }
  //

  const buttonStyle={position:"absolute",bottom:"80px",right:"30px",  zIndex:10}
  return(
    <>
     <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        style={Style}
      >
      </ReactFlow>
      <QuestionDialog onSubmit={addNode} style={buttonStyle}/>
      <Footer onClickAdd={addNode}/>
      {// for debugging
      }
      <TestFlowComponent onClick={showEdges}/>
      {// for debugging
      }
      <></>
    </>
  );
      
  


  }
  export default function () {
    return (
      <>
        <ReactFlowProvider>
          <QuestionDiagram />
        </ReactFlowProvider>
        <FormDialog />
      </>
    );
  }







