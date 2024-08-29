function tieto() {
  var tieto1 = document.getElementById("tieto1");
  var tieto2 = document.getElementById("tieto2");
  var varoitus = document.getElementById("variotus");
  if (tieto1.value.trim() === "") {
      console.log("Tyhjä input 1");
      document.getElementById("tietobtn").style.backgroundColor = "red";
      setTimeout(function() {
        document.getElementById("varoitus").style.visibility = "visible";
      }, 3000 );
  } else if (tieto2.value.trim() === "") {
    console.log("Tyhjä input 2");
    document.getElementById("tietobtn").style.backgroundColor = "red";
  } else {
    console.log("Tieto 1: " + tieto1.value);
    console.log("Tieto 2: " + tieto2.value)
  }
}