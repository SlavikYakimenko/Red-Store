// <!--------------js toggle menu---------------->

let MenuItems = document.querySelectorAll('#MenuItems');

MenuItems.style.maxHeight = '20px'

function menuToggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight == "200px"
    } else
    {
        MenuItems.style.maxHeight == "0px"
    }
}

//product gallery

let productImg = document.getElementById("productImg");
let smallImg = document.getElementsByClassName('smallImg');
    smallImg[0].onclick = function (){
        productImg.src = smallImg[0].src;
    }
    smallImg[1].onclick = function (){
        productImg.src = smallImg[1].src;
    }
    smallImg[2].onclick = function (){
        productImg.src = smallImg[2].src;
    }
    smallImg[3].onclick = function (){
        productImg.src = smallImg[3].src;
    }


