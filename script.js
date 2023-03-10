// selecting all requires elements

let dropArea=document.querySelector(".drag-area");


//if user grag file over drag area
dropArea.addEventListener("dragover",()=>{
    console.log("File is Over DragArea");
    dropArea.classList.add("active");
});


// if file is outside drag area
dropArea.addEventListener("dragleave",()=>{
    console.log("File is Outside from DragArea");
    dropArea.classList.remove("active");
});