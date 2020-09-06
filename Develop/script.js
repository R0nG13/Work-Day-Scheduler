
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
  console.log(rowHour)
  
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
        setColor(row, "red");
      } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
        setColor(row, "green");
      } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
        setColor(row, "lightgrey");
      } else {
        setColor(row, "lightyellow");
      }
    }
  });
  
  function setColor(element, color) {
    element.style.backgroundColor = color;
  }





  $(".saveBtn").click(function(e){
    e.preventDefault()
    console.log("clicked")
    value = $(this).siblings("textarea").val()
    textAreaId = $(this).siblings("textarea")[0].id
    console.log(textAreaId)
    localStorage.setItem(textAreaId, value)
})

$(".notes").each(function(){
    console.log($(this)[0].id)
    value = localStorage.getItem($(this)[0].id)
    console.log(value)
    $(this)[0].innerHTML = value
})
