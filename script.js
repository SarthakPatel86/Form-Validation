let themebtn = document.querySelector("#theme");

themebtn.addEventListener("click", () => {
  let section = document.querySelector("section");
  let article = document.querySelector("article");
  let inputs = document.querySelectorAll("input");
  let button = document.querySelectorAll("button");
  if (themebtn.innerText === "Light") {
    section.style.backgroundColor = "white";
    article.style.backgroundColor = "white";
    article.style.border = "2px solid black";
    article.style.boxShadow = "0px 0px 20px black";

    inputs.forEach((input) => {
      input.style.backgroundColor = "white";
      input.style.border = "2px solid black";
      input.style.boxShadow = "0px 0px 20px black";
    });

    button[0].style.backgroundColor = "white";
    button[0].style.color = "black";
    button[0].style.border = "2px solid black";
    button[0].style.boxShadow = "0px 0px 20px black";
    button[1].style.backgroundColor = "white";
    button[1].style.color = "black";
    button[1].style.border = "2px solid black";
    button[1].style.boxShadow = "0px 0px 20px black";

    themebtn.innerText = "Dark";
  } else {
    section.style.backgroundColor = "black";
    article.style.backgroundColor = "black";
    article.style.border = "2px solid white";
    article.style.boxShadow = "0px 0px 20px white";
    inputs.forEach((input) => {
      input.style.backgroundColor = "black";
      input.style.border = "2px solid white";
      input.style.boxShadow = "0px 0px 20px white";
    });

    button[0].style.backgroundColor = "black";
    button[0].style.color = "white";
    button[0].style.border = "2px solid white";
    button[0].style.boxShadow = "0px 0px 20px white";
    button[1].style.backgroundColor = "black";
    button[1].style.color = "white";
    button[1].style.border = "2px solid white";
    button[1].style.boxShadow = "0px 0px 20px white";

    themebtn.innerText = "Light";
  }
});
