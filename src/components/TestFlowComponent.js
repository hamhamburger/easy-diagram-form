import React,{useState} from "react";    
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { ErrorSharp } from "@mui/icons-material";


export default function TestFlowComponent({onClick}) {

  const buttonStyle={position:"absolute",bottom:"150px",right:"30px",  zIndex:10}
  return (
    <>
      <button onClick={onClick} style={buttonStyle}>click</button>
    </>
  );
 }
 