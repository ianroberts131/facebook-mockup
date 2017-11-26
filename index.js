window.onload = function() {
  var birthYearSelect = document.getElementById("year-sel");
  populateBirthDay()
  populateBirthYears();
}

// Populate birthday options
// Do this to avoid cluttering HTML
function populateBirthDay() {
  for (var i = 1; i < 32; i++) {
    var birthDaySelect = document.getElementById("day-sel");
    var option = document.createElement("option");
    option.text = i;
    birthDaySelect.add(option);
  }
}

// Populate birth year options
// Do this to avoid cluttering HTML
function populateBirthYears() {
  for (var i = 2017; i > 1904; i--) {
    var birthYearSelect = document.getElementById("year-sel");
    var option = document.createElement("option");
    option.text = i;
    birthYearSelect.add(option);
  }
}

function changeLogoText() {
  var logo = document.getElementById("facebook-logo");
  var text = logo.innerHTML
  logo.innerHTML = text === "facebook" ? "Ian Roberts" : "facebook"
}