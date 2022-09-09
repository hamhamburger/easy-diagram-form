import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { Question } from "components/interface";
interface Result {
  status: "success" | "fail";
  message: string;
  url?: string;
  ref?: string;
}

interface ErrorsObj {
  tooLongQuestion?: string;
  noQuestion?: string;
  noMessage?: string;
}
export default async function uploadQuestionData(
  questions: Question[],
  isPublic: boolean = false
): Promise<Result> {
  let valid = true;
  const errorsObj: ErrorsObj = {};
  const path = isPublic ? "open" : "close";
  let hasOneValidQuestion = false;
  let hasOneValidResult = false;

  questions.forEach((question: Question): void => {
    if (question.label !== undefined && question.label.length > 60) {
      errorsObj.tooLongQuestion =
        "質問とメッセージの長さはそれぞれ60文字以下にしてください";
      valid = false;
    }
    switch (question.type) {
      case "question":
        if (question.label !== "") {
          hasOneValidQuestion = true
        } 
        break;

      case "result":
        if (question.label !== "") {
          hasOneValidResult = true
        }
        break;

      default:
        break;
    }
  });

  if (!hasOneValidQuestion) {
    errorsObj.noQuestion = "質問を入力してください";
    valid = false;
  }
  if (!hasOneValidResult) {
    errorsObj.noMessage = "メッセージを入力してください";
    valid = false;
  }

  if (!valid) {
    const message = Object.keys(errorsObj)
      .map(e => {
        const key = e as keyof ErrorsObj;
        return errorsObj[key];
      })
      .join("\n");
    return { status: "fail", message };
  }

  const colRef = collection(db, path);
  console.log(questions);

  try {
    const object = {
      questions,
      keyToRead: Math.random().toString(32).substring(2),
    };
    const docRef = await addDoc(colRef, object);

    return {
      status: "success",
      ref: docRef.id,
      message: "公開に成功しました",
      url: `${window.location.origin}/start/${path}/${docRef.id}`,
    };
  } catch (e) {
    console.log(e);
    return { status: "fail", message: "保存に失敗しました" };
  }
}