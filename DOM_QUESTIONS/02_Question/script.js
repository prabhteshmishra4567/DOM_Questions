var img1 = document.querySelector("#one");
var img2 = document.querySelector("#two");


document.querySelector('#button')
.addEventListener("click", function() {

    var tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;
})
