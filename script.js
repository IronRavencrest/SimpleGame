const mario = document.getElementById("mario")
const goomba = document.getElementById("goomba")

document.addEventListener("keydown", function(event){
    jump();
});

function jump(){
    if(mario.classList != "jump"){
        mario.classList.add("jump")
    }
    setTimeout(function(){
        mario.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval(function(){
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"))
    let goombaLeft = parseInt(window.getComputedStyle(goomba).getPropertyValue("left"))

    if (goombaLeft < 50 && goombaLeft > 0 && marioTop >= 140) {
        alert("GAME OVER")
        location.reload(true);
    }
}, 10)