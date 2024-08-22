const luku = 17;
let output;
if (luku < 18) {
   output = "Alaikäinen";
} else {
   output = "Täysi-ikäinen"
}
document.getElementById("ika").innerHTML = output;