console.log("script chargé");


function direBonjour() {
        var nom = "";
        nom = document.getElementById("nom");
        console.log("nom :" + nom.value);
        if(nom!=null) {
            var span = document.getElementById("span");
            span.setAttribute("class","visible")
            span.innerHTML = "Bonjour " + nom.value;

        }
}