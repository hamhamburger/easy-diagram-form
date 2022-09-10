import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import Header from "components/blocks/Header";
import { getDocs, collection } from "firebase/firestore";
import db from "db";

import { Form } from "components/interface";
export default function OpenPage(): JSX.Element {
  const [forms, setForms] = useState<Form[]>();

  useEffect(() => {
    const getOpenFormDatas = async (): Promise<void> => {
      const querySnapshot = await getDocs(collection(db, "open"));

      const gotForms = [] as Form[];
      querySnapshot.forEach(doc => {
        const form = {
          ...doc.data(),
          id: typeof doc.id === "string" ? doc.id : "ab",
        };
        gotForms.push(form as Form);
      });
      setForms(gotForms);
    };
    void getOpenFormDatas();
  }, []);

  if (typeof forms === "undefined") {
    return (
      <>
        <Header />
        <h1>投稿はありません</h1>
      </>
    );
  }

  return (
    <>
      <Header />

      <Box sx={{ padding: "30px 20px" }}>
        <Typography>投稿一覧</Typography>

        <Box>
          {forms.map(form => {
            return (
              <Box key={form.title}>
                <h3>{form.title}</h3>
                <a
                  href={`${window.location.origin}/start/open/${form.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  開く
                </a>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
