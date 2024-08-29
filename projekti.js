function tieto() {
  var tieto1Element = document.getElementById("tieto1");
  if (tieto1Element.value.trim() === "") {
      console.log("Tyhjä input");
      document.getElementById("tietobtn").style.backgroundColor = "red";
  } else {
      console.log("Tieto 1: " + tieto1Element.value);
  }
}