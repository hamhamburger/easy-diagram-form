import React,{useState} from "react";    
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
const QuestionForm = (onSubmit) => {
  const { handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({ control, name: 'answers' });

  const handleClick = (data) => {
    console.log(data);
    alert();
  };
  return(
    <>



      
      <form onSubmit={handleSubmit(onSubmit)}>
        
          <Controller name={'question'} control={control} render={({field})=>(
            <TextField variant='outlined' margin='normal' placeholder='質問を入力' 
              fullWidth {...field}/>


          )}>
          
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <Controller
                    name={`questions.${index}.answer`}
                    control={control}
                    render={({ field }) => (
                      <TextField variant='outlined' margin='normal' placeholder='回答' fullWidth {...field} />
                    )}
                  />
                  <Button onClick={() => remove(index)}>削除</Button>
                </div>
              );
            })}
            <div><Button onClick={() => append({})}>回答を追加する</Button></div>
        <Button type='submit'>Submit</Button>
      </form>
    </>
  )

}

export default QuestionForm