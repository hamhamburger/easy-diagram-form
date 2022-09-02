

import TryDialog from "./TryDialog";
import createDataStructure from "../../lib/createDataStructure";

import React from "react";

import ReactFlow, { ReactFlowProvider, useReactFlow , addEdge,Background,  useNodesState,useEdgesState, updateEdge,} from 'react-flow-renderer';
import { useCallback,  useMemo,useRef} from 'react';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DoneIcon from '@mui/icons-material/Done';
import { Fab, Box,} from "@mui/material";
import ResultNode from "../custome_nodes/ResultNode";
import QuestionNode from "../custome_nodes/QuestionNode";
import AddNodeDialog from "./AddNodeDialog";



const Style = {
  backgroundColor: 'lightblue',
  height:"100vh"
};
const fabStyle = {marginBottom:"5px",width:{xs:45,sm:60},height:{xs:45,sm:60}}



const initialNodes = [
 
  {
    id: '0',
    type: 'question',
    position: { x: 300, y: -20 },
    data: {first:true},
  },
  {
    id: '1',
    type: 'result',
    position: { x: 100, y: 800 },
    data: {
      label:""
    },
  },
  {
    id: '2',
    type: 'result',
    position: { x: 500, y: 800 },
    data: {
      label:""
    },
  },

];










const QuestionDiagram = ()=>{
  
  
  const reactFlowInstance = useReactFlow();
  const [nodes, setNodes ,onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const nodeTypes = useMemo(
    () => ({
      question: QuestionNode,result: ResultNode 
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
  const addNode = useCallback((type) => {
    const nodeId =nodes.length
    
    const newNode = {
      id:String(nodeId),
      type:type,
      position: {
        x: 300,
        y: 150*(nodeId-2),
      },
      data: {
        label:""
      },
    };
    reactFlowInstance.addNodes(newNode);
  },[reactFlowInstance,nodes])

  
  const save = useCallback(async () => {
    console.log(parsedQuestions)
    
    
  },[reactFlowInstance,nodes])

  

  


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
  レンダリング時にいちいちこの関数を呼び出しparsedQuestionsをセットしているのは効率が悪いように思えるが今のところどこに置くべきかわからない
  本来edgeが変更された場合にのみ呼び出せばいいと思うが
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
          defaultZoom={0.1}

          style={Style}
         >
          <Background />

         </ReactFlow>
     
     <Box sx={{display:{xs:"flex",sm:"flex"},flexDirection:"column",alignItems:"center",position:"absolute", bottom:{xs:"10px",sm:"20px"},right:{xs:"25px",sm:"30px",}, zIndex:10}}>

            <Box sx={{display:"flex",flexDirection:"column", zIndex:10,alignItems:"center"}}>
              <Fab onClick={save} color="primary" aria-label="add" sx={fabStyle} >
                <DoneIcon />
              </Fab>
              <label>保存</label>
            </Box>

            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <TryDialog questions={parsedQuestions}>
                <Fab color="primary" aria-label="add" sx={fabStyle}>
                  <PlayArrowIcon />
                </Fab>
              </TryDialog>
              <label>試す</label>
            </Box>

            
              <Box sx={{display:"flex",flexDirection:"column", zIndex:10,alignItems:"center"}}>
                <AddNodeDialog onClick={addNode}>
                  <Fab color="primary" aria-label="add" sx={fabStyle}>
                    <AddIcon />
                  </Fab>
                </AddNodeDialog>  
                  <label>追加</label>
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







