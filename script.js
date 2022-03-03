// search button work

const searchDevice = () =>{
   const searchInput = document.getElementById('search-input');
   let searchText = searchInput.value;
   if(searchText == ''){
       let searchResult = document.getElementById('search-result');
       searchResult.innerHTML =`<p class = "no-device-found">No Device Found</p>`
       return searchResult;
   }else{
    let searchResult = document.getElementById('search-result');
    searchResult.innerText = ""
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch (url)
    .then(res => res.json())
    .then(data => displaySearchResults(data.data))
   }
    searchInput.value ='' 
}

const displaySearchResults = datas => {
    // console.log(datas)
    let searchResult = document.getElementById('search-result');
    datas.forEach(eachData => {
        // console.log(eachData.slug)
        const div = document.createElement('div')
        div.classList.add('device-cards');
        div.innerHTML = `
        <div>
            <img src="${eachData.image}" alt="device">
            <h4 class="card-title">Model:${eachData.phone_name}</h4>
            <h4 class="card-text">Brand:${eachData.brand}</h4>
            <button id="details-btn" class="btn" onclick = "loadDeviceDetails('${eachData.slug}')">Details</button>
        </div>`

        searchResult.appendChild(div);

    })

}

// detail button work

const loadDeviceDetails = deviceId => {
    const url = `https://openapi.programming-hero.com/api/phone/'${deviceId}'`
    fetch (url)
    .then(res => res.json())
    .then(data => displayDeviceDetails(data.data))
    // console.log(deviceId);
    // console.log(url);
}

const displayDeviceDetails = datas => {
    let deviceDetails = document.getElementById('device-details');
    datas.forEach(eachData => {
        const div = document.createElement('div')
        div.classList.add('device-details');
        div.innerHTML = `
        <div>
            <img src="${eachData.image}" alt="device">
            <h4 class="card-title">Model:${eachData.phone_name}</h4>
            <h4 class="card-text">Brand:${eachData.brand}</h4>
            <h4 class="card-text">Release Date:${eachData.releaseDate}</h4>
        </div>
        <div>
            <h4 class="card-mainFeature">Main Features:${eachData.mainFeatures}</h4>
            <h4 class="card-sensors">Sensors:${eachData.sensors}</h4>
        </div>
        <div>
            <h4 class="card-others">Others:${eachData.others}</h4>
        </div>
       `
        deviceDetails.appendChild(div);

        // console.log(datas);
        // console.log(eachData);
        // console.log(div);

    })

}    

//url Formet:  https://openapi.programming-hero.com/api/phone/${id}






