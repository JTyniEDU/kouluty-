const luku = 17;
let output;
if (luku < 18) {
   output = "Alaikäinen";
} else {
   output = "Täysi-ikäinen"
}
document.getElementById("ika").innerHTML = output;

let loopkerrat = 0;
let loopteksti = "";

do {
   loopteksti += "<br>Huhuu?!"
   loopkerrat++;
}
while (loopkerrat < 5);

document.getElementById("loop").innerHTML = loopteksti;

const asiat = ["Koira", "Kissa", "Hevonen", "Hiiri", "Marsu"];
let asiateksti = "";

for (let i = 0; i < asiat.length; i++) {
   asiateksti += asiat[i] + "<br>";
}

document.getElementById("asia").innerHTML = asiateksti;


function opn() {
   let etunimi = document.getElementById('etunimivalue');
   let sukunimi = document.getElementById('sukunimivalue');

   let etunimivalue = etunimi.value;
   let sukunimivalue = sukunimi.value;

   let opd = document.getElementById("op");
   opd.innerHTML = "Hei " + etunimivalue + " " + sukunimivalue;
}
