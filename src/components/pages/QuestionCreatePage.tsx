import QuestionDiagram from "../blocks/QuestionDiagram";
import Header from "../blocks/Header";
import { Box } from "@mui/system";
import React from "react";

const QuestionCreatePage = (): JSX.Element => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 1fr",
      }}
    >
      <Header />
      <QuestionDiagram />
    </Box>
  );
};

export default QuestionCreatePage;
