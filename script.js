//* search button work

const searchDevice = () =>{
   const searchInput = document.getElementById('search-input');
   let searchText = searchInput.value;
    // if search input empty   
   if(searchText == ''){
       let searchResult = document.getElementById('search-result');
       searchResult.innerHTML =`<p class = "no-result-found">No Device Found</p>`
       return searchResult;
   }
    // if search input not empty   
   else{
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
        .then(res1 => res1.json())
        .then(data1 => checkData(data1.status))
        const checkData = check =>{
            // if data matched
            if(check){
                let searchResult = document.getElementById('search-result');
                searchResult.innerHTML = ""
                const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
                fetch (url)
                .then(res => res.json())
                .then(data => displaySearchResults(data.data))
            }
            // if data not matched
            else{
                let searchResult = document.getElementById('search-result');
                searchResult.innerHTML =`
                <h1 class="no-result-found">No Result Found</h1>` 
                
                return searchResult;
            }
        }
    }
    searchInput.value ='' 
}

// display cards work
const displaySearchResults = datas => {
    let searchResult = document.getElementById('search-result');

    datas.slice(0,20).forEach(eachData => {

        //making cards
        const div = document.createElement('div')
        div.classList.add('device-card');
        div.innerHTML = `
        <div>
            <img src="${eachData.image}" alt="device">
            <h3 class="card-title">Model:${eachData.phone_name}</h3>
            <h4 class="card-text">Brand:${eachData.brand}</h4>
            <button id="details-btn" class="btn" onclick = "loadDeviceDetails('${eachData.slug}')"><a href="">Details</a></button>
        </div>`

        searchResult.appendChild(div);

    })

}

//full detail section

// Details button work
const loadDeviceDetails = deviceId => {
    let url = `https://openapi.programming-hero.com/api/phone/${deviceId}`
    fetch (url)
    .then(res => res.json())
    .then(data => displayDeviceDetails(data.data))
    
}

// display detail work
const displayDeviceDetails = datas => {
    let deviceDetails = document.getElementById('device-details');
    deviceDetails.textContent = ''
    // full detail card
        const div = document.createElement('div')
        div.classList.add('device-details');
        div.innerHTML = `
        <div class="div-1">
            <img src="${datas.image}" alt="device">
            <h3> <span class="span"> Model: </span> ${datas.name}</h3>
            <h4> <span class="span"> Brand: </span> ${datas.brand}</h4>
            <h4> <span class="span"> Release Date: </span> ${datas.releaseDate != '' ? datas.releaseDate : 'No Release Date Found'}</h4>
        </div>
        <div class="div-2">
            <h2>Main Feature</h2>
            <h4> <span class="span"> Display Size: </span> ${datas.mainFeatures.displaySize} </h4>
            <h4> <span class="span"> ChipSet: </span> ${datas.mainFeatures.chipSet} </h4>
            <h4> <span class="span"> Storage: </span> ${datas.mainFeatures.storage} </h4>
            <h4> <span class="span"> Memory: </span> ${datas.mainFeatures.memory} </h4>
            <h4> <span class="span"> Sensors: </span> ${datas.mainFeatures.sensors} </h4>
        </div>
        <div class="div-3">
            <h2>Others</h2>
            <h4> <span class="span"> Bluetooth: </span> ${datas.others != undefined ? datas.others.Bluetooth : "No Data Found"} </h4>

            <h4> <span class="span">WLAN: </span> ${datas.others != undefined ? datas.others.WLAN : "No Data Found"}</h4>

            <h4> <span class="span"> GPS: </span> ${datas.others != undefined ? datas.others.GPS : "No Data Found"} </h4>

            <h4> <span class="span"> NFC: </span> ${datas.others != undefined ? datas.others.NFC : "No Data Found"} </h4>

            <h4> <span class="span"> Radio: </span>  ${datas.others != undefined ? datas.others.Radio : "No Data Found"} </h4>

            <h4> <span class="span"> USB: </span> ${datas.others != undefined ? datas.others.USB : "No Data Found"} </h4>
        </div>
       `
    deviceDetails.appendChild(div);

}    
