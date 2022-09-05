// import db from "../../firebase";

import { doc,getDoc, setDoc ,collection, getDocs} from "firebase/firestore";

import React,{useState,useMemo,memo,useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import AnswerForm from '../blocks/AnswerForm';
import { async } from "@firebase/util";
import db from "../../firebase";




const AnswerPage = () => {
  const [questions, setQuestions] = useState()
  const {id} = useParams()
  
  useEffect(() => {
    
        async function getFormAsync() {
          const formsRef = collection(db, "forms");
          const docRef = doc(db, "forms", id);
          const docSnap = await getDoc(docRef);
         
          
          if (docSnap.exists()) {
            
            setQuestions(docSnap.data().questions)
            
          } else {
            alert("urlが間違っています")
          }

        }

        getFormAsync()
     
  }, [])
 
  return( 
    questions ?
    <AnswerForm questions={questions} height={window.innerHeight} />
    : <h1>読み込み中</h1>
  )
   

}


  export default AnswerPage







