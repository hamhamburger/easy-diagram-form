
// for debugging
import TestFlowComponent from "../TestFlowComponent";
//

import React from "react";

import ReactFlow, { ReactFlowProvider, useReactFlow , addEdge, applyEdgeChanges, applyNodeChanges,  useNodesState,useEdgesState} from 'react-flow-renderer';
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
  {
    id: '1',
    type: 'question',
    position: { x: 400, y: 200 },
    data: { body: '二本足? 四本足?',answers:["2","4"] },
  },
  {
    id: '2',
    type: 'question',
    position: { x: 200, y: 200 },
    data: { body: '可愛い?',answers:["y","n"] },
  },
  {
    id: '3',
    type: 'question',
    position: { x: 300, y: 200 },
    data: { body: '人間?　機械?',answers:["人間","機械"] },
  },
  {
    id: '4',
    type: 'output',
    position: { x: 400, y: 400 },
    data: { label: 'ガンダム'},
  },
  {
    id: '5',
    type: 'output',
    position: { x: 400, y: 500 },
    data: { label: '人間'},
  },
  {
    id: '6',
    type: 'output',
    position: { x: 400, y: 500 },
    data: { label: '猫'},
  },
  {
    id: '7',
    type: 'output',
    position: { x: 400, y: 500 },
    data: { label: 'G'},
  },
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
      const answer = prompt('答えを入力してください');
      setEdges((eds) => addEdge({...connection,type:'step',label:answer,},eds));
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

  const onDeleteClick = (evt, id) => {
    evt.stopPropagation();
    console.log(`remove ${id}`);
  };


  // for debugging
  const showEdges = () => {
    console.log(edges)
    console.log(nodes)
    
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







