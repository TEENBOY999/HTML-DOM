let hello = document.querySelector("#hello");
hello.innerText = "Salom Frontendchilar";
hello.style.color = "green";
hello.style.fontSize = "40px";
hello.style.background = "red";
// alert(hello.innerHTML);

let item = document.getElementsByClassName("item");
item[0].style.color = "red";
item[1].style.color = "blue";
item[2].style.color = "orange";
item[3].style.color = "tomato";

let p = document.getElementsByTagName("p");
p[0].innerText = "Hello";
p[1].innerText = "Hello Axmadjon";
p[2].innerText = "Hello Doniyor";
p[2].style.color = "pink";
