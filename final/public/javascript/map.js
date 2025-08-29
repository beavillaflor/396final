let map;
async function initMap() {
const { Map } = await google.maps.importLibrary("maps");
const { Marker, AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
const boonies = { lat: 41.964065875250284, lng: -87.68797962442933 };
const rubys = { lat: 41.97196516933463, lng: -87.72070274838661 };
const amberagave = { lat: 41.90557391036398, lng: -87.66988833351267 };
const kasama = {lat: 41.89983459814913, lng: -87.67553388589911 };
const sfc = {lat : 41.97319175311917, lng: -87.7448073269037};
const loopjollibee = {lat : 41.880422920393165, lng: -87.62467853193127};
const bayandiner = {lat: 41.961745439403444, lng: -87.67512468034181 };
const bayanko = {lat: 41.961779528756885, lng: -87.67470751102927 };
const position = { lat: 41.92954436369713, lng: -87.67754493192916 };
map = new Map(document.getElementById("map"), {
    center: position,
    zoom: 12,
    mapId: "5d0b1076b929587c9a335333",
});
booniesMarker = new Marker({
    position: boonies,
    map: map,
    title: "Boonie's Filipino Restaurant",
});
rubysMarker = new Marker({
    position: rubys,
    map: map,
    title: "Ruby's Fast Food",
});
amberagaveMarker = new Marker({
    position: amberagave,
    map: map,
    title: "Amber Agave",
});
kasamaMarker = new Marker({
    position: kasama,
    map: map,
    title: "Kasama",
});
sfcMarker = new Marker({
    position: sfc,
    map: map,
    title: "Seafood City",
});
loopjollibeeMarker = new Marker({
    position: loopjollibee,
    map: map,
    title: "Jollibee",
});
bayandinerMarker = new Marker({
    position: bayandiner,
    map: map,
    title: "Bayan Ko Diner",
});
bayankoMarker = new Marker({
    position: bayanko,
    map: map,
    title: "Bayan Ko",
});
}

initMap();