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

    for (i = 0; i <data.length; i++) {
        htmlString +=
            "<p>" + "Patient's name is" +
            data[i].name +
            "this patient has" +
            data[i].diagnosis + "as a current diagnosis" +
            data[i].vitaminDeficiencies + "are the current vitamin deficiencies" +
            data[i].treatment + "is suggested for treatment" +
            data[i].symptoms + "are current symptoms";
    for (ii = 0; ii < data[i].symptoms.allergies.length; ii++){
        if (ii == 0) {
            htmlString += data[i].symptoms.allergies[ii];
        } else {
            htmlString += "and" + data[i].symptoms.allergies[ii];
        }
    }
        ////Tasha you will have to go back and do the dislikes the same way you did for loop for the likes..

    
          ".</p>";
    }


    patientContainer.insertAdjacentHTML('beforeend', 'htmlString');
}

