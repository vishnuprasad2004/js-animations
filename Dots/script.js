const colorsCombo1 = ['red','orange','lightgreen','indigo','blue']; // Default
const colorsCombo2 = ['#e5243f','#f65c51','#f7b15c','#54c6be','#2f5755']; // muted
const colorsCombo3 = ['#ea1953','#f93459','#89045d','#362951','#c48494']; // pinkish blue

addEventListener("resize",() => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;    
}) 
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

document.body.addEventListener("mousemove",(event)=> {
    let idx = parseInt(Math.random()*5);
    ctx.beginPath();
    ctx.arc(event.pageX, event.pageY, /*radius*/50, 0, Math.PI*2, true);         
    ctx.fillStyle = colorsCombo2[idx];
    ctx.fill();
    ctx.strokeStyle = `#333333`;// stroke color
    ctx.stroke();            
});