const url = "http://localhost:8808";

var pageCounter = 1;

var patientContainer = document.getElementById("patient-info")

var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "`${url}/patients`' + pageCounter + ' .json");
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++;
});

//function to add HTML to the page, add html to empty div
function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + "has" + data[i].diagnosis + ".</p>";
    }


    patientContainer.insertAdjacentHTML('beforeend', 'htmlString');
}

