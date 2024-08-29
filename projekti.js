function tieto() {
  var tieto1 = document.getElementById("tieto1");
  var tieto2 = document.getElementById("tieto2");
  var tietobtn = document.getElementById("tietobtn");
  var varoitus = document.getElementById("varoitus");

  varoitus.style.visibility = "hidden";
  varoitus.innerHTML = "";

  if (tieto1.value.trim() === "") {
    console.log("Tyhjä input 1");
    tietobtn.style.backgroundColor = "red";
    setTimeout(function() {
      varoitus.style.visibility = "visible";
      varoitus.innerHTML += "Täytä kenttä 1!";
    }, 0);
    setTimeout(function() {
      varoitus.style.visibility = "hidden";
      varoitus.innerHTML = "";
    }, 3000);
  } else if (tieto2.value.trim() === "") {
    console.log("Tyhjä input 2");
    tietobtn.style.backgroundColor = "red";
  } else {
    console.log("Tieto 1: " + tieto1.value);
    console.log("Tieto 2: " + tieto2.value);
  }
}