let scores = JSON.parse(localStorage.getItem("scores"));

scores.map((score) => {
  var li = document.createElement("li");
  var text = document.createTextNode(" " + score.name + " - " + score.score);
  li.appendChild(text);
  var element = document.querySelector("ol");
  element.appendChild(li);
});

document.querySelector(".clear").addEventListener('click',function(){
    localStorage.setItem("scores",JSON.stringify([]));
    window.location.reload();
})