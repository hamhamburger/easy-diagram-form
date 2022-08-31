
// for debugging
import TestFlowComponent from "../TestFlowComponent";
import TryDialog from "./TryDialog";
import createDataStructure from "../../lib/createDataStructure";

import React from "react";

import ReactFlow, { ReactFlowProvider, useReactFlow , addEdge, applyEdgeChanges, applyNodeChanges,  useNodesState,useEdgesState, updateEdge,} from 'react-flow-renderer';
import { useCallback, useState, useMemo,useRef} from 'react';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DoneIcon from '@mui/icons-material/Done';
import { Button, Fab, Box,} from "@mui/material";
import ResultNode from "../custome_nodes/ResultNode";
import QuestionNode from "../custome_nodes/QuestionNode";




import Footer from "../blocks/Footer";
import QuestionDialog from "../blocks/QuestionDialog";
import ButtonEdge from "../custome_edge/ButtonEdge";

const Style = {
  backgroundColor: '#B8CEFF',
  height:"100vh"
};







const initialNodes = [
  // {
  //   id: '0',
  //   type: 'question',
  //   position: { x: 400, y: 200 },
  //   data: { label: 'やっぱり？'},
  // },
  // {
  //   id: '1',
  //   type: 'question',
  //   position: { x: 400, y: 200 },
  //   data: { label: '二本足? 四本足?'},
  // },
  // {
  //   id: '2',
  //   type: 'question',
  //   position: { x: 200, y: 200 },
  //   data: { label: '可愛い?'},
  // },
  // {
  //   id: '3',
  //   type: 'question',
  //   position: { x: 300, y: 200 },
  //   data: { label: '人間?　機械?' },
  // },
  {
    id: '0',
    type: 'question',
    position: { x: 400, y: 200 },
    data: { label: '足は何本？'},
  },
  {
    id: '1',
    type: 'result',
    position: { x: 400, y: 400 },
    data: {},
  },
  {
    id: '2',
    type: 'result',
    position: { x: 400, y: 500 },
    data: {},
  },
  {
    id: '3',
    type: 'result',
    position: { x: 400, y: 500 },
    data: {},
  },
  {
    id: '4',
    type: 'result',
    position: { x: 400, y: 500 },
    data: {},
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

  
    const question_label = prompt("質問を入力して下さい")
    setNodeId(nodeId+1)
    const id = `${nodeId}`;
    const newNode = {
      id,
      type:'question',
      position: {
        x: 400,
        y: 300,
      },
      data: {
        label: `Node ${id}`,label: question_label
      },
    };
    reactFlowInstance.addNodes(newNode);
  }

 


  

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

  
  const parsedQuestions = createDataStructure(edges,nodes)
  /* 
  レンダリング時にいちいちこの関数を呼び出しparsedQuestionsをセットしているのは非常に筋が悪いように思えるが今のところどこに置くべきかわからない
  onEdgeUpdateEndやonConnectのコールバックに置いてもその関数が呼ばれている時点ではedgesに新しく作られたedgeが反映されていない
 */

  return(
    <div>
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
         ></ReactFlow>
     
     <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",position:"absolute",     bottom:"40px",right:"30px",  zIndex:10}}>
            <Box sx={{display:"flex",flexDirection:"column", zIndex:10,alignItems:"center",marginTop:"20px"}}>
              <Fab color="primary" onClick={addNode}  aria-label="add" sx={{marginBottom:"5px"}}>
                <DoneIcon />
              </Fab>
              <label>保存する</label>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <TryDialog questions={parsedQuestions}>
                <Fab color="primary" aria-label="add" sx={{marginBottom:"5px"}}>
                <PlayArrowIcon />
              </Fab>
              </TryDialog>
              <label>試してみる</label>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column", zIndex:10,alignItems:"center",marginTop:"20px"}}>
              <Fab color="primary" onClick={addNode}  aria-label="add" sx={{marginBottom:"5px"}}>
                <AddIcon />
              </Fab>
              <label>質問を追加する</label>
            </Box>
          </Box>
      
 
    </div>

    
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







