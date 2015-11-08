var interval = 1000
var ARENA_SIZE = 100

var availableModels = []

loadModel( 'tire', new THREE.Vector3(0,0,35), 0.75, '#EDED89', availableModels ),
loadModel( 'bin', new THREE.Vector3(0,0,40), 1.5, '#ED89ED', availableModels ),
loadModel( 'bottle', new THREE.Vector3(0,0,45), 2, '#EDB589', availableModels )
loadModel( 'tv', new THREE.Vector3(0,0,30), 2.5, '#8989ED', availableModels )

// Spawn rubbish
setInterval(function() {
  var position = new THREE.Vector3(
    Math.random() * ARENA_SIZE - ARENA_SIZE / 2,
    Math.random() * ARENA_SIZE - ARENA_SIZE / 2,
    Math.random() * ARENA_SIZE - ARENA_SIZE / 2
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


// Spawn asteroids

var asteroids = []
loadModel( 'asteroid', new THREE.Vector3(0,0,0), 0.2, '#B5B5B5', asteroids )

setInterval(function() {
  var model = asteroids[0].clone()

  model.position.x = -(ARENA_SIZE/2) + (ARENA_SIZE * Math.random())
  model.position.y = -(ARENA_SIZE/2) + (ARENA_SIZE * Math.random())
  model.position.z = -(ARENA_SIZE/2)

  setInterval(function() {
    model.position.z += 0.1
    if (model.position.z > ARENA_SIZE/2) {
      scene.remove(model)
    }
  }, 20)

  var rotationX = Math.random()/10
  var rotationY = Math.random()/10
  var rotationZ = Math.random()/10

  setInterval( function(){
    model.rotation.x += rotationX
    model.rotation.y += rotationY
    model.rotation.z += rotationZ
  }, 20 )

  scene.add( model )
}, interval)
