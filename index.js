let imgCard = document.querySelector("div.img_card img")
let imgCards = document.querySelectorAll("div.img_cards div img")
for(let i = 0 ; i < imgCards.length ; i++){
    imgCards[i].onclick = changImage
}
function changImage(){
    let change = this.getAttribute("src")
    let cover = imgCard.getAttribute("src")
    this.setAttribute("src", cover)
    imgCard.setAttribute("src", change) 
}

let num = document.querySelector(".num")
let fPrice = document.querySelector(".fPrice")


num.addEventListener("click",()=>{
    fPrice.value = num.value*498000
    
})



