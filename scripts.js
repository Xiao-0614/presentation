const puppy = document.getElementById("puppy");
const bones = document.getElementById("bones");

function jump() {
    if (puppy.classList != "jump") {
        puppy.classList.add("jump");

        setTimeout(function () {
            puppy.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function() {
    let puppyTop = parseInt(window.getComputedStyle(puppy).getPropertyValue("top"));
    let bonesLeft = parseInt(window.getComputedStyle(bones).getPropertyValue("left"));

    if (bonesLeft < 50 && bonesLeft > 0 && puppyTop >= 140) {
        alert("Game Over!");
    }
}, 10);

document.addEventListener("keydown", function(event) {
    jump();
});