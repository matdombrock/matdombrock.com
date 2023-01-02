<steelsky>
{
  "title":"About You",
  "description":"Some info about you."
}
</steelsky>
# About You

You are a wonderful person, and here is everything I know about you:

<div id="coords">Allow Location</div>
<div id="windowInfo">...</div>
<div id="cookiesEnabled">...</div>
<div id="appName">...</div>
<div id="codeName">...</div>
<div id="browserEngine">...</div>
<div id="browserVersion">...</div>
<div id="browserAgent">...</div>
<div id="browserPlatform">...</div>
<div id="browserLanguage">...</div>
<div id="visitsStats">...</div>

Just kidding, this is all client-side only (I'm not saving it and can't see it), but this is just a small example of the kind of things that malicious sites can know about you. 

<script>
const coords = document.getElementById("coords");
const windowInfo = document.getElementById("windowInfo");
const cookiesEnabled = document.getElementById("cookiesEnabled");
const appName = document.getElementById("appName");
const codeName = document.getElementById("codeName");
const browserEngine = document.getElementById("browserEngine");
const browserVersion = document.getElementById("browserVersion");
const browserAgent = document.getElementById("browserAgent");
const browserLanguage = document.getElementById("browserLanguage");
const visitsStats = document.getElementById("visitsStats");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  coords.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
getLocation();

function getWindow(){
  const w = window.innerWidth;
  const h = window.innerHeight;
  windowInfo.innerHTML = "Window Width: "+w+"px</br>"+"Window Height: "+h+"px";
}
getWindow();

cookiesEnabled.innerHTML =
"cookiesEnabled: " + navigator.cookieEnabled;

appName.innerHTML =
"navigator.appName is " + navigator.appName;

codeName.innerHTML =
"navigator.appCodeName is " + navigator.appCodeName;

browserEngine.innerHTML =
"navigator.product is " + navigator.product;

browserVersion.innerHTML = navigator.appVersion;

browserAgent.innerHTML = navigator.userAgent;

browserPlatform.innerHTML = navigator.platform;

browserLanguage.innerHTML = navigator.language;

let _visits = localStorage.getItem('visits');
if(_visits === undefined){
  _visits = 0;
}
_visits++;
visitsStats.innerHTML = "This browser has been here " + _visits + " times";

</script>