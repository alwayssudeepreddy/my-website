var a= Math.floor(6*Math.random())+1
var b= Math.floor(6*Math.random())+1
var image1= "images/dice"+a+".png"
var image2= "images/dice"+b+".png"
document.querySelectorAll("img")[0].setAttribute("src",image1)
document.querySelectorAll("img")[1].setAttribute("src",image2)
if(a>b){
    document.querySelector("h6").innerHTML="Player 1 wins"
}
else if(a<b){
    document.querySelector("h6").innerHTML="Player 2 wins"
}
else{
    document.querySelector("h6").innerHTML="Draw"
}
document.querySelector("button").addEventListener("click",function(){
    window.location.reload()
})
