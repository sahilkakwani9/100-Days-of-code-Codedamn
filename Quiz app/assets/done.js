let scores = JSON.parse(localStorage.getItem('scores')) || [];
let timer = localStorage.getItem('timer');
const btnclicked = () =>{
    let initials = document.querySelector(".initials").value;
    const score = {
        name: initials,
        score: timer
    }
    
    scores.push(score);
    localStorage.setItem('scores', JSON.stringify(scores));
}

document.getElementsByClassName('timer')[0].innerHTML = timer;
document.getElementsByClassName('timer')[1].innerHTML = timer;

let btn = document.querySelector("button");
btn.addEventListener('click',btnclicked);