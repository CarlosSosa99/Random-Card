/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = () => {
  document.querySelector("#left-icon").innerHTML = generateIcon();
  document.querySelector("#number").innerHTML = generateNumber();
};
let generateIcon = () => {
  let Icon = ["♠", "♣", "♥"];
  let IndexIcon = Math.floor(Math.random() * Icon.length);
  document.querySelector("#right-icon").innerHTML = Icon[IndexIcon];
  return Icon[IndexIcon];
};

let generateNumber = () => {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumber = Math.floor(Math.random() * number.length);
  return number[indexNumber];
};
