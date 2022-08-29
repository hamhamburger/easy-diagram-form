
// for debugging
import TestFlowComponent from "../TestFlowComponent";
import createDataStructure from "../../lib/createDataStructure";

import React from "react";

import ReactFlow, { ReactFlowProvider, useReactFlow , addEdge, applyEdgeChanges, applyNodeChanges,  useNodesState,useEdgesState, updateEdge,} from 'react-flow-renderer';
import { useCallback, useState, useMemo,useRef} from 'react';


import ResultNode from "../custome_nodes/ResultNode";
import QuestionNode from "../custome_nodes/QuestionNode";




import Footer from "../blocks/Footer";
import QuestionDialog from "../blocks/QuestionDialog";
import ButtonEdge from "../custome_edge/ButtonEdge";
import { Button } from "@mui/material";
const Style = {
  backgroundColor: '#B8CEFF',
  height:"100vh"
};







const initialNodes = [
  {
    id: '0',
    type: 'question',
    position: { x: 400, y: 200 },
    data: { label: 'やっぱり？'},
  },
  {
    id: '1',
    type: 'question',
    position: { x: 400, y: 200 },
    data: { label: '二本足? 四本足?'},
  },
  {
    id: '2',
    type: 'question',
    position: { x: 200, y: 200 },
    data: { label: '可愛い?'},
  },
  {
    id: '3',
    type: 'question',
    position: { x: 300, y: 200 },
    data: { label: '人間?　機械?' },
  },
  {
    id: '4',
    type: 'result',
    position: { x: 400, y: 400 },
    data: { label: 'ガンダム'},
  },
  {
    id: '5',
    type: 'result',
    position: { x: 400, y: 500 },
    data: { label: '人間'},
  },
  {
    id: '6',
    type: 'result',
    position: { x: 400, y: 500 },
    data: { label: '猫'},
  },
  {
    id: '7',
    type: 'result',
    position: { x: 400, y: 500 },
    data: { label: 'G'},
  },

];

const initialEdges = [
];










const QuestionDiagram = ()=>{
  
  
  const reactFlowInstance = useReactFlow();
  const [nodes, setNodes ,onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodeId, setNodeId] = useState(nodes.length)
  const nodeTypes = useMemo(
    () => ({
      question: QuestionNode,result: ResultNode 
    }),
    []
  );
  const edgeTypes = useMemo(
    () => ({
      buttonedge: ButtonEdge 
    }),
    []
  );


  const onConnect = useCallback(
    (connection) => {
      const answer = prompt("回答を入力して下さい");
      setEdges((eds) => addEdge({...connection,type:'step',label:answer ? answer : 'はい',},eds));
    },
    [setEdges]
  );
  const addNode = (data) => {
    console.log(data)
    const question_label = prompt("質問を入力して下さい")
    setNodeId(nodeId+1)
    const id = `${nodeId}`;
    const newNode = {
      id,
      type:'question',
      position: {
        x: 500,
        y: nodeId * 300,
      },
      data: {
        label: `Node ${id}`,label: question_label
      },
    };
    reactFlowInstance.addNodes(newNode);
  }

 


  // for debugging
  const showEdges = () => {
    console.log(edges)
    console.log(nodes)
    
  }
  //


  

  //edgeの処理
  const edgeUpdateSuccessful = useRef(true);

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

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
        snapToGrid
        onEdgeUpdate={onEdgeUpdate}
        onEdgeUpdateStart={onEdgeUpdateStart}
        onEdgeUpdateEnd={onEdgeUpdateEnd}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        style={Style}
      >
      </ReactFlow>
      {
      //<QuestionDialog onSubmit={addNode} style={buttonStyle}/>
    }
      <Button variant="outlined" onClick={addNode} style={buttonStyle}>
        質問を追加する
      </Button>
      <Footer onClickAdd={addNode}/>
      {// for debugging
      }
      <TestFlowComponent onClick={()=>{
          createDataStructure(edges,nodes)
          showEdges()
        }
      }/>
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
      </>
    );
  }







