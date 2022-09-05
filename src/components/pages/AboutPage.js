import React from "react";

import { Typography } from "@mui/material";
import Header from "../blocks/Header";
import {Box} from "@mui/material";





const AboutPage = () => {

  return (
    <>
      <Header />
      <Box sx={{padding:"10px 20px"}}>
        <Box>
        
              <Box sx={{minWidth:"100px"}}>
              <Typography variant="h1" sx={{fontSize:{xs:28},borderBottom: "1px solid lightgray"}}>このサイトについて</Typography>
              <p>本サービスはまだ開発途中です。もしよろしければちょっと遊んでみたりくだらないフォームを作成する程度にご利用頂き、ビジネスなどにはご利用なさらないようお願い致します。</p>
              <p>また、突然サービスを停止したり予告なく機能を変更する可能性がありますのでご了承ください。</p>
              </Box>
              <Box sx={{minWidth:"100px"}}>
              <Typography variant="h1" sx={{fontSize:{xs:28},borderBottom: "1px solid lightgray"}}>使用している技術</Typography>
              <ul>
                <li>React</li>
                <li>React</li>
                <li>MaterialUI</li>
                <li>styled-components</li>
                <li>firebase</li>
              </ul>
              </Box>
        
          </Box>
      </Box>

    <footer>Copyright (c) 2022 hamhamburger
Released under the MIT license
https://opensource.org/licenses/mit-license.php</footer>
    </>
  
  )
  


}
  export default AboutPage







