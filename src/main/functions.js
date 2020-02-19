/*function formatDate(dt){ 
  const lPadZeros = value => { return value.toString().length===1?'0'+value:value }
  
  const year = dt.getFullYear();
  const month = lPadZeros( dt.getMonth()+1 );
  const day = lPadZeros( dt.getDate() );

  const hours = lPadZeros( dt.getHours() );
  const minutes = lPadZeros( dt.getMinutes() );
  const seconds = lPadZeros( dt.getSeconds() );

  return year + '-' + month + '-' + day + ' ' + hours + ':'+ minutes + ':' + seconds
}

function sendPOST(url, data) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.addEventListener("load", function() {
      if (request.status < 400)
        resolve(request.response);
      else
        reject(new Error("Request failed: " + request.statusText));
    });
    request.addEventListener("error", function() {
      reject(new Error("Network error"));
    });
    console.log('POST Data:', data)
    request.send(JSON.stringify(data));
  });
}*/

function findEl(arr, id){
  for(let i=0; i<arr.length; i++){
    if(arr[i].id===id){
      return i;  
    }
  }
}

function deleteItemFromArray(arr, itemId){
  const indexToDel = findEl(arr, itemId); 
  arr.splice(indexToDel, 1);
}

function getNewId(scData){
  let newId = 0;

  for(let i=0; i<scData.length; i++){
    if ( parseInt(scData[i].id)> newId){
      newId = scData[i].id;
    }
  }
  return newId+1;
}

function getPageRows(items, pageNumber, rowsinPage){  
  const rowsCount = items.length;
  
  const firstRowNum = pageNumber * rowsinPage; 
  let lastRowNum = (pageNumber + 1) * rowsinPage; 
  if (lastRowNum>rowsCount) lastRowNum = rowsCount;
  
  let rows = [];
  for(let i=firstRowNum; i < lastRowNum; i++){
    rows.push(items[i]);
  }

  return rows;
}

//на входе - json, в котором указано в каком порядке сортируется и сам scrollerData
//на выходе - отсортированный scrollerData (изменяет текущий)
//const mSort = (scData, sortParams) => { 
function mSort(scData, sortParams) {   
  const defaultCompare = (a, b, fieldName, ascOrder) => {    
    if (a[fieldName] > b[fieldName]) { 
      return ascOrder?1:-1;
    }
    if (a[fieldName] < b[fieldName]) {
      return ascOrder?-1:1;         
    }  
    return 0; 
  }

  const floatCompare = (a, b, fieldName, ascOrder) => {  
    const first = isFinite(parseFloat(a[fieldName]))?parseFloat(a[fieldName]):0;
    const second = isFinite(parseFloat(b[fieldName]))?parseFloat(b[fieldName]):0;

    if (first > second) { 
      return ascOrder?1:-1;
    }
    if (first < second) {
      return ascOrder?-1:1;         
    }  
    return 0; 
  }

  const singleCompare = (a, b, currentSortParam) => {
    if (currentSortParam.type === 'float'){
      return floatCompare(a, b, currentSortParam.field, currentSortParam.ascOrder);
    }
    if (currentSortParam.type === 'default'){
      return defaultCompare(a, b, currentSortParam.field, currentSortParam.ascOrder);
    }
  }  
  
  const compareFunction = (a, b) => {
    let currentSortParam;

    for (let i=0; i<sortParams.length; i++){
      currentSortParam = sortParams[i];
      const currentResult = singleCompare(a, b, currentSortParam);
      if (currentResult!==0) {
        return currentResult;
      } 
    }
    return 0;
  } 

  return scData.sort(compareFunction);
}

function maskAmount(x) {
  if (!isFinite(x)) {
    return '';
  }

  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  parts[1] = parts[1]?parts[1].substring(0, 2):'00';
  return parts.join(".");
}

/*async function getDataFromBack(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.addEventListener("load", function() {
      if (request.status < 400)
        resolve(request.response);
      else
        reject(new Error("Request failed: " + request.statusText));
    });
    request.addEventListener("error", function() {
      reject(new Error("Network error"));
    });
    request.send();
  });
}*/

async function getDataFromBack(url) {
  let response = await fetch(url);
  if (response.ok) {
    return await response.json();
  } else {
    console.log("Ошибка HTTP: " + response.status);
    return false;
  }
}

export { findEl, mSort, getNewId, getPageRows, deleteItemFromArray, maskAmount, getDataFromBack };