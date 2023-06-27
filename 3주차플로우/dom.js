// DOM 플로우 1번
window.onload = function () {
  const textOnload = document.getElementById("text_onload");
  textOnload.innerText = "글씨가 변경되었습니다.";
};

// DOM 플로우 2번
const $tab = document.getElementsByClassName("tab");
const $class = document.getElementsByClassName("class");
const fontcolor = ["red", "orange", "yellow", "green", "blue"];

function color() {
  for (let i = 0; i < $tab.length; i++) {
    $tab[i].addEventListener("mouseenter", function () {
      $tab[i].style.color = fontcolor[i];
      $tab[i].style.backgroundColor = "black";
    });
  }
}

color();

// DOM 플로우 3번
const id_1 = document.getElementById("one");
const id_2 = document.getElementById("two");
const id_3 = document.getElementById("three");
const id_4 = document.getElementById("four");
const id_5 = document.getElementById("five");

const idAll = [id_1, id_3, id_2, id_5, id_4];

function display() {
  for (let i = 0; i < $tab.length; i++) {
    $tab[i].addEventListener("click", function () {
      idAll[i].style.display = "none";
    });
  }
}

display();
