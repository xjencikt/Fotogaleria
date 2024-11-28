function findPhoto() {
    var input, filter, ul, fotky_mena, txtValue

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("obr_p");
    fotky_mena = ul.getElementsByTagName("a");
    for (let j = 0; j < fotky_mena.length; j++) {
        txtValue = fotky_mena[j].getAttribute("name")
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            fotky_mena[j].style.display = "";
        } else {
            fotky_mena[j].style.display = "none";
        }
    }
}