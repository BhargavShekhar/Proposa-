var yes = document.querySelector("#yes")
var no = document.querySelector("#no")

var req = ["Are you sure?", "Really sure?", "Are you positive", "Just think about it", "If you say no,I'll be very sad", "I'll be very very sad", "I'll be very very very sad", "I'll be very very very very sad", "Ok fine, I'll stop asking", "Just kidding, PLEASE SAY YES", "I'll be very very sad", "I'll be very very very sad", "I'll be very very very very sad", "You're breaking my heart;("]

var cnt = 0
var height = 50
var width = 50

no.addEventListener("click", () => {
    if(cnt == 14){
        cnt = 0
    }

    no.innerHTML = req[cnt]

    yes.style.height = `${height}px`
    yes.style.width = `${width}px`

    height += 50
    width += 50

    cnt += 1
    console.log(cnt)
    console.log(yes.style.height)
    console.log(yes.style.width)
})

yes.addEventListener("click", () => {
    document.querySelector(".main").style.opacity = 0
    yes.style.opacity = 0
    no.style.opacity = 0
    document.querySelector(".kiss").style.opacity = 1
    document.querySelector("h1").innerHTML = "OKI YAY !!"
})

var play = document.querySelector("body")
var flg = 0

function playMusic() {
    var audio = new Audio("bg.mp3")
    audio.play()
}

function clickHandler() {
    playMusic()
    console.log("Bg Playing!!")
    play.removeEventListener("click", clickHandler)
}

if(flg == 0){
    play.addEventListener("click", clickHandler)
    flg = 1
}
