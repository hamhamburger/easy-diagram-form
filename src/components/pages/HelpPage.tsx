import React from "react";

import { Container, Typography } from "@mui/material";
// @ts-expect-error TS(6142): Module '../blocks/Header' was resolved to '/Users/... Remove this comment to see the full error message
import Header from "../blocks/Header";
import { Box, Button } from "@mui/material";





const HelpPage = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Header />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Box sx={{padding:"30px 20px"}}>
         {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
         <Box sx={{display:"flex"}}>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Box
              component="img"
              sx={{
                maxWidth:"320px",
                minWidth:"200px",
                height: "auto"
         
              }}
              alt="form"
              // @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
              src={`${process.env.PUBLIC_URL}/example.gif`}
                      />
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Box sx={{minWidth:"100px"}}>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Typography variant="h1" sx={{fontSize:{xs:28},borderBottom: "1px solid lightgray"}}>Formulaとは？</Typography>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>トラブルシューティング、ユーザーへのおすすめなどに使えるフォームを無料で簡単に作れるサービスです。</p>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <br/>
              </Box>
          </Box>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Box sx={{marginTop:"50px"}}>
         
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Box sx={{minWidth:"100px"}}>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Typography variant="h1" sx={{fontSize:{xs:28},borderBottom: "1px solid lightgray"}}>使い方</Typography>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>白の背景のボックスが質問画面を表し、ペール色の背景のボックスが最後に表示されるメッセージ画面を表しています。それぞれのボックスを接続していけば自動でフォームが生成されます。</p>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>スマホではドラッグができませんので<br/>代わりにそれぞれのフレームをタップすることで接続することができます。</p>
              </Box>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Box
              component="img"
              sx={{
                maxWidth:"100%",
                minWidth:"200px",
                height: "auto"
         
              }}
              alt="form"
              // @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
              src={`${process.env.PUBLIC_URL}/connect2.gif`}
                      />
         
          </Box>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Box sx={{marginTop:"50px"}}>
         
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Box sx={{minWidth:"100px"}}>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>追加ボタンを押すことで質問やメッセージを追加することができます。</p>
              </Box>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Box
              component="img"
              sx={{
                maxWidth:"100%",
                minWidth:"200px",
                height: "auto"
         
              }}
              alt="form"
              // @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
              src={`${process.env.PUBLIC_URL}/create.gif`}
                      />
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <p>ボックスの接続を解除するには線の根本の辺りをクリックして下さい。</p>
         
          </Box>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Box sx={{marginTop:"50px"}}>
         
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Box sx={{minWidth:"100px"}}>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Typography variant="h1" sx={{fontSize:{xs:28},borderBottom: "1px solid lightgray"}}>インターネットへの公開</Typography>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <p>保存ボタンを押すことでurlが発行されます。基本的にはurlを知っている人しかアクセスできませんが、知らない人にアクセスされても構わないようなフォームのみ作成してください。
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <br />公開されたフォームの削除には管理者への連絡が必要になります。
              </p>
          </Box>
         
         
          </Box>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Box sx={{marginTop:"50px"}}>
         
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Box sx={{minWidth:"100px"}}>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Typography variant="h1" sx={{fontSize:{xs:28},borderBottom: "1px solid lightgray"}}>その他の機能について</Typography>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>本サービスはまだ開発途中です。もしよろしければちょっと遊んでみたりくだらないフォームを作成する程度にご利用頂き、ビジネスなどにはご利用なさらないようお願い致します。</p>
                
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>また、突然サービスを停止したり予告なく機能を変更する可能性がありますのでご了承ください。</p>
              </Box>
         
         
          </Box>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Box sx={{marginTop:"50px",textAlign:"center"}}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Button variant="contained" size="large" sx={{fontSize:{xs:"1rem",sm:"1.5rem",md:"2rem"}}}>今すぐ使ってみる</Button>
          </Box>

       </Box>

   
  </>)
   
    

}
  export default HelpPage







