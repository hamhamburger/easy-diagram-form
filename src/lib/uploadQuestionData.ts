import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { Question } from "components/interface";
interface Result {
  status: "success" | "fail";
  message: string;
  url?: string;
  ref?: string;
  errors?: string[];
}

export default async function uploadQuestionData(
  questions: Question[]
): Promise<Result> {
  let valid = true;

  const errors:string[] = [];

  questions.forEach((question: Question): void => {
    if (question.label.length > 60) {
      errors.push("質問とメッセージの長さは60文字以下にしてください");
      valid = false;
    }
    switch (question.type) {
      case "question":
        if (question.label !== undefined) {
          errors.push("質問を入力してください");
          valid = false;
        }
        break;

      case "result":
        if (question.label !== undefined) {
          errors.push("メッセージを入力してください");
          valid = false;
        }
        break;

      default:
        break;
    }
  });
  if (!valid) {
    const message = errors.join("\n")
    return { status: "fail", message};
  }

  const colRef = collection(db, "forms");
  const object = {
    questions,
    keyToRead: Math.random().toString(32).substring(2),
  };
  try {
    const docRef = await addDoc(colRef, object);
    return {
      status: "success",
      ref: docRef.id,
      message: "公開に成功しました",
      url: `${window.location.origin}/start/${docRef.id}`,
    };
  } catch (e) {
    console.log(e)
    return { status: "fail", message: "保存に失敗しました" };
  }
}