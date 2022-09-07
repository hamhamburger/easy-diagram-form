import React,{useState} from "react";    
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
const QuestionForm = (onSubmit) => {
 const { handleSubmit, control } = useForm();
 const { fields, append, remove } = useFieldArray({ control, name: 'form' });




 const handleClick = (data) => {
   console.log(data);
 };
  return(
    <>



      
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <Controller
                      name={`question[0].body`}
                      control={control}
                      
                      render={({ field }) => (
                        <TextField variant='outlined' multiline
                        maxRows={4} margin='normal' placeholder='質問を入力' {...field}/>
                      )}
                    />
          
          <div><Button onClick={() => append({})}>回答を追加する</Button></div>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <Controller
                    name={`question[1].answers.${index}`}
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
  )

}

export default QuestionForm