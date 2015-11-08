var rubbishElement = document.querySelector( '#rubbish' )
var healthElement = document.querySelector( '#health' )

function adjustRubbishScore( ammount ) {
  var current = parseInt( rubbishElement.innerText, 10 )
  rubbishElement.innerText = current + ammount
}

function adjustHealthScore( ammount ) {
  var current = parseInt( healthElement.innerText, 10 )
  healthElement.innerText = current + ammount
  if ( (current + ammount) <= 0 ) {
    var rubbish = parseInt( rubbishElement.innerText, 10 )
    alert('Congratulations, you collected ' + rubbish + ' items of rubbish!')
    location.reload()
  }
}
