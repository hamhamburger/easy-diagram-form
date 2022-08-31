import React,{useState} from "react";    
import {Button,Box} from '@mui/material';

import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { ErrorSharp } from "@mui/icons-material";
import TryDialog from "./blocks/TryDialog";

export default function TestComponent() {
  const { handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({ control, name: 'form' });
  
  const handleClick = (data) => {
    console.log(data);
};
 
  return (
    <Box sx={{display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"auto 1fr auto",minHeight:"100vh"}}>
      <h1>Header</h1>
      <Box>
        <p>content</p>
      </Box>
      <footer><p>footer</p></footer>
    </Box>
  );
 }
 