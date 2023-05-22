document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);
function mouseOver() {
    document.getElementById("demo").innerText= "<p>Watering needs can vary depending on<br> the plant and the environment
    it's<br> in.Overwatering can lead to root rot<br> while under-watering can cause the<br> plant to wilt and die. </";
  }
  
  function mouseOut() {
    document.getElementById("demo").innerText = "water";