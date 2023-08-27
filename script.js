let text_of_para = document.getElementById("text_of_para");
let Add_Notes = document.getElementById("Add_Notes");
let Paragraph_Output = document.getElementById("Paragraph_Output")


Add_Notes.addEventListener("click" , function(){
  let text = text_of_para.value
  console.log(text); //we get the value from input
  let newCraetePara = document.createElement("p");
  newCraetePara.innerHTML = text;
  newCraetePara.style.borderBottom = " 2px solid #0000FF"
  Paragraph_Output.appendChild(newCraetePara);
  text_of_para.value = '';
  newCraetePara.addEventListener('click' , function(){
    newCraetePara.remove();
  })
})

