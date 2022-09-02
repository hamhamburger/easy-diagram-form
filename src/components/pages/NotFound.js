import { Link } from "react-router-dom";
import { useMemo } from "react";
import db from "../../firebase";
import { Button } from "@mui/material";
import { addDoc, collection, getDocs ,getDoc ,setDoc ,doc} from "firebase/firestore";

const colRef = collection(db, "forms");

async function addForm(){
  try {
    const docRef = await addDoc(colRef, {
      questions:"obj"
    });

    console.log("Document written with ID: ", docRef.id);
    alert(docRef.id)
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}



async function getForms() {
  const querySnapshot = await getDocs(colRef);
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

async function getForm() {
  const formsRef = collection(db, "forms");
  const docRef = doc(db, "forms", "tMEddywKVwvOxufXaaQd");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

}


async function addCity() {


  const citiesRef = collection(db, "cities");

    await setDoc(doc(citiesRef, "SF"), {
        name: "San Francisco", state: "CA", country: "USA",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"] });
    await setDoc(doc(citiesRef, "LA"), {
        name: "Los Angeles", state: "CA", country: "USA",
        capital: false, population: 3900000,
        regions: ["west_coast", "socal"] });
    await setDoc(doc(citiesRef, "DC"), {
        name: "Washington, D.C.", state: null, country: "USA",
        capital: true, population: 680000,
        regions: ["east_coast"] });
    await setDoc(doc(citiesRef, "TOK"), {
        name: "Tokyo", state: null, country: "Japan",
        capital: true, population: 9000000,
        regions: ["kanto", "honshu"] });
    await setDoc(doc(citiesRef, "BJ"), {
        name: "Beijing", state: null, country: "China",
        capital: true, population: 21500000,
        regions: ["jingjinji", "hebei"] });
}



const NotFound = ()=>{
  return(
    <>
      <h1>お探しのページは見つかりませんでした</h1>
      <div>
        <button onClick={addForm}>add</button>
      </div>
      <div>
        <button onClick={getForm}>read</button>
      </div>
    </>
  )

}

export default NotFound