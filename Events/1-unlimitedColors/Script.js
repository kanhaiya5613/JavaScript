// generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = "#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
    
}
const changebgColor = function(){
    document.body.style.backgroundColor = randomColor();
}
let intervalId;
const StartcolorChanger = function(){
    if(!intervalId){
        intervalId=setInterval(changebgColor,1000)
    }
};
const stopcolorChanger = function(){
    clearInterval(intervalId)
    intervalId = null;
}
document.querySelector('#start').addEventListener('click',StartcolorChanger)
document.querySelector("#stop").addEventListener('click',stopcolorChanger)


