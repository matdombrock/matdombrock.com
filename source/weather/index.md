<steelsky>
{
  "title":"Weather",
  "description":"Wrapper for wttr.in"
}
</steelsky>
Provided by [wttr.in](https://wttr.in)

<div id="demo">Loading</div>
<!-- <div id="demo2">Loading</div> -->
<script>
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://wttr.in?m", true);
xhttp.send();
// var xhttp2 = new XMLHttpRequest();
// xhttp2.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//        // Typical action to be performed when the document is ready:
//        document.getElementById("demo2").innerHTML = xhttp2.responseText;
//     }
// };
// xhttp2.open("GET", "https://v2.wttr.in?m", true);
// xhttp2.send();
</script>