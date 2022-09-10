
import React, { useCallback, memo } from "react";
import { Position } from "react-flow-renderer";
import { Box, TextField } from "@mui/material";

import BottomHandle from "../handles/BottomHandle";
import TopHandle from "../handles/TopHandle";

interface Params {
  id: number;
  data: {
    first?: boolean;
    label: string;
  };
}

const QuestionNode = memo(function QuestionNode({
  data,
  id,
}: Params): JSX.Element {
  const { first } = data;
  const placeholder =
    first === true
      ? "この質問を起点に別の質問へと分岐していきます\n最初の質問を入力して下さい"
      : "質問を入力して下さい";
  const handle =
    first === true ? null : <TopHandle type="target" position={Position.Top} />;
  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    data.label = evt.target.value;
  }, []);

  return (
    <Box className="question-node">
      {handle}

      <Box>
        <TextField
          id="text"
          name="text"
          onChange={onChange}
          variant="outlined"
          multiline
          maxRows={12}
          minRows={4}
          margin="normal"
          placeholder={placeholder}
          sx={{ width: 220, backgroundColor: "white", borderRadius: 0 }}
          inputProps={{ style: { textAlign: "center" } }}
        />
      </Box>

      <BottomHandle type="source" position={Position.Bottom} />
    </Box>
  );
});


export default QuestionNode;
