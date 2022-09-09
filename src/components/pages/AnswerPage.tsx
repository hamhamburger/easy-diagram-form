// import db from "../../firebase";

import { doc,getDoc} from "firebase/firestore";

import React,{useState,useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import AnswerForm from '../blocks/AnswerForm';
import db from "../../firebase";
import { Question } from "components/interface";



const AnswerPage = ():JSX.Element => {
  const [questions, setQuestions] = useState<Question[]>()
  const { id } = useParams()
  const path:string = "forms"

  useEffect(() => {
    
    const getFormData = async (): Promise<void> => {
      if (!(typeof id === "string")) {
        return
      }
      const docRef = doc(db, path, id);
      const docSnap = await getDoc(docRef);
         
          
      if (docSnap.exists()) {
        setQuestions(docSnap.data().questions)
            
      } else {
        alert("urlが間違っています")
      }
    } 
    void getFormData()
        
       


   
     
  }, [])
 
  return( 
    questions === undefined ? <h1>読み込み中</h1> : <AnswerForm questions={questions} height={window.innerHeight} />
      
  )
   

}


  export default AnswerPage







