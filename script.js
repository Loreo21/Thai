  /* THAILANDIA '26 — V3 */

const departureDate = "2026-10-01T19:05:00";

/* Dati delle destinazioni. Le coordinate possono essere modificate liberamente. */
const destinations = [
  {id:"bangkok",number:1,name:"Bangkok",dates:"2–5 e 17–18 ottobre",region:"cities",icon:"✈️",imageClass:"bangkok",description:"Base tattica per sopravvivere al caos, allo street food, ai templi e ai Pad Thai.",tags:["🍜 Street food","🏯 Templi","🌃 Capitale"],coords:[13.7563,100.5018]},
  {id:"maewang",number:2,name:"Mae Wang",dates:"5 ottobre",region:"north",icon:"🐘",imageClass:"maewang",description:"Bungalow da 6. Sveglia all'alba: i nostri vicini di casa pesano 3 tonnellate.",tags:["🐘 Natura","🏡 Bungalow","🌄 Alba"],coords:[18.6165,98.7184]},
  {id:"chiangmai",number:3,name:"Chiang Mai",dates:"6–10 ottobre",region:"north",icon:"🚂",imageClass:"chiangmai",description:"Il rifugio nel cuore storico della città, tra templi antichi e Terra degli Angeli.",tags:["🏯 Templi","🌺 Cultura","🌿 Natura"],coords:[18.7883,98.9853]},
  {id:"chiangrai",number:4,name:"Chiang Rai",dates:"Tappa nel nord",region:"north",icon:"📍",imageClass:"north",description:"La tappa più a nord del nostro viaggio, tra templi e paesaggi del nord.",tags:["🏯 Templi","🌿 Nord","🧭 Esplorazione"],coords:[19.9105,99.8406]},
  {id:"surat",number:5,name:"Surat Thani",dates:"Tappa di trasferimento",region:"south",icon:"🚐",imageClass:"surat",description:"Tappa di passaggio verso Khao Sok e il sud della Thailandia.",tags:["🚐 Transfer","🗺️ Sud"],coords:[9.1382,99.3217]},
  {id:"khaosok",number:6,name:"Khao Sok",dates:"10–12 ottobre",region:"south",icon:"🌿",imageClass:"khaosok",description:"Giungla primordiale, umidità e spirito di adattamento.",tags:["🌴 Giungla","🛶 Natura","🐒 Wildlife"],coords:[8.9120,98.5290]},
  {id:"aonang",number:7,name:"Ao Nang",dates:"12–17 ottobre",region:"south",icon:"🏖️",imageClass:"aonang",description:"Peace, laughter & sport: il meritato relax tropicale vista mare.",tags:["🏖️ Spiagge","🚤 Isole","🌅 Tramonti"],coords:[8.0340,98.8390]}
];

// ============================================================
// PUNTI DI INTERESSE
// ============================================================

const pointsOfInterest = [
  { id:"grand-palace", name:"The Grand Palace & Wat Phra Kaew",category:"tempio",icon:"🏯",description:"Non un semplice tempio, ma un’intera cittadella fortificata",coords:[13.749958362373388,100.49158314976079]},
  { id:"wat-pho",name:"Wat Pho", category:"tempio",icon:"🏯",description:"Il tempio ospita una statua dorata gigantesca", coords:[13.746425585993517,100.49123359275178]},
  { id:"wat-arun", name:"Wat Arun", category:"tempio", icon:"🏯", description:"Meraviglia architettonica", coords:[13.74377008118056,100.48888915513116] },
  { id:"wat-paknam",  name:"Wat Paknam Phasi Charoen",  category:"tempio",  icon:"🏯",  description:"Buddha gigante",  coords:[13.721775650225645,100.47035387520229]},
  { id:"wat-samphran", name:"Wat Samphran", category:"tempio", icon:"🏯", description:"Il tempio del Drago", coords:[13.735826307711193,100.21534748252833]},
  { id:"ayutthaya", name:"Ayutthaya", category:"tempio", icon:"🏯", description:"Antica capitale", coords:[14.356580234863477,100.5829457777426] },
  { id:"lumphini", name:"Lumphini Park", category:"parco", icon:"🌳", description:"Oasi nella giungla d'asfalto", coords:[13.731469762152459,100.54169840019695] },
  { id:"ancient-city", name:"Ancient City", category:"parco", icon:"🌳", description:"Parco-museo", coords:[13.539580365796427,100.62322996326446]},
  { id:"bang-krachao", name:"Bang Krachao", category:"parco", icon:"🌳", description:"Polmone verde", coords:[13.696793252750115,100.5642226452388] },
  { id:"dusit-central-park", name:"Dusit Central Park", category:"parco", icon:"🌳", description:"Giardino futuristico", coords:[13.728645324127115,100.53752795202692]},
  { id:"icon-siam", name:"Icon Siam", category:"shopping", icon:"🛍️", description:"Moderno e lussuoso", coords:[13.726185704554677,100.50997955022778]},
  { id:"terminal-21", name:"Terminal 21 Asok", category:"shopping", icon:"🛍️", description:"Multiculturale", coords:[13.737990638183101,100.56042055730217] },
  { id:"mbk", name:"MBK Center", category:"shopping", icon:"🛍️", description:"Mercato storico", coords:[13.744827124932158,100.52992381391117] },
  { id:"maeklong", name:"Maeklong Railway Market", category:"mercato", icon:"🚂", description:"Occhio al treno", coords:[13.407437748337097,99.99918094413748]},
  { id:"damnoen-saduak", name:"Damnoen Saduak", category:"mercato", icon:"🛶", description:"Mercato galleggiante", coords:[13.520183763672543,99.958601623242]},
  { id:"amphawa", name:"Amphawa", category:"mercato",  icon:"🍜",description:"Street food sull'acqua", coords:[13.42527750583426,99.9549225705168]},
  { id:"chinatown", name:"Chinatown", category:"nightlife", icon:"🌃", description:"Labirinto al neon", coords:[13.737392400944513,100.51294952915383] },
  { id:"khao-san", name:"Khao San", category:"streetfood", icon:"🍜", description:"Insetti?", coords:[13.758920577309246,100.49724706992998]},
  { id:"tha-phae-gate", name:"Tha Phae Gate", category:"entrydoor",icon:"🏯",description:"Antica via d'accesso", coords:[18.787824861675983, 98.99336769890905]},
  { id:"chang-puak-gate", name:"Chang Puak Gate",category: "entrydoor", icon:"🏯",description:" Antica via d'accesso", coords:[18.795549341688783, 98.98655910515735]},
  { id:"wat-chedi-luang",name:"Wat Chedi Luang", category: "tempio",icon:"🏯",description:"Mastodontica piramide di mattoni",coords:[18.786964603817076, 98.9865969279568]},
  { id:"wat-phra-singh", name:"Wat Phra Singh",category:"tempio",icon:"🏯",description:"Tempio più curato e decorato",coords:[18.788559872127443, 98.98198567957849]},
  { id:"wat-sri-suphan", name:"Wat Sri Suphan",category:"tempio",icon:"🏯",description:"Tempio ricoperto di lastre d'argento",coords:[18.778656644361792, 98.98360397137036]},
  { id:"night-bazaar", name:"Night Bazaar",category:"nightlife", icon:"🌃",description:"Labirinto di luci e bancarelle",coords:[18.78598411881089, 99.00070920304864]},
  { id:"dantewada-land-of-angels", name:"Dantewada Land of Angels", category:"parco", icon:"🌳", description:"Terra degli angeli", coords:[19.123223336964536, 98.9420461341175]},
  { id:"buatong-waterfall", name:"Buatong Waterfall", category:"parco", icon:"🌳", description:"Cascate appiccicose", coords:[19.068896999346254, 99.07909444904108]},
  { id:"doi-suthep", name:"Doi Suthep",category:"tempio",icon:"🏯",description:"Tempio delle nuvole",coords:[18.816387994059635, 98.89177273148617]},
  { id:"doi-inthanon", name:"Doi Inthanon",category:"tempio",icon:"🏯",description:"Il tetto della Thailandia",coords:[18.588001513741112, 98.48706119288231]},
  { id:"wat-rong-khun", name:"Wat Rong Khun",category:"tempio",icon:"🏯",description:"Tempio bianco",coords:[19.82428, 99.76319]},
  { id:"wat-rong-suea-ten", name:"Wat Rong Suea Ten",category:"tempio",icon:"🏯",description:"Tempio blu",coords:[19.9233, 99.84179]},
  { id:"wat-huay-pla-kang", name:"Wat Huay Pla Kang",category:"tempio",icon:"🏯",description:"Grande Dea",coords:[19.9492,99.80648]},
  { id:"mae-kachan", name:"Mae Kachan",category:"terme",icon:"♨️",description:"Terme bollenti",coords:[19.1150,99.46281]},
  { id:"cheow-lan", name:"Cheow Lan", category:"lago", icon:"💧", description:"Lago verde smeraldo", coords:[8.97667, 98.80444]},
  { id:"railay-beach", name:"Railay Beach", category:"spiaggia", icon:"🏖️", description:"Baia segreta", coords:[8.01148, 98.83776]}
];


/* Tratte indicative. Se conoscerete l'ordine esatto di Chiang Rai, basta cambiare questo array. */
const routeSegments = [
  {from:"bangkok",to:"maewang",icon:"✈️"},
  {from:"maewang",to:"chiangmai",icon:"🚐"},
  {from:"chiangmai",to:"chiangrai",icon:"🚂"},
  {from:"chiangmai",to:"surat",icon:"✈️"},
  {from:"surat",to:"khaosok",icon:"🚐"},
  {from:"khaosok",to:"aonang",icon:"🚐"},
  {from:"aonang",to:"bangkok",icon:"✈️"}
];

const accommodations = [
  {dates:"2–5",city:"Bangkok",icon:"🍜",name:"Hotel Pho Place",text:"Base tattica per sopravvivere al caos e ai Pad Thai."},
  {dates:"5",city:"Mae Wang",icon:"🐘",name:"Bungalow da 6",text:"Sveglia all'alba, i nostri vicini di casa pesano 3 tonnellate."},
  {dates:"6–10",city:"Chiang Mai",icon:"🌸",name:"8th House @ Old Town",text:"Il rifugio nel cuore storico della città, tra templi antichi e Terra degli Angeli."},
  {dates:"10–12",city:"Khao Sok",icon:"🌴",name:"Silver Cliff Resort",text:"Spirito di adattamento e umidità nella giungla primordiale."},
  {dates:"12–17",city:"Ao Nang",icon:"🥥",name:"Peace, laughter & sport",text:"Il meritato relax tropicale vista mare."},
  {dates:"17–18",city:"Bangkok",icon:"🥂",name:"Urban Sathorn Hotel",text:"Ultima notte nella capitale... a mezzanotte si sboccia!"}
];

const checklistItems = [["passport","Passaporto"],["insurance","Assicurazione viaggio"],["flights","Biglietti aerei"],["hotels","Prenotazioni hotel"],["esim","eSIM / SIM"],["adapter","Adattatore / caricabatterie"],["maria","Maria"],["medicine","Vaccini"]];

const getDestination = id => destinations.find(d => d.id === id);

/* COUNTDOWN */
function updateCountdown(){
  const target = new Date(departureDate).getTime();
  const diff = target - Date.now();
  const msg = document.getElementById("countdown-message");
  if(Number.isNaN(target)){msg.textContent="Data non valida: controlla departureDate in script.js.";return;}
  if(diff<=0){["days","hours","minutes","seconds"].forEach(id=>document.getElementById(id).textContent="0");msg.textContent="SI PARTE! 🇹🇭";return;}
  const s=Math.floor(diff/1000);
  document.getElementById("days").textContent=Math.floor(s/86400);
  document.getElementById("hours").textContent=String(Math.floor((s%86400)/3600)).padStart(2,"0");
  document.getElementById("minutes").textContent=String(Math.floor((s%3600)/60)).padStart(2,"0");
  document.getElementById("seconds").textContent=String(s%60).padStart(2,"0");
}
updateCountdown(); setInterval(updateCountdown,1000);

/* MENU */
const menuToggle=document.querySelector(".menu-toggle"),navLinks=document.querySelector(".nav-links");
menuToggle.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{navLinks.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}));

/* ITINERARIO */
const displayOrder=["bangkok","maewang","chiangmai","chiangrai","surat","khaosok","aonang"];
const timeline=document.getElementById("timeline"),chips=document.getElementById("route-chips");
displayOrder.forEach(id=>{
  const d=getDestination(id); if(!d)return;
  const item=document.createElement("article"); item.className="timeline-item"; item.dataset.destination=id;
  item.innerHTML=`<div class="timeline-dot">${String(d.number).padStart(2,"0")}</div><div class="timeline-card"><div class="place-image ${d.imageClass}">${d.icon}</div><div class="place-content"><span class="date">${d.dates}</span><h3>${d.name}</h3><p>${d.description}</p><div class="tags">${d.tags.map(t=>`<span>${t}</span>`).join("")}</div><button class="go-to-map" type="button" data-go-map="${d.id}">🗺️ Vedi sulla mappa</button></div></div>`;
  timeline.appendChild(item);
  const chip=document.createElement("button"); chip.className="route-chip";chip.type="button";chip.dataset.goMap=d.id;chip.textContent=`${d.icon} ${d.name}`;chips.appendChild(chip);
});

/* ALLOGGI */
const sleepList=document.getElementById("sleep-list");
accommodations.forEach(a=>{const card=document.createElement("article");card.className="sleep-card";card.innerHTML=`<div class="sleep-date">${a.dates}<br><span>OTT</span></div><div class="sleep-icon">${a.icon}</div><div><h3>${a.city}</h3><p><strong>${a.name}</strong></p><p>${a.text}</p></div>`;sleepList.appendChild(card);});

/* CHECKLIST */
const checklistGrid=document.getElementById("checklist-grid");
checklistItems.forEach(([id,label])=>{const l=document.createElement("label");l.innerHTML=`<input type="checkbox" data-check="${id}"><span>${label}</span>`;checklistGrid.appendChild(l);});
const boxes=document.querySelectorAll("[data-check]"),progress=document.getElementById("progress"),progressText=document.getElementById("progress-text");
function updateChecklist(){let done=0;boxes.forEach(b=>{b.checked=localStorage.getItem(`thai-check-${b.dataset.check}`)==="true";if(b.checked)done++;});const p=Math.round(done/boxes.length*100);progress.style.width=`${p}%`;progressText.textContent=`${p}%`;}
boxes.forEach(b=>b.addEventListener("change",()=>{localStorage.setItem(`thai-check-${b.dataset.check}`,String(b.checked));updateChecklist();}));updateChecklist();

/* MAPPA */
let map=null,mapReady=false;const markers={},poiMarkers=[],routeLayers=[],transportMarkers=[];
function destinationIcon(d,active=false){return L.divIcon({className:"travel-marker",html:`<div class="travel-marker-inner ${active?"active":""}">${d.number}</div>`,iconSize:[38,38],iconAnchor:[19,19],popupAnchor:[0,-19]});}
function poiIcon(poi){return L.divIcon({className:"poi-marker",html:`<div class="poi-marker-inner">${poi.icon}</div>`,iconSize:[32,32],iconAnchor:[16,16],popupAnchor:[0,-16]});}
function transportIcon(icon){return L.divIcon({className:"transport-wrapper",html:`<div class="transport-marker">${icon}</div>`,iconSize:[30,30],iconAnchor:[15,15]});}
function popup(d){return `<div class="popup-title">${d.icon} ${d.name}</div><div class="popup-date">${d.dates}</div><div class="popup-text">${d.description}</div><button class="popup-button" data-popup="${d.id}">Vedi la tappa</button>`;}

function renderMapList(){const list=document.getElementById("map-place-list");destinations.forEach(d=>{const b=document.createElement("button");b.type="button";b.className="map-place";b.dataset.destination=d.id;b.dataset.region=d.region;b.innerHTML=`<span class="map-number">${String(d.number).padStart(2,"0")}</span><span><span class="map-place-name">${d.icon} ${d.name}</span><span class="map-place-date">${d.dates}</span></span><span class="map-transport">${d.icon}</span>`;b.addEventListener("click",()=>focusDestination(d.id));list.appendChild(b);});}
renderMapList();

function initializeMap(){
  if(mapReady){setTimeout(()=>map.invalidateSize(),50);return;}
  if(typeof L==="undefined"){console.error("Leaflet non è stato caricato.");return;}
  map=L.map("travel-map",{zoomControl:true,scrollWheelZoom:true,dragging:true,touchZoom:true,doubleClickZoom:true});
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{minZoom:5,maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
  createMarkers();createPOIMarkers();createRoutes();mapReady=true;map.invalidateSize();setTimeout(()=>{map.invalidateSize();fitAll();},100);
}
function createMarkers(){destinations.forEach(d=>{const m=L.marker(d.coords,{icon:destinationIcon(d),zIndexOffset:0}).addTo(map);m.bindPopup(popup(d),{autoPan:true,keepInView:true});m.on("click",()=>selectDestination(d.id));markers[d.id]=m;});}
function createPOIMarkers(){pointsOfInterest.forEach(poi=>{const marker=L.marker(poi.coords,{icon:poiIcon(poi),zIndexOffset:0}).addTo(map);marker.bindPopup(`<div class="popup-title">${poi.icon} ${poi.name}</div><div class="popup-date">${poi.category}</div><div class="popup-text">${poi.description}</div>`);marker.poiCategory=poi.category;poiMarkers.push(marker)});}
function filterMap(category){if(category==="destinations"){destinations.forEach(d=>{if(markers[d.id]){markers[d.id].addTo(map);}});poiMarkers.forEach(marker=>{marker.removeFrom(map);});return;}destinations.forEach(d=>{if(markers[d.id]){markers[d.id].addTo(map);}});poiMarkers.forEach(marker=>{let visible=false;
    if(category==="all"){visible=true;
    }
    else if(category==="food"){
      visible=
        marker.poiCategory==="streetfood" ||
        marker.poiCategory==="mercato";
    }
    else{
      visible=marker.poiCategory===category;
    }

    if(visible){
      marker.addTo(map);
    }else{
      marker.removeFrom(map);
    }
  });}
function createRoutes(){routeSegments.forEach(s=>{const a=getDestination(s.from),b=getDestination(s.to);if(!a||!b)return;const line=L.polyline([a.coords,b.coords],{color:"#0b756d",weight:3,opacity:.82,dashArray:"7 9",lineCap:"round"}).addTo(map);line.bindTooltip(`${s.icon} ${a.name} → ${b.name}`,{sticky:true});routeLayers.push(line);const mid=[(a.coords[0]+b.coords[0])/2,(a.coords[1]+b.coords[1])/2];transportMarkers.push(L.marker(mid,{icon:transportIcon(s.icon),interactive:false}).addTo(map));});}
function fitAll(){if(!mapReady)return;const bounds=L.latLngBounds(destinations.map(d=>d.coords));if(bounds.isValid())map.fitBounds(bounds,{padding:[35,35],maxZoom:7});}
function selectDestination(id){document.querySelectorAll(".map-place").forEach(b=>b.classList.toggle("selected",b.dataset.destination===id));destinations.forEach(d=>{if(markers[d.id])markers[d.id].setIcon(destinationIcon(d,d.id===id));});}
function focusDestination(id){if(!mapReady)initializeMap();const d=getDestination(id),m=markers[id];if(!d||!m||!map)return;selectDestination(id);map.flyTo(d.coords,9,{duration:.8});setTimeout(()=>m.openPopup(),450);}
//collegamneto pulsanti con funzione
document.querySelectorAll(".map-filter").forEach(button=>{button.addEventListener("click",()=>{document.querySelectorAll(".map-filter").forEach(b=>{b.classList.remove("active");});button.classList.add("active");filterMap(button.dataset.filter);});});

/* Collegamento itinerario → mappa */
document.addEventListener("click",e=>{const b=e.target.closest("[data-go-map]");if(!b)return;document.getElementById("mappa").scrollIntoView({behavior:"smooth"});setTimeout(()=>focusDestination(b.dataset.goMap),500);});

/* Collegamento popup → scheda */
document.addEventListener("click",e=>{const b=e.target.closest("[data-popup]");if(!b)return;const card=document.querySelector(`.timeline-item[data-destination="${b.dataset.popup}"]`);if(card)card.scrollIntoView({behavior:"smooth",block:"center"});});

/* Inizializzazione quando la sezione è vicina alla viewport. */
const mapSection=document.getElementById("mappa");
if("IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){initializeMap();observer.disconnect();}},{rootMargin:"300px"});observer.observe(mapSection);}else initializeMap();

window.addEventListener("resize",()=>{if(!map)return;clearTimeout(window.__mapResize);window.__mapResize=setTimeout(()=>map.invalidateSize(),150);});
window.addEventListener("load",()=>{if(map)map.invalidateSize();});
