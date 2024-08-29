document.getElementById("tietobtn").addEventListener("click", tieto);

function tieto() {
  var tieto1 = document.getElementById("tieto1");
  var tieto2 = document.getElementById("tieto2");
  var tietobtn = document.getElementById("tietobtn");
  var varoitus = document.getElementById("varoitus");
  var tietoa = document.getElementById("tietoa");

  varoitus.style.visibility = "hidden";
  varoitus.innerHTML = "";
  tietoa.style.visibility = "hidden";
  tietoa.innerHTML = "";

  if (tieto1.value.trim() === "" || tieto2.value.trim() === "") {
    tietobtn.style.backgroundColor = "red";
    tietobtn.innerHTML = "Virhe! En lisännyt tietoa.";
    setTimeout(function() {
      varoitus.style.visibility = "visible";
      varoitus.innerHTML = "Täytä kaikki kentät";
    }, 0);
    setTimeout(function() {
      varoitus.style.visibility = "hidden";
      varoitus.innerHTML = "";
    }, 3000);
  } else {
    console.log("Tieto 1: " + tieto1.value);
    console.log("Tieto 2: " + tieto2.value);
    tietobtn.style.backgroundColor = "#332C2C";
    tietobtn.innerHTML = "Lisää tieto";
    tietoa.style.visibility = "visible";
    tietoa.innerHTML += (tieto1.value + ": " + tieto2.value);
  }
}

function kurssi() {
  var checkbox = document.getElementById("suoritus");
}