
function getDataFromApi(apiEndpoint) {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', apiEndpoint, true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            var responseData = JSON.parse(xhr.responseText);
            return responseData
        } else {
            return xhr.status
        }
    };

    xhr.onerror = function () {
        return "Network error"
    };

    xhr.send();
}

var apiEndpoint = "https://your-backend-api-endpoint"; 
getDataFromApi(apiEndpoint, function (error, data) {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Data:", data);
    }
});

function renderTeams() {
    const teamsList = document.getElementById('teamsList');
    teamsData.forEach(team => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = team.url;
        link.textContent = `${team.conference} - ${team.team}`;
        listItem.appendChild(link);
        teamsList.appendChild(listItem);
    });
}

window.onload = renderTeams;


