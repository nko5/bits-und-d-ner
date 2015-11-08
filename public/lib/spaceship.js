var SPACESHIP_START_POSITION = new THREE.Vector3( 0, 0, 20 )

function putToStart( spaceship ) {
  spaceship.position.set(
    SPACESHIP_START_POSITION.x,
    SPACESHIP_START_POSITION.y,
    SPACESHIP_START_POSITION.z
  )

  spaceship.rotation.set(
    0,
    Math.PI,
    0
  )
}

function createSpaceship( addToScene ) {
  var loader = new THREE.JSONLoader()

  loader.load('models/spaceship.json', function (geometry) {
    var material = new THREE.MeshPhongMaterial({
      color: '#ED8989',
      shading: THREE.FlatShading
    })

    var spaceship = new THREE.Mesh(
      geometry,
      material
    )

    spaceship.rotation.y = Math.PI

    putToStart( spaceship )
    addCamera( spaceship )
    addToScene( spaceship )
  })
}

function addCamera( mesh ) {
  window.spaceshipCamera = new THREE.PerspectiveCamera(
    FOV, window.innerWidth / window.innerHeight, NEAR, FAR
  )

  mesh.add( spaceshipCamera )
  mesh.rotation.y = Math.PI

  spaceshipCamera.position.z = -20
  spaceshipCamera.position.y = 12
  spaceshipCamera.lookAt( mesh.position )

  if ( !DEBUG ) {
    window.currentCamera = spaceshipCamera
  } else {
    scene.add( new THREE.CameraHelper( spaceshipCamera ) )
    mesh.add( new THREE.AxisHelper( 5 ) )
  }
}
