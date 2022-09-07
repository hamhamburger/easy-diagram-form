import React from "react";

import { Typography } from "@mui/material";
// @ts-expect-error TS(6142): Module '../blocks/Header' was resolved to '/Users/... Remove this comment to see the full error message
import Header from "../blocks/Header";
import {Box} from "@mui/material";





const AboutPage = () => {

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Header />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Box sx={{padding:"10px 20px"}}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Box>
        
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Box sx={{minWidth:"100px"}}>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Typography variant="h1" sx={{fontSize:{xs:28},borderBottom: "1px solid lightgray"}}>このサイトについて</Typography>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <p>本サービスはまだ開発途中です。もしよろしければちょっと遊んでみたりくだらないフォームを作成する程度にご利用頂き、ビジネスなどにはご利用なさらないようお願い致します。</p>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <p>また、突然サービスを停止したり予告なく機能を変更する可能性がありますのでご了承ください。</p>
              </Box>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Box sx={{minWidth:"100px"}}>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Typography variant="h1" sx={{fontSize:{xs:28},borderBottom: "1px solid lightgray"}}>使用している技術</Typography>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <ul>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <li>React</li>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <li>React</li>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <li>MaterialUI</li>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <li>styled-components</li>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <li>firebase</li>
              </ul>
              </Box>
        
          </Box>
      </Box>

    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <footer>Copyright (c) 2022 hamhamburger
Released under the MIT license
https://opensource.org/licenses/mit-license.php</footer>
    </>
  
  )
  


}
  export default AboutPage







