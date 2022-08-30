import React,{useState} from "react";    
import Button from '@mui/material/Button';

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
    <>
    <TryDialog><Button >Click Me</Button></TryDialog>


    
    </>
  );
 }
 