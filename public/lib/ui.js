var rubbishElement = document.querySelector( '#rubbish' )
var healthElement = document.querySelector( '#health' )

function adjustRubbishScore( ammount ) {
  var current = parseInt( rubbishElement.innerText, 10 )
  var adjustment = current + ammount > 0 ? current + ammount : 0
  rubbishElement.innerText = current + ammount
}

function adjustHealthScore( ammount ) {
  var current = parseInt( healthElement.innerText, 10 )
  var adjustment = current + ammount > 0 ? current + ammount : 0
  healthElement.innerText = current + ammount
}
