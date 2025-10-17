<steelsky>
{
  "title":"Search Site Directory",
  "description":"A list of all assets on this website."
}
</steelsky>
# Site Search

<select id="ss-filter" onchange="ssapi.listingUpdate()">
  <option value=".html">HTML</option> 
  <option value="all">All</option>
  <option value=".gif">GIF</option>
  <option value=".png">PNG</option>
  <option value=".jpg">JPG</option>
  <option value=".txt">TXT</option>
</select>
<input type="text" id="ss-search" onchange="ssapi.listingUpdate()" placeholder="search term">

<div id="ss-listing-area"></div>

<script src="/ssAPI.js"></script>
<script>
const ssapi = new SSAPI;
ssapi.listingUpdate();
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

