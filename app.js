// function clicks(){
//     alert(' Why Your Click !!!!')
// }

// function purc(){
//     alert(' Why Your Click !!!!')

// }


//   function deleteRow(e){
//     e.parentElement.parentElement.remove();
    
//   }


// var count = 0;
// function changeCounter(val) {
//   count += val;
//   document.getElementById('counter').textContent = count;
// }

// var inp = document.getElementById('inp');
// var sub = document.getElementById('sub');
// var ul = document.getElementById('ul')


// function clr(){
//     ul.innerHTML = "";
// }

// function editTask(e){
// console.log(e)
//     var getValue = prompt("Enter the updated value",e.parentNode.parentNode.firstChild.textContent);
//     e.parentNode.parentNode.firstChild.textContent = getValue;
// }

// function submit(){
//     if(inp.value == ""){
//         alert("Enter Your Value")
//     }else{
//         ul.innerHTML += `<li class=" m-2 bg-info text-dark"> ${inp.value} <span> <button class=" btn btn-primary " onclick='editTask(this)' >Edit</button> <button class="btn btn-secondary" onclick="this.parentNode.parentNode.remove()">Delete</button></span> </li>`;

//         inp.value = "";
//     }
   



// }

function toggleText() {
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.textContent = "Read less";
    } else {
      moreText.style.display = "none";
      btnText.textContent = "Read more";
    }
  }