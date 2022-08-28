import React from "react";

import ReactFlow, { ReactFlowProvider, useReactFlow , addEdge, applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';
import { useCallback, useState, useMemo} from 'react';
import HandleChangeableNode from "../organisms/HandleChangeableNode";
import QuestionNode from "../custome_nodes/QuestionNode";
import FormDialog from "../blocks/QuestionDialog";
import Footer from "../blocks/Footer";

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
  const [edges, setEdges] = useState(initialEdges);
  const nodeTypes = useMemo(
    () => ({
      question: QuestionNode,handleChangeable: HandleChangeableNode 
    }),
    []
  );

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => {
      setEdges((eds) => addEdge({...connection,label:connection.sourceHandle,type:'step'},eds))
    },
    [setEdges]
  );
  const addNode = useCallback(() => {
    
    const id = `${++nodeId}`;
    const newNode = {
      id,
      type:'question',
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        label: `Node ${id}`,body: 'A or B?',answers:["A","B"]
      },
    };
    reactFlowInstance.addNodes(newNode);
  }, []);




  const buttonStyle={position:"absolute",top:"30px",left:"30px",  zIndex:10}
  return(
    <>
     <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        style={Style}
      >
      </ReactFlow>
      <button onClick={addNode} className="btn-add" style={buttonStyle}>addnode</button>
      <Footer />
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







