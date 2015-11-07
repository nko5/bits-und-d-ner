var rubbishElement = document.querySelector('#rubbish')
var healthElement = document.querySelector('#health')

function modifyRubbishScore( ammount ) {
  var current = parseInt(rubbishElement.innerText, 10)
  rubbishElement.innerText = current + ammount
}

function modifyHealthScore( ammount ) {
  var current = parseInt(healthElement.innerText, 10)
  healthElement.innerText = current + ammount
}
