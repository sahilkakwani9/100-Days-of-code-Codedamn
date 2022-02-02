//getting the scores object array from local storage
let scores = JSON.parse(localStorage.getItem("scores"));

//looping through the array and retrieving fields of the objects 
scores.map((score) => {
  var li = document.createElement("li");
  var text = document.createTextNode(" " + score.name + " - " + score.score);
  li.appendChild(text);
  var element = document.querySelector("ol");
  element.appendChild(li);
});

//event listener for clear button to clear the array
document.querySelector(".clear").addEventListener('click',function(){
    localStorage.setItem("scores",JSON.stringify([]));
    window.location.reload();
})