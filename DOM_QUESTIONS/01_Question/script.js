var btn = document.querySelector("button");
var text = document.querySelector('p');
btn.style.color = "red"

btn.addEventListener("click", function(){
    text.textContent = "The human race has one really effective weapon, and that is laughter~Mark Twain"
    btn.textContent = "Clicked.";

});