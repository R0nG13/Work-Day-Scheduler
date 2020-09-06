
const today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY"));



const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
        $("span").addClass("present");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
        $("span").addClass("future");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
        $("span").addClass("past");
    } else {
      $("span").addClass("planning");

    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}