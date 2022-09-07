import React,{useState} from "react";    
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
const QuestionForm = (onSubmit: any) => {
 const { handleSubmit, control } = useForm();
 const { fields, append, remove } = useFieldArray({ control, name: 'form' });




 const handleClick = (data: any) => {
   console.log(data);
 };
  return(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>



      
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Controller
                      name={`question[0].body`}
                      control={control}
                      
                      render={({ field }) => (
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <TextField variant='outlined' multiline
                        maxRows={4} margin='normal' placeholder='質問を入力' {...field}/>
                      )}
                    />
          
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div><Button onClick={() => append({})}>回答を追加する</Button></div>
            {fields.map((field, index) => {
              return (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div key={field.id}>
                  {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <Controller
                    name={`question[1].answers.${index}`}
                    control={control}
                    
                    render={({ field }) => (
                      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <TextField variant='outlined' margin='normal' placeholder='回答' {...field} fullWidth/>
                    )}
                  />
                  {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <Button onClick={() => remove(index)}>削除</Button>
                </div>
              );
            })}
            
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Button type='submit'>Submit</Button>
      </form>
    </>
  )

}

export default QuestionForm