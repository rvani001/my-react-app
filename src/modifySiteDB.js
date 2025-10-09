export function addSiteAPI(siteName, siteCode, inverter) {
    // define the function to add new site to DynamoDB
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({ Site: siteName, Code: siteCode, Inverter: inverter });
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://za02up3nab.execute-api.ap-southeast-1.amazonaws.com/dev", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

/* Update all sites from DynamoDB and populate when Edit Window is open*/
const onSelectEditWindow = document.getElementById('editSiteButton');
onSelectEditWindow.addEventListener('click', function() {
    getAllSiteAPI();
})

const addButton = document.getElementById('addSite');
addButton.addEventListener('click', function() {
    if (confirm('Are you sure you want to add this site?')) {
        addSiteAPI(document.getElementById('siteName').value , 
                   document.getElementById('siteCode').value , 
                   document.getElementById('inverter').value);
        getAllSiteAPI(); // Refresh the site list after addition
    }
})

const deleteButton = document.getElementById('deleteSite');
deleteButton.addEventListener('click', function() {
    if (confirm('Are you sure you want to delete this site?')) {
        // Call the function to delete the site here
        getAllSiteAPI(); // Refresh the site list after deletion
    }
})

export function getAllSiteAPI() {
    // define the function to add new site to DynamoDB
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = " "; //JSON.stringify({ Site: siteName, Code: siteCode, Inverter: inverter });
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        //body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://z60udsow75.execute-api.ap-southeast-1.amazonaws.com/dev", requestOptions)
        .then(response => response.json())
        .then(result => {
            const allSiteList = JSON.parse(result.body);
            const selectElement = document.getElementById('dynamicSelectSites');
            selectElement.innerHTML = ''; // Clear existing options
            allSiteList.forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                selectElement.appendChild(option);
            })
            console.log(allSiteList);
        })
        .catch(error => console.log('error', error));
}


const selectSiteDisplay = document.getElementById('dynamicSelectSites');
selectSiteDisplay.addEventListener('change', function() {
    handleSiteSelectChange(selectSiteDisplay.value);
})

export function handleSiteSelectChange(selectedSite) {
    document.getElementById('siteDetail').innerHTML = selectedSite;
}
/* async function getAllSiteAPI() {
    var allSiteList;
    try {
        var myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
        const response = await fetch("https://z60udsow75.execute-api.ap-southeast-1.amazonaws.com/dev", requestOptions);
    
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        allSiteList = JSON.parse(result.body);

        const selectElement = document.getElementById('dynamicSelectSites');
        allSiteList.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            selectElement.appendChild(option);
        })

    } catch (error) {
        console.log('error', error);
        return null;
    }

    console.log(allSiteList);
    return allSiteList;
} */ 