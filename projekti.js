function tieto() {
    var x = document.getElementById("alert");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }