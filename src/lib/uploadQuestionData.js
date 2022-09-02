import db from "../firebase";
import { addDoc, collection, getDocs ,getDoc ,setDoc ,doc} from "firebase/firestore";


export default async function uploadQuestionData (questions) {
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

  if(!(flag1 && flag2)) return {status:"failed",message:"質問とメッセージが正しく入力されていません"};

  const colRef = collection(db, "forms");
    try {
      const docRef = await addDoc(colRef, {
        questions:questions
      });
  
      return {status:"success",message:`保存に成功しました\nurlは ${window.location.href}start/${docRef.id}です`}
    } catch (e) {
      return {status:"failed",message:"保存に失敗しました"};
    }
  
  




}