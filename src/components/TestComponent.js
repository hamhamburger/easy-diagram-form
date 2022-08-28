import React,{useState} from "react";    
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { ErrorSharp } from "@mui/icons-material";


export default function TestComponent() {
  const { handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({ control, name: 'form' });
  
  const handleClick = (data) => {
    console.log(data);
};
 
  return (
    <>



      
      <form onSubmit={handleSubmit(handleClick)}>
        
        <Controller
                      name={`form[1].body`}
                      control={control}
                      
                      render={({ field }) => (
                        <TextField variant='outlined' multiline
                        maxRows={4} margin='normal' placeholder='質問を入力' {...field}/>
                      )}
                    />
          
          <div><Button onClick={() => append({answer:''})}>回答を追加する</Button></div>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <Controller
                    name={`form[2].answers.${index}`}
                    control={control}
                    
                    render={({ field }) => (
                      <TextField variant='outlined' margin='normal' placeholder='回答' {...field} fullWidth/>
                    )}
                  />
                  <Button onClick={() => remove(index)}>削除</Button>
                </div>
              );
            })}
            
        <Button type='submit'>Submit</Button>
      </form>
    </>
  );
 }
 