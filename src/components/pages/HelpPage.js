import React from "react";

import { Container, Typography } from "@mui/material";
import Header from "../blocks/Header";
import { Box } from "@mui/material";





const HelpPage = () => {
  return (
    <>
    <Header />
       <Box sx={{display:"flex"}}>
            <Box
            component="img"
            sx={{
              maxWidth:"320px",
              minWidth:"200px",
              height: "auto"
           
            }}
            alt="form"
            src={`${process.env.PUBLIC_URL}/example.gif`}
                    />
            <Box sx={{minWidth:"100px"}}>
              <Typography variant="h1" sx={{fontSize:{xs:28},borderBottom: "1px solid lightgray"}}>簡単フォーム(仮)とは？</Typography>
              <p>トラブルシューティング、ユーザーへのおすすめなどに使えるフォームを簡単に作れるサービスです。</p>
              <br/>
              <p>これは一番おすすめのスマホプランを診断するフォームのサンプルです。</p>
            </Box>
        </Box>

        <Box sx={{}}>
            
            <Box sx={{minWidth:"100px"}}>
              <Typography variant="h1" sx={{fontSize:{xs:28},borderBottom: "1px solid lightgray"}}>使い方</Typography>
              <p>白の背景のボックスが質問画面を表し、ペール色の背景のボックスが最後に表示されるメッセージ画面を表しています。それぞれのボックスを接続していけば自動でフォームが生成されます。</p>
              <p>スマホではドラッグができませんので<br/>代わりにそれぞれのフレームをタップすることで接続することができます。</p>
            </Box>
            <Box
            component="img"
            sx={{
              maxWidth:"100%",
              minWidth:"200px",
              height: "auto"
           
            }}
            alt="form"
            src={`${process.env.PUBLIC_URL}/connect2.gif`}
                    />
           
        </Box>

        <Box sx={{marginTop:"50px"}}>
            
            <Box sx={{minWidth:"100px"}}>
              <p>追加ボタンを押すことで質問やメッセージを追加することができます。</p>
            </Box>
            <Box
            component="img"
            sx={{
              maxWidth:"100%",
              minWidth:"200px",
              height: "auto"
           
            }}
            alt="form"
            src={`${process.env.PUBLIC_URL}/create.gif`}
                    />
           
        </Box>

        <Box sx={{marginTop:"50px"}}>
            
            <Box sx={{minWidth:"100px"}}>
            <Typography variant="h1" sx={{fontSize:{xs:28},borderBottom: "1px solid lightgray"}}>インターネットへの公開</Typography>
            <p>保存ボタンを押すことでurlが発行されます。基本的にurlを知っている人しかアクセスできませんが、もし知らない人にアクセスされても構わないようなフォームのみ作成してください。
              <br />公開されたフォームの削除には管理者への連絡が必要になります。
            </p>
            </Box>
           
           
        </Box>
        <Box sx={{marginTop:"50px"}}>
            
            <Box sx={{minWidth:"100px"}}>
            <Typography variant="h1" sx={{fontSize:{xs:28},borderBottom: "1px solid lightgray"}}>その他の機能について</Typography>
            <p>ボックスの接続を解除するには根本の辺りをクリックして下さい。</p>
            <p>本サービスはまだ開発途中です。もしよろしければちょっと遊んでみたりくだらないフォームを作成する程度にご利用頂き、ビジネスなどにはご利用なさらないようお願い致します。</p>
            <p>また、突然サービスを停止したり予告なく機能を変更する可能性がありますのでご了承ください。</p>
            </Box>
           
           
        </Box>

   
  </>)
   
    

}
  export default HelpPage







