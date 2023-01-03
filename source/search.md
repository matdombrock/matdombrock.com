<steelsky>
{
  "title":"Search Site Directory",
  "description":"A list of all assets on this website."
}
</steelsky>
# Site Search

<select id="filter" onchange="ssList.updateFilter()">
  <option value=".html">HTML</option> 
  <option value="all">All</option>
  <option value=".gif">GIF</option>
  <option value=".png">PNG</option>
  <option value=".jpg">JPG</option>
  <option value=".txt">TXT</option>
</select>
<input type="text" id="search" onchange="ssList.updateFilter()" placeholder="search term">

<div id="listing-area"></div>


<script>
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const searchParam = urlParams.get('search') || urlParams.get('s');
// if(searchParam){
//   document.getElementById('search').value = searchParam;
// }

// let listing;

// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       listing = JSON.parse(xhttp.responseText);
//       updateFilter();
//     }
// };
// xhttp.open("GET", "/listing.json", true);
// xhttp.send();

// function updateFilter(){
//   const filterType = document.getElementById('filter').value || 'all';
//   const searchString = document.getElementById('search').value || '';
//   history.pushState({}, null, '?s='+encodeURIComponent(searchString)); 

//   const filtered = processListing(filterType, searchString);
//   if(filterType === '.html'){
//     renderListingPretty(filtered);
//   }else{
//     renderListing(filtered);
//   }
  
// }

// function renderListingPretty(listing){
//   let html = '';
//   if(listing.length === 0){
//     html = "<strong>No results for this filter.</string>";
//     document.getElementById('listing-area').innerHTML = html;
//     return;
//   }
//   html += 'Showing <strong>'+listing.length+'</strong> results:';
//   for(let item of listing){
//     const location = item.location;
//     const ext = item.path.ext;
//     html += '<div class="ss-listing-item-wrap">';
//     const name = Object.keys(item.meta).length > 0 ? item.meta.title : item.path.name;
//     html += '<div class="ss-listing-item-title"><a href="'+location+'">'+name+'</a></div>';
//     html += `<a href="${location}" class="ss-listing-item">${location}</a></br>`;
//     if(Object.keys(item.meta).length > 0){
//       html += item.meta.description || '';
//       html += "</br>";
//       html += item.meta.tags || '';
//     }
//     html += '</div>';
//   }
//   html += "<strong>End of listing.</string>";
//   document.getElementById('listing-area').innerHTML = html;
// }

// function renderListing(listing){
//   let html = "";
//   if(listing.length === 0){
//     html = "<strong>No results for this filter.</string>";
//     document.getElementById('listing-area').innerHTML = html;
//     return;
//   }
//   html += 'Showing <strong>'+listing.length+'</strong> results:';
//   for(let item of listing){
//     const location = item.location;
//     html += `<a href="${location}" class="ss-listing-item">${location}</a></br>`;
//   }
//   html += "<strong>End of listing.</string>";
//   document.getElementById('listing-area').innerHTML = html;
// }

// function processListing(filterType='all', searchString=''){
//   let filtered = [];
//   if (!listing){
//     alert("waiting for listing to load!");
//     return;
//   }
//   let hasResults = false;
//   for(let item of listing){
//     const ext = item.path.ext;
//     const location = item.location;
//     console.log(`${filterType} -> ${ext}`);
//     let passed = true;
//     // File filters
//     if(ext !== filterType){
//       passed = false;
//     }
//     if(filterType == 'all'){
//       passed = true;
//     }
//     // Text filter
//     if(!JSON.stringify(item).includes(searchString)){
//       passed = false;
//     }
//     if(passed){
//       filtered.push(item);
//       hasResults = true;
//     }
//   }
//   return filtered;
// }

</script>

<style>
.ss-listing-item-wrap{
  padding:0.75rem;
  margin:0.25rem;
}
.ss-listing-item-title{
  font-size:2rem;
}
.ss-listing-item-title a{
  text-decoration:none;
}
</style>

<script src="/ssList.js"></script>