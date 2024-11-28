import myJson from './fotky.json' assert {type: 'json'};

var fotos = [];
var fotos_popis = [];

for(let i=0;i<myJson.fotky.length;i++){
    fotos.push(myJson.fotky[i].cesta);
}
for(let i=0;i<myJson.fotky.length;i++){
    fotos_popis.push(myJson.fotky[i].popis);
}

/*
window.onload = function() {
    //when the document is finished loading, replace everything
    //between the <a ...> </a> tags with the value of splitText
    document.getElementById("foto1").innerHTML=fotos[0];
}
 */


//console.log(fotos);
let counter = 0;
myJson.fotky.forEach( function(obj) {
    counter ++;
    var img = new Image();
    /*
    var div = document.createElement('div');
    div.value = 'custom-value';
     */
    var a = document.createElement('a');
    a.setAttribute("data-fancybox", "gallery");
    a.setAttribute("data-caption", obj.nazov + "<p></p>" + obj.popis +
        "<p></p>" + obj.datum_cas);
    a.setAttribute("data-src", fotos[counter-1]);
    a.setAttribute("id", "obr" + counter + "_data");
    a.style.textAlign = "center";
    a.setAttribute("name", obj.popis)


    img.src = obj.cesta;
    img.setAttribute("class", "banner-img");
    img.setAttribute("alt", "effy");
    img.style.width = "470px";
    img.style.height = "470px";
    img.style.objectFit = "cover";
    img.style.margin = "1%";
    console.log(img.src)

    //console.log(counter)


    for(let i=0; i<fotos.length;i++){
        document.getElementById("obr_p").appendChild(a);

        document.getElementById("obr" + counter + "_data").appendChild(img);

    }

    /*
    document.getElementById("img-container").appendChild(img);
     */
});








