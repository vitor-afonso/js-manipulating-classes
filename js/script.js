/*jshint esversion: 6*/

function mudaCor(color) {
    if (color === "red") {
        document.getElementById(`exemplo`).classList.remove(`verde`);
        document.getElementById(`exemplo`).classList.remove(`azul`);
        document.getElementById(`exemplo`).classList.add(`vermelho`);
    } else if (color === "green") {
        document.getElementById(`exemplo`).classList.remove(`vermelho`);
        document.getElementById(`exemplo`).classList.remove(`azul`);
        document.getElementById(`exemplo`).classList.add(`verde`);
    } else {
        document.getElementById(`exemplo`).classList.remove(`vermelho`);
        document.getElementById(`exemplo`).classList.remove(`verde`);
        document.getElementById(`exemplo`).classList.add(`azul`);
    }
}