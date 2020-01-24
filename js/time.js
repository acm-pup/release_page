function updateClock() {
        var dt = new Date();
        document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
        setTimeout(updateClock, 1000);
    }
updateClock();

function getScreenDimen() {
  var x = "Width : " + screen.availWidth;
  var y = " Height : " + screen.availHeight;
  document.getElementById("dimen").innerHTML = x + y;
}
getScreenDimen();