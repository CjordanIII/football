"use strict";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];
let theButton = document.querySelector("#theButton");

theButton.addEventListener("click", function () {
  let theDroptdwon = document.querySelector("#footballSelect");
  let resultsParagraph = document.querySelector("#results");
  let selectedIndex = theDroptdwon.selectedIndex;
  let selectedTeam = teams[selectedIndex];
  resultsParagraph.textContent =
    selectedTeam.name + " plays at " + selectedTeam.plays;
});
// function initDroptdown() {
let theDroptdwon = document.querySelector("#footballSelect");
let numberOfTeams = teams.length;
for (let index = 0; index < numberOfTeams; index++) {
  let newOption = document.createElement("option");
  newOption.textContent = teams[index].name;

  newOption.value = teams[index].code;
  theDroptdwon.appendChild(newOption);
}
// }
