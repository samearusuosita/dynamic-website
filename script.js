var back = document.getElementById("back");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero1 = document.getElementById("hero1");

var backgroundImg = new Array (
    "/img/sample1.jpg",
    "/img/sample2.jpg",
    "/img/sample3.jpg",
    "/img/sample4.jpg",
    "/img/sample5.jpg",
);

let i = 0;
next.onclick = function(){
    if (i < 4){
        hero1.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        thumbnail[i+1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    };
   
};
back.onclick = function(){
    if (i > 0){
        hero1.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
        thumbnail[i-1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    };
   
};
