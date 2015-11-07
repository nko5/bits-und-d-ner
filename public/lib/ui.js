var rubbishElement = document.querySelector('#rubbish')
var healthElement = document.querySelector('#health')

function adjustRubbishScore( ammount ) {
  var current = parseInt(rubbishElement.innerText, 10)
  rubbishElement.innerText = current + ammount
}

function adjustHealthScore( ammount ) {
  var current = parseInt(healthElement.innerText, 10)
  healthElement.innerText = current + ammount
}
