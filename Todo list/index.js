
// const btn = document.getElementById("btn");
// const input = document.getElementById("input");
// const list = document.getElementById("list");
// const btn2 = document.getElementById("btn2")



// btn.addEventListener("click", () => {
//   const taskText = input.value.trim();

 
//   if (taskText === "") return;

 
//   const li = document.createElement("li");
//   li.className = "flex items-center justify-between bg-gray-700 p-3 rounded-lg";

 
//   li.innerHTML = `
//     <span class="text-gray-200">${taskText}</span>
//     <div class="flex gap-2">
//       <button id="btn2" class="text-red-400 font-bold delete-btn">X</button>
//     </div>
//   `

//   list.appendChild(li);

//   input.value = "";

// });

// btn2.addEventListener("click" , (e)=>{
//    alert(e)
//    console.log(e);
   
// })




const btn = document.getElementById("btn");
const input = document.getElementById("input");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "flex items-center justify-between bg-gray-700 p-3 rounded-lg";

  li.innerHTML = `
    <span class="text-gray-200">${taskText}</span>
    <div class="flex gap-2">
      <button class="text-red-400 font-bold delete-btn">X</button>
    </div>
  `;

  list.appendChild(li);
  input.value = "";
});


list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest("li").remove(); // remove that task
  }
});


