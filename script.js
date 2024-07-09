import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { doc, setDoc } from "firebase/firestore"; 

const firebaseConfig = {
  databaseURL: "https://random-ideas-b6f8f-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


await setDoc(doc(db, "ideas"), {
  Idea.innerHTML = Get_Random_Item(Array);
});




// getting html thingys

const Input_Field = document.querySelector(".input-field").value;
const Add_Btn = document.querySelector(".add-btn");

const Array = ['Fingerless Gloves', 'Crocheted baggo',
    'Painted Card Space Themed', 'Cupcake Magneto', 'Crocheted Handbag', 'Make Clay Paws', 'Make Clay Donuts', 'Sand & Paint Clay Thingys'];

// add function

Add_Btn?.addEventListener('click', function Add_In_Array() {
    Array.push(Input_Field);
    console.log(Array);
});

// getting html thingys
const Idea_Btn = document.querySelector(".idea-btn");
const Idea = document.querySelector(".idea");

// random function

function Get_Random_Item(arr) {

    // get random index value
    const Random_Index = Math.floor(Math.random() * arr.length);

    // get random item
    const Item = arr[Random_Index];

    return Item;
}

Idea_Btn?.addEventListener('click', function () {
    Idea.innerHTML = Get_Random_Item(Array);
});

console.log(Get_Random_Item(Array));


























// // getting html thingys

// const Input_Field = document.querySelector(".input-field").value;
// const Add_Btn = document.querySelector(".add-btn");

// const Array = ['Fingerless Gloves', 'Crocheted baggo',
//     'Painted Card Space Themed', 'Cupcake Magneto', 'Crocheted Handbag', 'Make Clay Paws', 'Make Clay Donuts', 'Sand & Paint Clay Thingys'];

// // add function

// Add_Btn?.addEventListener('click', function Add_In_Array() {
//     Array.push(Input_Field);
//     console.log(Array);
// });

// // getting html thingys
// const Idea_Btn = document.querySelector(".idea-btn");
// const Idea = document.querySelector(".idea");

// // random function

// function Get_Random_Item(arr) {

//     // get random index value
//     const Random_Index = Math.floor(Math.random() * arr.length);

//     // get random item
//     const Item = arr[Random_Index];

//     return Item;
// }

// Idea_Btn?.addEventListener('click', function () {
//     Idea.innerHTML = Get_Random_Item(Array);
// });

// console.log(Get_Random_Item(Array));