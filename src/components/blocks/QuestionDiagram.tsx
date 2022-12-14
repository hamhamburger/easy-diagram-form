import TryDialog from "./TryDialog";
import createDataStructure from "../../lib/createDataStructure";
import uploadQuestionData from "../../lib/uploadQuestionData";

import ReactFlow, {
  ReactFlowProvider,
  useReactFlow,
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  updateEdge,
} from "react-flow-renderer";
import React, { useCallback, useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DoneIcon from "@mui/icons-material/Done";
import { Fab, Box } from "@mui/material";
import ResultNode from "../custom_nodes/ResultNode";
import QuestionNode from "../custom_nodes/QuestionNode";
import AddNodeDialog from "./AddNodeDialog";
import MessageDialog from "./MessageDialog";
import { Question } from "components/interface";

const Style = {
  backgroundColor: "lightblue",
  height: "100vh",
};
const fabStyle = {
  marginBottom: "5px",
  width: { xs: 45, sm: 60 },
  height: { xs: 45, sm: 60 },
};

let parsedQuestions: Question[] = [];

const initialNodes = [
  {
    id: "0",
    type: "question",
    position: { x: 300, y: -20 },
    data: { first: true, label: "" },
  },
  {
    id: "1",
    type: "result",
    position: { x: 100, y: 800 },
    data: {
      label: "",
    },
  },
  {
    id: "2",
    type: "result",
    position: { x: 500, y: 800 },
    data: {
      label: "",
    },
  },
];

const nodeTypes = {
  question: QuestionNode as any,
  result: ResultNode as any,
};

interface Info {
  message: string;
  url?: string;
}

const QuestionDiagram = (): JSX.Element => {
  const reactFlowInstance = useReactFlow();
  // どうしても自力では解決できなかった...
  // @ts-expect-error
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [infoForDialog, setInfoForDialog] = useState<Info>({
    message: "",
    url: "",
  });
  const [openMessageDialog, setOpenMessageDialog] = useState(false);

  const onConnect = useCallback(
    (connection: any) => {
      const answer = prompt("回答を入力して下さい");
      setEdges(eds =>
        addEdge(
          {
            ...connection,
            type: "step",
            label: answer !== undefined ? answer : "はい",
          },
          eds
        )
      );
    },
    [setEdges]
  );

  const addNode = useCallback(
    (type: any) => {
      const nodeId = nodes.length;

      const newNode = {
        id: String(nodeId),
        type,
        position: {
          x: 300,
          y: 150 * (nodeId - 2),
        },
        data: {
          label: "",
        },
      };
      reactFlowInstance.addNodes(newNode);
    },
    [reactFlowInstance, nodes]
  );

  async function upload(): Promise<void> {
    if (
      window.confirm(
        "一度公開すると削除できません。\n公開してもよろしいですか？"
      )
    ) {
      const isPublic = window.confirm("公開しますか？");
      let title;
      if (isPublic) {
        title = window.prompt("タイトルを入力してください") ?? "無題";
      }
      await uploadQuestionData(parsedQuestions, isPublic, title).then(
        result => {
          const info = { message: result.message, url: result.url };
          setInfoForDialog(info);
          setOpenMessageDialog(true);
        }
      );
    }
  }

  const edgeUpdateSuccessful = useRef(true);

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback((oldEdge: any, newConnection: any) => {
    edgeUpdateSuccessful.current = true;
    setEdges(els => updateEdge(oldEdge, newConnection, els));
  }, []);

  const onEdgeUpdateEnd = useCallback((_: any, edge: any) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges(eds => eds.filter(e => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  // useEffect(() => {
  //   parsedQuestions = createDataStructure(edges,nodes)

  // }, [nodes])
  parsedQuestions = createDataStructure(edges, nodes);
  // const parsedQuestions = createDataStructure(edges,nodes)
  /* 
  レンダリング時にいちいちこの関数を呼び出しparsedQuestionsをセットしているのは効率が悪いように思えるが今のところどこに置くべきかわからない
  本来edgeが変更された場合にのみ呼び出せばいいと思うが
  onEdgeUpdateEndやonConnectのコールバックに置いてもその関数が呼ばれている時点ではedgesに新しく作られたedgeが反映されていない
  useEffectをedgesとnodesの更新をフックにして使うとよりパフォーマンスが悪化した
 */

  // const parseQuestions = useCallback(
  //   () => {
  //     parsedQuestions = createDataStructure(edges,nodes)
  //   },
  //   [parsedQuestions],
  // )

  // useMemoを使うとaddNodeを呼び出した際にステータスがうまく更新されない
  const floatButtons = (
    <Box
      sx={{
        display: { xs: "flex", sm: "flex" },
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        bottom: { xs: "10px", sm: "20px" },
        right: { xs: "25px", sm: "30px" },
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          zIndex: 10,
          alignItems: "center",
        }}
      >
        <div
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={upload}
        >
          {
            // ↑ハンドラは値を返す必要がないので何も返さない関数が予測されているが非同期関数なのでPromise<void>を返してしまう？}
            // 私の力ではまだ解決できない...
          }
          <Fab color="primary" aria-label="add" sx={fabStyle}>
            <DoneIcon />
          </Fab>
        </div>
        <label>公開</label>
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <TryDialog questions={parsedQuestions}>
          <Fab color="primary" aria-label="add" sx={fabStyle}>
            <PlayArrowIcon />
          </Fab>
        </TryDialog>

        <label>試す</label>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          zIndex: 10,
          alignItems: "center",
        }}
      >
        <AddNodeDialog onClick={addNode}>
          <Fab color="primary" aria-label="add" sx={fabStyle}>
            <AddIcon />
          </Fab>
        </AddNodeDialog>

        <label>追加</label>
      </Box>
    </Box>
  );

  return (
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
        // どうしても自力では解決できなかった...

        nodeTypes={nodeTypes}
        defaultZoom={0.1}
        style={Style}
      >
        <Background />
      </ReactFlow>

      {floatButtons}

      <MessageDialog
        isOpen={openMessageDialog}
        message={infoForDialog.message}
        url={infoForDialog.url}
        onClick={() => setOpenMessageDialog(false)}
      />
    </div>
  );
};
export default function Diagram(): JSX.Element {
  return (
    <>
      <ReactFlowProvider>
        <QuestionDiagram />
      </ReactFlowProvider>
    </>
  );
}
