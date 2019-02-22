// Write your swapi code in this file!
// let crawlButton = document.getElementById('crawlBtn')
// crawlButton.addEventListener('click', getOpeningCrawl)
//
// function getOpeningCrawl(){
//   fetch('https://swapi.co/api/films/1')
//   .then(res => res.json())
//   .then(json => postCrawl(json))
// }
//
// function postCrawl(json){
//   document.getElementById('crawlDiv').innerText = json.opening_crawl
// }
//
// let planetButton = document.getElementById('findPlanet')
// planetButton.addEventListener('click', getPlanet)
//
// function getPlanet(e) {
//   e.preventDefault()
//   let planetInput = document.getElementById('planetInput')
//   let input = planetInput.value
//   planetInput.value = ''
//   fetch(`https://swapi.co/api/planets/${input}`)
//   .then(res => res.json())
//   .then(json => postPlanet(json))
// }
//
// function postPlanet(json){
//   document.getElementById('planetData').innerHTML += `<p>Planet Name: ${json.name}</p><p>Planet Climate: ${json.climate}</p>`
// }
//
// document.addEventListener('DOMContentLoaded', getDroids)
// function getDroids() {
//     fetch(`https://swapi.co/api/people/`)
//     .then(res => res.json())
//     .then(json => postDroids(json))
// }
//
// let data
// function postDroids(json) {
//   data = json
//   document.getElementById('droid-2').innerHTML += `<span>Droid Name: ${json.results[2].name}</span><span>Droid Height: ${json.results[2].height}</span><span>Droid Mass: ${json.results[2].mass}</span><span><button id="getHomePlanet2">Get Home Planet</button></span>`
//   document.getElementById('droid-3').innerHTML += `<span>Droid Name: ${json.results[3].name}</span><span>Droid Height: ${json.results[3].height}</span><span>Droid Mass: ${json.results[3].mass}</span><span><button id="getHomePlanet3">Get Home Planet</button></span>`
// }
//
// document.getElementById('getHomePlanet2').addEventListener('click', getHomePlanet2(data))
// document.getElementById('getHomePlanet3').addEventListener('click', getHomePlanet3(data))
//
// function getHomePlanet2(data) {
//   fetch(`${data.results.[2].homeworld}`)
//   .then(res => res.json())
//   .then(json => postHome2(json))
// }
//
// function getHomePlanet3(data) {
//   fetch(`${data.results.[3].homeworld}`)
//   .then(res => res.json())
//   .then(json => postHome3(json))
// }
//
// function postHome2(json) {
//   document.getElementById('droid-2').innerHTML += `<span>Droid Name: ${json.name}</span`
// }
//
// function postHome3(json) {
//   document.getElementById('droid-2').innerHTML += `<span>Droid Name: ${json.name}</span`
// }
