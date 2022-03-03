
const searchDevice = () =>{
   const searchInput = document.getElementById('search-input');
   let searchText = searchInput.value;
   if(searchText = ''){
       let searchResult = document.getElementById('search-result');
       searchResult.innerText =`<p class = "no-device-found">No Device Found</p>`
       return searchResult;
   }else{
    let searchResult = document.getElementById('search-result');
    searchResult.innerText = ""
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch (url)
    .then(res => res.json())
    // .then(data => displaySearchResults(data))
    .then(data => console.log(data))
   }
    searchInput.value ='' 
}

// const displaySearchResults = data => {
//     // console.log(device)
//     let searchResult = document.getElementById('search-result');
//     data.forEach(eachData => {
//         console.log(eachData.slug)
//         const div = createElement('div');
//         div.clasList.add('device-cards');
//         div.innerText = `
//         <div>
//         <img src="${eachData.image}" alt="device">
//         <h4 class="card-title">Model:${eachData.phone_name}</h4>
//         <h4 class="card-text">Brand:${eachData.brand}</h4>
//         <button class="details-btn" onclick = "loadDeviceDetails('${eachData.slug}')">Details</button>
//      </div>`

//     })
// }

// const loadDeviceDetails = deviceId => {
//     console.log(deviceId)
// }
