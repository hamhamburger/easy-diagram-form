

import React, { useState, useCallback, memo } from "react";

import { Button, Container, Box, Grid } from "@mui/material";
import Result from "../parts/start/Result";
import QuestionArea from "../parts/start/QuestionArea";

import { Question } from "components/interface";

interface Props {
  questions?: Question[];
  height: number | string;
}

const AnswerForm = memo(function AnswerForm({ questions, height }: Props) {
  if (questions === undefined) return <h1>質問が存在しません</h1>;

  const [questionIndexHistory, setQuestionIndexHistory] = useState([0]);
  const currentQuestion = questions.find(
    question => question.id === questionIndexHistory.slice(-1)[0]
  );

  if (currentQuestion === undefined) return <h1>無効な質問です</h1>;

  const goTo = (id: number): void => {
    setQuestionIndexHistory([...questionIndexHistory, id]);
  };
  // useCallbackを使うと上手く動かない

  const back = useCallback(() => {
    if (questionIndexHistory.length > 1) {
      const newArr = questionIndexHistory.slice(0, questionIndexHistory.length);
      newArr.pop();
      setQuestionIndexHistory(newArr);
    }
  }, [setQuestionIndexHistory, questionIndexHistory]);

  const footer = (
    <Box className="footer" sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        variant="contained"
        sx={{
          height: { xs: 50, sm: 100 },
          width: { xs: "100%", sm: "80%" },
          fontSize: "1.4rem",
          bottom: "20px",
        }}
        onClick={back}
      >
        {"戻る"}
      </Button>
    </Box>
  );

  if (currentQuestion.type === "result") {
    return (
      <Container
        sx={{
          height,
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto 1fr auto",
          rowGap: "2rem",
          maxWidth: "760px",
        }}
      >
        <Box sx={{ marginTop: "20px" }}>
          <Result message={currentQuestion.label} />
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Box component="a" href={window.location.origin} target="_blank">
            createdByFormula
          </Box>
        </Box>

        <Container sx={{ overflowY: "scroll" }} className="AnswersGrid">
          <Grid container rowSpacing={2} columnSpacing={2}></Grid>
        </Container>
        {questionIndexHistory.length > 1 && footer}
      </Container>
    );
  } else {
    return (
      <Container
        sx={{
          height,
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto 1fr auto",
          rowGap: "2rem",
          maxWidth: "760px",
        }}
      >
        <Box sx={{ marginTop: "20px" }}>
          <QuestionArea
            questionBody={
              currentQuestion.label === ""
                ? "質問が入力されていません"
                : currentQuestion.label
            }
          />
        </Box>

        <Container sx={{ overflowY: "scroll" }} className="AnswersGrid">
          <Grid container rowSpacing={2} columnSpacing={2}>
            {currentQuestion.arrows.map(arrow => {
              return (
                <Grid item xs={12} sm={6} key={arrow.answer}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ height: { xs: 50, sm: 80 }, fontSize: "1rem" }}
                    onClick={() => goTo(arrow.to)}
                  >
                    {arrow.answer}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        {questionIndexHistory.length > 1 && footer}
      </Container>
    );
  }
});
  export default AnswerForm







