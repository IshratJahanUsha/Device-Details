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

    datas.forEach(eachData => {

        //making cards
        const div = document.createElement('div')
        div.classList.add('device-card');
        div.innerHTML = `
        <div>
            <img src="${eachData.image}" alt="device">
            <h3 class="card-title">Model:${eachData.phone_name}</h3>
            <h4 class="card-text">Brand:${eachData.brand}</h4>
            <button id="details-btn" class="btn" onclick = "loadDeviceDetails('${eachData.slug}')">Details</button>
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
            <h4 class="card-title">Model: ${datas.name}</h4>
            <h4 class="card-text">Brand: ${datas.brand}</h4>
            <h4 class="card-text">Release Date: ${datas.releaseDate != '' ? datas.releaseDate : 'No Release Date Found'}</h4>
        </div>
        <div class="div-2">
            <h3>Main Feature</h3>
            <h4> <span> Display Size: <span> ${datas.mainFeatures.displaySize} </h4>
            <h4> <span> ChipSet: <span> ${datas.mainFeatures.chipSet} </h4>
            <h4> <span> Storage: <span> ${datas.mainFeatures.storage} </h4>
            <h4> <span> Memory: <span> ${datas.mainFeatures.memory} </h4>
            <h4> <span> Sensors: <span> ${datas.mainFeatures.sensors} </h4>
        </div>
        <div class="div-3">
            <h3>Others</h3>
            <h4> <span> Bluetooth: <span> ${datas.others != undefined ? datas.others.Bluetooth : "No Data Found"} </h4>
            <h4><span>WLAN: </span> ${datas.others != undefined ? datas.others.WLAN : "No Data Found"}</h4>
            <h4> <span> GPS: <span> ${datas.others != undefined ? datas.others.GPS : "No Data Found"} </h4>
            <h4> <span> NFC: <span> ${datas.others != undefined ? datas.others.NFC : "No Data Found"} </h4>
            <h4> <span> Radio: <span>  ${datas.others != undefined ? datas.others.Radio : "No Data Found"} </h4>
            <h4> <span> USB: <span> ${datas.others != undefined ? datas.others.USB : "No Data Found"} </h4>
        </div>
       `
    deviceDetails.appendChild(div);

}    



// data.slice(0,20).


