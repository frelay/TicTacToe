"use strict";

let move = 0;
let result = "";
const field = document.getElementById("field");
const contentWrapper = document.getElementById("content");
const modalResult = document.getElementById("modal-result-wrapper");
const overlay = document.getElementById("overlay");
const btnClose = document.getElementById("btn-close");

field.addEventListener("click", (event) => {
  if ((event.target.className = "box")) {
    if (move % 2 === 0) {
      event.target.innerHTML = "X";
    } else {
      event.target.innerHTML = "O";
    }
    move++;
    check();
  }
});

const check = () => {
  const boxes = document.getElementsByClassName("box");
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].innerHTML === "X" &&
      boxes[arr[i][1]].innerHTML === "X" &&
      boxes[arr[i][2]].innerHTML === "X"
    ) {
      result = "Крестики";
      prepareResult(result);
    } else if (
      boxes[arr[i][0]].innerHTML === "O" &&
      boxes[arr[i][1]].innerHTML === "O" &&
      boxes[arr[i][2]].innerHTML === "O"
    ) {
      result = "Нолики";
      prepareResult(result);
    }
  }
};

const prepareResult = (winner) => {
  if (winner === "Крестики" || winner === "Нолики") {
    contentWrapper.innerHTML = `Победили ${winner}`;
  } else if (winner === "Ничья") {
    contentWrapper.innerHTML = `Ничья`;
  }
  modalResult.style.display = "block";
};

const closeModal = () => {
  modalResult.style.display = "none";
  location.reload();
};

overlay.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);
