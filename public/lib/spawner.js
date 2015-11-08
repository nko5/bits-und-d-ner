var interval = 1000

var availableModels = []

// loadModel( 'asteroid', new THREE.Vector3(0,0,25), 0.1, '#AAA', availableModels ),
loadModel( 'tire', new THREE.Vector3(0,0,35), 0.75, '#EDED89', availableModels ),
loadModel( 'bin', new THREE.Vector3(0,0,40), 1, '#ED89ED', availableModels ),
loadModel( 'bottle', new THREE.Vector3(0,0,45), 0.5, '#EDB589', availableModels )
loadModel( 'tv', new THREE.Vector3(0,0,30), 2, '#8989ED', availableModels )

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

  var rotationX = Math.random()/100
  var rotationY = Math.random()/100
  var rotationZ = Math.random()/100

  setInterval( function(){
    model.rotation.x += rotationX
    model.rotation.y += rotationY
    model.rotation.z += rotationZ
  }, 20 )

  scene.add( model )

}, 1000)
