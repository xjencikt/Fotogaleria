import myJson from './fotky.json' assert {type: 'json'};


///-KASTIEL--------------------------
var bratislava = []
for(let i=0;i<2;i++){
    bratislava.push(myJson.fotky[i]);
}



let bratislava_counter = 0;
bratislava.forEach( function(obj) {
    bratislava_counter ++;


    var bratislava_fotky = document.createElement('a');
    bratislava_fotky.setAttribute("data-fancybox", "gallery01");
    bratislava_fotky.setAttribute("data-caption", obj.nazov + "<p></p>" + obj.popis +
        "<p></p>" + obj.datum_cas);
    bratislava_fotky.setAttribute("data-src", bratislava[bratislava_counter-1].cesta);
    bratislava_fotky.setAttribute("id", "bratislava" + bratislava_counter);
    bratislava_fotky.setAttribute("name", obj.popis)
    bratislava_fotky.style.textAlign = "center";


    var img = new Image();
    img.src = obj.cesta;
    img.setAttribute("class", "banner-img");
    img.setAttribute("alt", "effyj");
    img.style.objectFit = "cover";
    img.style.margin = "1%";




    for(let i=0; i<2;i++){
        document.getElementById("obr_bratislava").appendChild(bratislava_fotky);


        document.getElementById("bratislava" + bratislava_counter).appendChild(img);
    }

})

////-FUTBALOVY STADION----------------

var chorvatsko = []
for(let i=2;i<3;i++){
    chorvatsko.push(myJson.fotky[i]);
}
let chorvatsko_counter = 0;
chorvatsko.forEach( function(obj) {
    chorvatsko_counter ++;
    var img = new Image();



    var chorvatsko_fotky = document.createElement('a');
    chorvatsko_fotky.setAttribute("data-fancybox", "gallery02");
    chorvatsko_fotky.setAttribute("data-caption", obj.nazov + "<p></p>" + obj.popis +
        "<p></p>" + obj.datum_cas);
    chorvatsko_fotky.setAttribute("data-src", chorvatsko[chorvatsko_counter-1].cesta);
    chorvatsko_fotky.setAttribute("id", "chorvatsko" + chorvatsko_counter);
    chorvatsko_fotky.setAttribute("name", obj.popis)
    chorvatsko_fotky.style.textAlign = "center";


    img.src = obj.cesta;
    img.setAttribute("class", "banner-img");
    img.setAttribute("alt", "effyj");
    img.style.objectFit = "cover";
    img.style.margin = "1%";

    //console.log(chorvatsko[chorvatsko_counter-1].cesta)

    for(let i=0; i<1;i++){
        document.getElementById("obr_chorvatsko").appendChild(chorvatsko_fotky);


        document.getElementById("chorvatsko" + chorvatsko_counter).appendChild(img);
    }

})



////-MEDVED----------------

var gdansk = []
for(let i=3;i<5;i++){
    gdansk.push(myJson.fotky[i]);
}
let gdansk_counter = 0;
gdansk.forEach( function(obj) {
    gdansk_counter ++;
    var img = new Image();



    var gdansk_fotky = document.createElement('a');
    gdansk_fotky.setAttribute("data-fancybox", "gallery03");
    gdansk_fotky.setAttribute("data-caption", obj.nazov + "<p></p>" + obj.popis +
        "<p></p>" + obj.datum_cas);
    gdansk_fotky.setAttribute("data-src", gdansk[gdansk_counter-1].cesta);
    gdansk_fotky.setAttribute("id", "gdansk" + gdansk_counter);
    gdansk_fotky.setAttribute("name", obj.popis)
    gdansk_fotky.style.textAlign = "center";


    img.src = obj.cesta;
    img.setAttribute("class", "banner-img");
    img.setAttribute("alt", "effyj");
    img.style.objectFit = "cover";
    img.style.margin = "1%";

    //console.log(gdansk[gdansk_counter-1].cesta)

    for(let i=0; i<2;i++){
        document.getElementById("obr_gdansk").appendChild(gdansk_fotky);


        document.getElementById("gdansk" + gdansk_counter).appendChild(img);
    }

})

////-KOLIBA----------------

var plitvice = []
for(let i=5;i<8;i++){
    plitvice.push(myJson.fotky[i]);
}
let plitvice_counter = 0;
plitvice.forEach( function(obj) {
    plitvice_counter ++;
    var img = new Image();

    var plitvice_fotky = document.createElement('a');
    plitvice_fotky.setAttribute("data-fancybox", "gallery04");
    plitvice_fotky.setAttribute("data-caption", obj.nazov + "<p></p>" + obj.popis +
        "<p></p>" + obj.datum_cas);
    plitvice_fotky.setAttribute("data-src", plitvice[plitvice_counter-1].cesta);
    plitvice_fotky.setAttribute("id", "plitvice" + plitvice_counter);
    plitvice_fotky.setAttribute("name", obj.popis)
    plitvice_fotky.style.textAlign = "center";


    img.src = obj.cesta;
    img.setAttribute("class", "banner-img");
    img.setAttribute("alt", "effyj");
    img.style.objectFit = "cover";
    img.style.margin = "1%";

    //console.log(plitvice[plitvice_counter-1].cesta)

    for(let i=0; i<2;i++){
        document.getElementById("obr_plitvice").appendChild(plitvice_fotky);


        document.getElementById("plitvice" + plitvice_counter).appendChild(img);
    }

})

////-praha----------------

var praha = []
for(let i=8;i<10;i++){
    praha.push(myJson.fotky[i]);
}
let praha_counter = 0;
praha.forEach( function(obj) {
    praha_counter ++;
    var img = new Image();

    var praha_fotky = document.createElement('a');
    praha_fotky.setAttribute("data-fancybox", "gallery05");
    praha_fotky.setAttribute("data-caption", obj.nazov + "<p></p>" + obj.popis +
        "<p></p>" + obj.datum_cas);
    praha_fotky.setAttribute("data-src", praha[praha_counter-1].cesta);
    praha_fotky.setAttribute("id", "praha" + praha_counter);
    praha_fotky.setAttribute("name", obj.popis)
    praha_fotky.style.textAlign = "center";


    img.src = obj.cesta;
    img.setAttribute("class", "banner-img");
    img.setAttribute("alt", "effyj");
    img.style.objectFit = "cover";
    img.style.margin = "1%";

    //console.log(praha[praha_counter-1].cesta)

    for(let i=0; i<2;i++){
        document.getElementById("obr_praha").appendChild(praha_fotky);


        document.getElementById("praha" + praha_counter).appendChild(img);
    }

})
////-praha----------------

var santorini = []
for(let i=10;i<12;i++){
    santorini.push(myJson.fotky[i]);
}
let santorini_counter = 0;
santorini.forEach( function(obj) {
    santorini_counter ++;
    var img = new Image();

    var santorini_fotky = document.createElement('a');
    santorini_fotky.setAttribute("data-fancybox", "gallery06");
    santorini_fotky.setAttribute("data-caption", obj.nazov + "<p></p>" + obj.popis +
        "<p></p>" + obj.datum_cas);
    santorini_fotky.setAttribute("data-src", santorini[santorini_counter-1].cesta);
    santorini_fotky.setAttribute("id", "santorini" + santorini_counter);
    santorini_fotky.setAttribute("name", obj.popis)
    santorini_fotky.style.textAlign = "center";


    img.src = obj.cesta;
    img.setAttribute("class", "banner-img");
    img.setAttribute("alt", "effyj");
    img.style.objectFit = "cover";
    img.style.margin = "1%";

    //console.log(santorini[santorini_counter-1].cesta)

    for(let i=0; i<2;i++){
        document.getElementById("obr_santorini").appendChild(santorini_fotky);


        document.getElementById("santorini" + santorini_counter).appendChild(img);
    }

})

export { bratislava, chorvatsko, gdansk, plitvice, praha, santorini };

///-MAPY------------------


const gps = {lat: 48.93631668559258, lon: 21.899191733950385 } ;
var map = L.map('map').setView(gps, 3);



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

var gal = document.getElementById("obr_bratislava");



L.control.scale({imperial: true, metric: true}).addTo(map);

// show a marker on the map
var marker1 = L.marker({lat : bratislava[0].x,lon : bratislava[0].y}).addTo(map).on('click', onBratislava);
var marker2 = L.marker({lat : chorvatsko[0].x,lon : chorvatsko[0].y}).addTo(map).on('click', onChrovatsko);
var marker3 = L.marker({lat : gdansk[0].x,lon : gdansk[0].y}).addTo(map).on('click', onGdansk);
var marker4 = L.marker({lat : plitvice[0].x,lon : plitvice[0].y}).addTo(map).on('click', onPlitvice);
var marker5 = L.marker({lat : praha[0].x,lon : praha[0].y}).addTo(map).on('click', onPraha);
var marker6 = L.marker({lat : santorini[0].x,lon : santorini[0].y}).addTo(map).on('click', onSantorini);

var a1 = L.latLng({lat: bratislava[0].x, lon: bratislava[0].y});
var a2 = L.latLng({lat: chorvatsko[0].x, lon: chorvatsko[0].y});
var a3 = L.latLng({lat: gdansk[0].x, lon: gdansk[0].y});
var a4 = L.latLng({lat: plitvice[0].x, lon:  plitvice[0].y});
var a5 = L.latLng({lat: praha[0].x, lon:  praha[0].y});
var a6 = L.latLng({lat: santorini[0].x, lon:  santorini[0].y});

var route = L.Routing.control({
    waypoints: [
        a6,
        a1,
        a5,
        a3,
        a2,
        a4
    ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim()
})


export function trasa() {
    var toggle = document.getElementById("toggle");
    route.addTo(map);
    if(toggle.checked !== true){
        toggle.click();
    }

}

export function del(){
    var toggle = document.getElementById("toggle");
    if (toggle.checked === true){
        route.addTo(map);
    } else {
        map.removeControl(route);
    }
}



function onBratislava(e) {
    var bratislavaclick = document.getElementById("bratislava1").firstChild
    bratislavaclick.click()
}
function onChrovatsko(e) {
    var chorvatskoclick = document.getElementById("chorvatsko1").firstChild
    chorvatskoclick.click()
}
function onGdansk(e) {
    var gdanskclick = document.getElementById("gdansk1").firstChild
    gdanskclick.click()
}
function onPlitvice(e) {
    var plitviceclick = document.getElementById("plitvice1").firstChild
    plitviceclick.click()
}

function onPraha(e) {
    var prahaclick = document.getElementById("praha1").firstChild
    prahaclick.click()
}
function onSantorini(e) {
    var santoriniclick = document.getElementById("santorini1").firstChild
    santoriniclick.click()
}



