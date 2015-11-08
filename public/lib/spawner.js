var interval = 1000

var availableModels = []

// addModelToScene( 'asteroid', new THREE.Vector3(0,0,25), 0.1, '#AAA', availableModels ),
addModelToScene( 'tire', new THREE.Vector3(0,0,35), 0.75, '#EDED89', availableModels ),
addModelToScene( 'bin', new THREE.Vector3(0,0,40), 1, '#ED89ED', availableModels ),
addModelToScene( 'bottle', new THREE.Vector3(0,0,45), 0.5, '#EDB589', availableModels )
addModelToScene( 'tv', new THREE.Vector3(0,0,30), 2, '#8989ED', availableModels )

setInterval(function() {
  var position = new THREE.Vector3(
    Math.random() * 50 - 25,
    Math.random() * 50 - 25,
    Math.random() * 50 - 25
  )

  var randomIndex = Math.floor(Math.random() * availableModels.length)
  var model = availableModels[randomIndex].clone()
  model.position.x = position.x
  model.position.y = position.y
  model.position.z = position.z

  scene.add( model )

}, 1000)
