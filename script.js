const luku = 17;
let output;
if (luku < 18) {
   output = "Alaikäinen";
} else {
   output = "Täysi-ikäinen"
}
document.getElementById("ika").innerHTML = output;

const loopkerrat = 5;
let loopteksti = "";

do {
   loopteksti += "<br>Huhuu?!"
   loopkerrat++;
}
while (loopkerrat < 5);

document.getElementById("loop").innerHTML = loopteksti;