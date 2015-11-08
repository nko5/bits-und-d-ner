var interval = 1000
var ARENA_SIZE = 150

var availableModels = []

loadModel( 'tire', new THREE.Vector3(0,0,35), 0.75, '#ED8989', availableModels ),
loadModel( 'bin', new THREE.Vector3(0,0,40), 1.5, '#ED89ED', availableModels ),
loadModel( 'bottle', new THREE.Vector3(0,0,45), 2, '#EDB589', availableModels )
loadModel( 'tv', new THREE.Vector3(0,0,30), 2.5, '#8989ED', availableModels )

// Spawn rubbish
setInterval(function() {

  if( document.visibilityState && document.visibilityState !== 'visible' )
    return

  var position = randomSpherePoint()

  position.x *= Math.random() * ARENA_SIZE - ARENA_SIZE / 2
  position.y *= Math.random() * ARENA_SIZE - ARENA_SIZE / 2
  position.z *= Math.random() * ARENA_SIZE - ARENA_SIZE / 2

  var randomIndex = Math.floor(Math.random() * availableModels.length)
  var model = availableModels[randomIndex].clone()
  var body = new CANNON.Body({ mass: 1000 })

  body.mesh = model

  model.position.x = position.x
  model.position.y = position.y
  model.position.z = position.z

  body.addShape( new CANNON.Sphere( model.geometry.boundingSphere.radius ) )
  body.position.copy( model.position )

  var rotationX = Math.random()
  var rotationY = Math.random()
  var rotationZ = Math.random()

  body.angularVelocity.x = rotationX
  body.angularVelocity.y = rotationY
  body.angularVelocity.z = rotationZ

  physics.addBody( body )
  scene.add( model )

}, 1000)


// Spawn asteroids

var asteroids = []
loadModel( 'asteroid', new THREE.Vector3(0,0,0), 0.2, '#B5B5B5', asteroids )

setInterval( function() {

  if( document.visibilityState && document.visibilityState !== 'visible' )
    return

  var model = asteroids[0].clone()
  var body = new CANNON.Body({ mass: 2000 })

  body.mesh = model

  model.position.x = -( ARENA_SIZE/2 ) + ( ARENA_SIZE * Math.random() )
  model.position.y = -( ARENA_SIZE/2 ) + ( ARENA_SIZE * Math.random() )
  model.position.z = -( ARENA_SIZE/2 )

  body.addShape( new CANNON.Sphere( 2 ) )
  body.position.copy( model.position )

  body.velocity.set(
    ( Math.random() * 3 ) -1.5,
    ( Math.random() * 3 ) -1.5,
    Math.random() * 20
  )

  setInterval(function() {
    if( body.position.z > ARENA_SIZE/2 ) {
      physics.removeBody( body )
      scene.remove( model )
    }
  }, 20)

  var rotationX = Math.random()
  var rotationY = Math.random()
  var rotationZ = Math.random()

  body.angularVelocity.x = rotationX
  body.angularVelocity.y = rotationY
  body.angularVelocity.z = rotationZ

  physics.addBody( body )
  scene.add( model )

}, interval )
