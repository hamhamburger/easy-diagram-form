import db from "../firebase";
import { addDoc, collection, doc, updateDoc} from "firebase/firestore";


export default async function uploadQuestionData (questions,savedRef) {
  let flag1 = false //最低一個は質問が入力されているか
  let flag2 = false //最低一個はメッセージが入力されているか

  questions.map((question) => {
    switch (question.type) {
      case "question":
        if(question.label) flag1 = true
        break;
      
      case "result":
        if(question.label) flag2 = true
        break;
      
      default:
        break;
    }

   
    

    }
  )

  if(!(flag1 && flag2)) {
    return {status:"failed",message:{body:"質問とメッセージが正しく入力されていません"}};
  }

  const colRef = collection(db, "forms");
    try {
      let docRef
      if(savedRef){
        docRef = doc(db, "forms", savedRef);
        await updateDoc(docRef, {
          questions:questions
        });

      }
      else {
        docRef = await addDoc(colRef, {
        questions:questions
      });
    
    }
    
  
      return {status:"success",ref:docRef.id,message:{body:"公開に成功しました",url:`${window.location.origin}/start/${docRef.id}`}}
    } catch (e) {
      return {status:"failed",message:{body:"保存に失敗しました"}};
    }
  
  




}