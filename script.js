var left=document.querySelector('.left-slide')
var right=document.querySelector('.right-slide')
var btn2=document.querySelector('.down-button')
var btn1=document.querySelector('.up-button')
var slides=document.querySelectorAll('.right-slide div')
var x=0
btn1.addEventListener('click',function(){
    x++
    if(x>slides.length-1){
        x=0
    }
    updown()
})

btn2.addEventListener('click',function(){
    x--
    if(x<0){
        x=slides.length-1

    }

    updown()

})

function updown(){
    right.style.transform=`translateY(-${x*100}vh)`
    left.style.transform=`translateY(${x*100}vh)`

}
