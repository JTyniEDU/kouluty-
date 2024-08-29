function tieto() {
  var tieto1Element = document.getElementById("tieto1");
  if (tieto1Element.value.trim() === "") {
      console.log("NULL!");
  } else {
      console.log("Value is: " + tieto1Element.value);
  }
}